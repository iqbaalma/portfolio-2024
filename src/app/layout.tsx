import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Iqbal: Together better than ever",
  description: "My Portfolio in 2024",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/favicon.ico?v=4"],
    shortcut: ["/favicon.ico?v=4"],
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
