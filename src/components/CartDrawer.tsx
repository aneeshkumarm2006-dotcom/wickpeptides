"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useCart } from "@/contexts/CartContext";
import { cn } from "@/lib/utils";

export function CartDrawer() {
  const { items, itemCount, subtotal, isOpen, setOpen, removeItem, setQuantity } =
    useCart();

  return (
    <Sheet open={isOpen} onOpenChange={setOpen}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md"
        aria-describedby={undefined}
      >
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2 text-brand-navy">
            <ShoppingBag className="size-5" aria-hidden="true" />
            Your Cart
            {itemCount > 0 && (
              <span className="text-sm font-normal text-muted-foreground">
                ({itemCount} {itemCount === 1 ? "item" : "items"})
              </span>
            )}
          </SheetTitle>
        </SheetHeader>

        {items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
            <div className="flex size-16 items-center justify-center rounded-full bg-brand-light">
              <ShoppingBag
                className="size-7 text-brand-navy/60"
                aria-hidden="true"
              />
            </div>
            <div>
              <p className="font-semibold text-brand-navy">Nothing in your cart yet</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Add a few research compounds to begin.
              </p>
            </div>
            <SheetClose
              nativeButton={false}
              render={
                <Link
                  href="/shop"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-brand-navy px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue"
                />
              }
            >
              Explore the Catalog
            </SheetClose>
          </div>
        ) : (
          <>
            {/* Scrollable item list */}
            <ul className="flex-1 divide-y divide-brand-border overflow-y-auto px-5">
              {items.map((item) => (
                <li key={item.id} className="flex gap-3 py-4">
                  <Link
                    href={`/product/${item.slug}`}
                    onClick={() => setOpen(false)}
                    className="relative size-20 shrink-0 overflow-hidden rounded-lg border border-brand-border bg-brand-light"
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="80px"
                      className="object-contain p-2"
                    />
                  </Link>

                  <div className="flex min-w-0 flex-1 flex-col">
                    <div className="flex items-start justify-between gap-2">
                      <div className="min-w-0">
                        <Link
                          href={`/product/${item.slug}`}
                          onClick={() => setOpen(false)}
                          className="line-clamp-2 text-sm font-semibold text-brand-navy hover:text-brand-blue"
                        >
                          {item.name}
                        </Link>
                        {item.dosageLabel && (
                          <p className="mt-0.5 text-xs text-muted-foreground">
                            {item.dosageLabel}
                          </p>
                        )}
                      </div>
                      <button
                        type="button"
                        onClick={() => removeItem(item.id)}
                        aria-label={`Remove ${item.name} from cart`}
                        className="-mr-1 -mt-1 flex size-8 shrink-0 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
                      >
                        <Trash2 className="size-4" />
                      </button>
                    </div>

                    <div className="mt-auto flex items-center justify-between pt-2">
                      {/* Quantity stepper */}
                      <div className="inline-flex items-center rounded-lg border border-brand-border">
                        <button
                          type="button"
                          onClick={() =>
                            setQuantity(item.id, item.quantity - 1)
                          }
                          aria-label="Decrease quantity"
                          className="flex size-8 items-center justify-center text-brand-navy transition-colors hover:bg-brand-light"
                        >
                          <Minus className="size-3.5" />
                        </button>
                        <span className="w-9 text-center text-sm font-semibold text-brand-navy tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            setQuantity(item.id, item.quantity + 1)
                          }
                          aria-label="Increase quantity"
                          className="flex size-8 items-center justify-center text-brand-navy transition-colors hover:bg-brand-light"
                        >
                          <Plus className="size-3.5" />
                        </button>
                      </div>

                      <p className="text-sm font-bold text-brand-navy tabular-nums">
                        ${(item.unitPrice * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <SheetFooter>
              <div className="flex items-center justify-between text-base font-semibold text-brand-navy">
                <span>Subtotal</span>
                <span className="tabular-nums">${subtotal.toFixed(2)}</span>
              </div>
              <p className="text-xs text-muted-foreground">
                Shipping &amp; taxes are calculated at checkout.
              </p>
              <button
                type="button"
                onClick={() => {
                  // Frontend-only clone — no real payment processing.
                  window.alert(
                    "This is a demo storefront — checkout isn't available."
                  );
                }}
                className={cn(
                  "flex h-12 w-full items-center justify-center rounded-xl bg-brand-navy px-5 text-sm font-semibold text-white transition-colors hover:bg-brand-blue"
                )}
              >
                Checkout
              </button>
              <SheetClose
                render={
                  <button
                    type="button"
                    className="text-center text-sm font-medium text-muted-foreground transition-colors hover:text-brand-navy"
                  />
                }
              >
                Keep shopping
              </SheetClose>
            </SheetFooter>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}

export default CartDrawer;
