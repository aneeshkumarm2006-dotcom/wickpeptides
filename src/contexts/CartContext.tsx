"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

import { CartDrawer } from "@/components/CartDrawer";

/** Max quantity per line item — matches the product page stepper. */
export const MAX_QUANTITY = 10;

const STORAGE_KEY = "wp_cart";

export type CartItem = {
  /** Unique line id: `${slug}__${dosageLabel ?? "default"}`. */
  id: string;
  slug: string;
  name: string;
  dosageLabel?: string;
  unitPrice: number;
  image: string;
  quantity: number;
};

/** Everything needed to add a line, minus the derived id/quantity. */
export type AddToCartInput = {
  slug: string;
  name: string;
  dosageLabel?: string;
  unitPrice: number;
  image?: string;
  quantity?: number;
};

type CartContextValue = {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  isOpen: boolean;
  addItem: (input: AddToCartInput) => void;
  removeItem: (id: string) => void;
  setQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
  setOpen: (open: boolean) => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const DEFAULT_IMAGE = "/vial-product.svg";

function lineId(slug: string, dosageLabel?: string) {
  return `${slug}__${dosageLabel ?? "default"}`;
}

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  // Load any persisted cart once on mount (client-only — avoids SSR mismatch).
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as CartItem[];
        if (Array.isArray(parsed)) setItems(parsed);
      }
    } catch {
      // Ignore malformed/unavailable storage — start with an empty cart.
    }
    setHydrated(true);
  }, []);

  // Persist on every change, but only after the initial load.
  useEffect(() => {
    if (!hydrated) return;
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
    } catch {
      // Storage may be full or disabled — non-fatal for a frontend-only cart.
    }
  }, [items, hydrated]);

  const addItem = useCallback((input: AddToCartInput) => {
    const id = lineId(input.slug, input.dosageLabel);
    const addQty = input.quantity ?? 1;
    setItems((prev) => {
      const existing = prev.find((item) => item.id === id);
      if (existing) {
        return prev.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: Math.min(MAX_QUANTITY, item.quantity + addQty),
              }
            : item
        );
      }
      return [
        ...prev,
        {
          id,
          slug: input.slug,
          name: input.name,
          dosageLabel: input.dosageLabel,
          unitPrice: input.unitPrice,
          image: input.image ?? DEFAULT_IMAGE,
          quantity: Math.min(MAX_QUANTITY, Math.max(1, addQty)),
        },
      ];
    });
    setIsOpen(true);
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  }, []);

  const setQuantity = useCallback((id: string, quantity: number) => {
    setItems((prev) => {
      if (quantity <= 0) return prev.filter((item) => item.id !== id);
      return prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.min(MAX_QUANTITY, quantity) }
          : item
      );
    });
  }, []);

  const clearCart = useCallback(() => setItems([]), []);
  const openCart = useCallback(() => setIsOpen(true), []);
  const closeCart = useCallback(() => setIsOpen(false), []);

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );
  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.unitPrice * item.quantity, 0),
    [items]
  );

  const value = useMemo<CartContextValue>(
    () => ({
      items,
      itemCount,
      subtotal,
      isOpen,
      addItem,
      removeItem,
      setQuantity,
      clearCart,
      openCart,
      closeCart,
      setOpen: setIsOpen,
    }),
    [
      items,
      itemCount,
      subtotal,
      isOpen,
      addItem,
      removeItem,
      setQuantity,
      clearCart,
      openCart,
      closeCart,
    ]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
      <CartDrawer />
    </CartContext.Provider>
  );
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a <CartProvider>");
  }
  return ctx;
}
