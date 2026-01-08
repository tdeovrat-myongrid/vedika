import type { Metadata } from "next";
import { DM_Sans, DM_Serif_Text } from "next/font/google"; // turbo
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const dmSerif = DM_Serif_Text({
  variable: "--font-dm-serif",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Vedika | Modern Shopping Experience",
  description: "Discover curated collections at Vedika. Your premium destination for style.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${dmSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
