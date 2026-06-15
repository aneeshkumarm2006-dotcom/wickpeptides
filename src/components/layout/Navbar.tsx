"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, User, X } from "lucide-react";

import { CartButton } from "@/components/cart/CartButton";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop" },
  { href: "/about", label: "About" },
  { href: "/coas", label: "COAs" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-500",
        scrolled || mobileOpen
          ? "border-border bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/75"
          : "border-transparent bg-transparent"
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:h-28 sm:px-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex shrink-0 items-center"
          aria-label="Wick Peptides home"
        >
          <span className="text-lg font-bold uppercase tracking-widest text-foreground sm:text-2xl">
            Wick Peptides
          </span>
        </Link>

        {/* Center nav (desktop) */}
        <nav className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                data-status={active ? "active" : undefined}
                className="group relative px-3 py-2 text-xs font-medium uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 h-px w-0 -translate-x-1/2 bg-primary transition-all duration-300 group-hover:w-4/5 group-data-[status=active]:w-4/5" />
              </Link>
            );
          })}
        </nav>

        {/* Right actions */}
        <div className="flex items-center gap-1">
          <Link
            href="/auth"
            aria-label="Account"
            className="hidden h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-surface hover:text-foreground sm:inline-flex"
          >
            <User className="h-4 w-4" aria-hidden="true" />
          </Link>
          <CartButton />
          <button
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-surface hover:text-foreground lg:hidden"
          >
            {mobileOpen ? (
              <X className="h-4 w-4" aria-hidden="true" />
            ) : (
              <Menu className="h-4 w-4" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="border-t bg-background lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-4 py-2 sm:px-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className={cn(
                  "rounded-md px-2 py-3 text-xs font-medium uppercase tracking-widest transition-colors hover:bg-surface",
                  isActive(link.href)
                    ? "text-foreground"
                    : "text-muted-foreground"
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}

export default Navbar;
