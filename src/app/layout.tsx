import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClearPath Marketing Solutions | AI-Powered Marketing & Lead Generation",
  description: "Full-service call center, digital marketing, SEO, web design, and AI-powered marketing solutions. We help businesses grow stress-free with data-driven strategies.",
  keywords: "marketing, lead generation, call center, digital marketing, SEO, web design, AI marketing, Google Ads, social media marketing",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
