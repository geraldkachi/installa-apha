import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Instollar",
  description: "Connect with skilled local solar workforce in record time!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-manrope overflow-x-hidden">{children}</body>
    </html>
  );
}
