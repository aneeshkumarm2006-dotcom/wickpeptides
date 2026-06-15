import type { Metadata } from "next";
import { Inter, Geist_Mono, Poppins, Montserrat } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/contexts/CartContext";
import { Navbar } from "@/components/layout/Navbar";
import { AgeGate } from "@/components/AgeGate";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://kingbiolabs.com"),
  title: {
    template: "%s — King Bio Labs",
    default: "King Bio Labs — Verified Purity. No Exceptions.",
  },
  description:
    "Research-grade compounds from certified synthesis facilities. Third-party tested. Full COA on every batch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${poppins.variable} ${montserrat.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <CartProvider>
          <Navbar />
          {children}
          <AgeGate />
        </CartProvider>
      </body>
    </html>
  );
}
