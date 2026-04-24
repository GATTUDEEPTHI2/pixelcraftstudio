import "./globals.css";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title:
    "Website Design Services in Hyderabad & Karimnagar | PixelCraftStudio",

  description:
    "PixelCraftStudio provides professional website design services in Hyderabad and Karimnagar. We build modern, responsive, and conversion-focused websites for businesses, startups, and personal brands.",

  keywords: [
    "website design Hyderabad",
    "website designer Karimnagar",
    "business website developer Telangana",
    "freelance web designer Hyderabad",
    "responsive website design India",
    "startup website design",
    "portfolio website design",
    "PixelCraftStudio",
  ],

  openGraph: {
    title: "PixelCraftStudio | Premium Website Design",
    description:
      "Modern, responsive, and conversion-focused websites for businesses in Hyderabad, Karimnagar, and across India.",
    url: "https://pixelcraftstudio-eight.vercel.app",
    siteName: "PixelCraftStudio",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "PixelCraftStudio | Website Design",
    description:
      "Professional website design services in Hyderabad and Karimnagar.",
    images: ["/twitter-image.png"],
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
