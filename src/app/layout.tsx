import type { Metadata } from "next";
import { Kanit } from "next/font/google";
import "./globals.css";

const kanit = Kanit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "NotyFlow",
  description:
    "Stay informed in real-time with NotyFlow, a cutting-edge SaaS platform built on Next.js for instant event notifications.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${kanit.className} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
