import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/ui/header";
import { Footer } from "@/components/ui/footer";

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Proxyon Technologies",
  description:
    "We provide cutting-edge software solutions that empower businesses to adapt and thrive in the ever-evolving digital realm across Southern Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${sora.variable} antialiased dark max-w-[1920px] container mx-auto`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
