import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Website Design for Businesses & Startups | PixelCraftStudio",
  description:
    "PixelCraftStudio designs modern, responsive websites for businesses, startups, and cafes across India and globally. Get a premium website that builds trust and converts visitors into clients.",
  keywords: [
    "website design India",
    "freelance web designer",
    "business website design",
    "landing page design",
    "website redesign services",
    "portfolio website design",
    "responsive website developer",
    "startup website design",
    "pixelcraftstudio",
  ],
  openGraph: {
    title: "PixelCraftStudio | Premium Website Design",
    description:
      "Modern, responsive, and conversion-focused websites for businesses and startups. Build a strong online presence with PixelCraftStudio.",
    url: "https://pixelcraftstudio.vercel.app",
    siteName: "PixelCraftStudio",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
  <head>
    <meta
      name="google-site-verification"
      content="kcFKCUtKSjmfqrPBO-cNRLvNFEgV7YI7GJ2GZXnoQKw"
    />
  </head>

  <body>
    {children}
  </body>
</html>
  );
}
