import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google"; // turbo
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://thecleancrate.in"),
  title: {
    default: "The Clean Crate | High Protein Oats",
    template: "%s | The Clean Crate",
  },
  description: "Fuel your day with our premium protein-packed oat mixes. 100% natural, delicious, and convenient ready-to-eat breakfasts.",
  keywords: ["protein oats", "healthy breakfast", "ready to eat", "oatmeal", "clean eating", "fitness food", "high protein breakfast"],
  authors: [{ name: "The Clean Crate" }],
  creator: "The Clean Crate",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://thecleancrate.in",
    title: "The Clean Crate | High Protein Oats",
    description: "Fuel your day with our premium protein-packed oat mixes. 100% natural, delicious, and convenient.",
    siteName: "The Clean Crate",
    images: [
      {
        url: "/og-image.jpg", // We need to ensure this image exists or use a product image as fallback
        width: 1200,
        height: 630,
        alt: "The Clean Crate - High Protein Oats",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Clean Crate | High Protein Oats",
    description: "Fuel your day with our premium protein-packed oat mixes.",
    images: ["/og-image.jpg"],
    creator: "@thecleancrate",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { CartProvider } from "@/context/cart-context";
import { AuthProvider } from "@/context/auth-context";
import { CartDrawer } from "@/components/cart-drawer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body
        className={`${inter.variable} ${outfit.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <CartProvider>
            <AuthProvider>
              <SiteHeader />
              <CartDrawer />
              <div className="flex flex-col min-h-screen">
                {children}
              </div>
            </AuthProvider>
          </CartProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
