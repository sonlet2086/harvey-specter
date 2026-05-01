import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const inter = localFont({
  variable: "--font-inter",
  src: [
    {
      path: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-normal.woff2",
      weight: "300 900",
      style: "normal",
    },
    {
      path: "../../node_modules/@fontsource-variable/inter/files/inter-latin-wght-italic.woff2",
      weight: "300 900",
      style: "italic",
    },
  ],
});

const geistMono = localFont({
  variable: "--font-geist-mono",
  src: "../../node_modules/geist/dist/fonts/geist-mono/GeistMono-Variable.woff2",
});

const playfair = localFont({
  variable: "--font-playfair",
  src: "../../node_modules/@fontsource-variable/playfair-display/files/playfair-display-latin-wght-italic.woff2",
  weight: "400 900",
  style: "italic",
});

export const metadata: Metadata = {
  title: "Harvey Specter",
  description: "Creative Director & Photographer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
