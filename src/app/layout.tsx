import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "../styles/globals.css";

const jetBrains_Mono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "E-Comm-Shop",
  description:
    "A E-commerce shop to upgrade your interior with modern & minimaliste design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`text-sm text-white  bg-neutral-50 min-h-screen w-screen ${jetBrains_Mono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
