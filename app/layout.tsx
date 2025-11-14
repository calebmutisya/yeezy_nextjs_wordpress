import type { Metadata } from "next";
import { DM_Mono } from "next/font/google";
import "./globals.css";
import CartProvider from "@/providers/cart-context";

const dmmono = DM_Mono({
  subsets: ["latin"],
  weight: '400',
  variable: "--font-dmmono",
});

export const metadata: Metadata = {
  title: 'Yeezy Clone',
  description: 'Fake yeezy website. This is just for learning purpose.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${dmmono.className}  antialiased`}
      >
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
