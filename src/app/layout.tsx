import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Comm-Shop",
  description: "A E-commerce shop to upgrade your interior with modern & minimaliste design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`text-sm text-color-[#1E1E1E] bg-[#F5F5F5] min-h-screen ${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  );
}
