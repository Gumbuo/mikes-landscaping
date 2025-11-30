import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mike's Landscaping | Professional Lawn & Landscape Services",
  description: "Full-service landscaping company offering lawn care, garden design, hardscaping, tree services, irrigation, and snow removal. Serving the Greater Boston area.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
