import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import SplashLoader from "./components/SplashLoader"; // 1. Added Import
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ENI Consultants",
  description: "Immigration and Education Consultants Worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* 2. Added SplashLoader here */}
        <SplashLoader />

        {/* Step 2 addition: Navbar stays visible across all pages */}
        <Navbar />
        
        {/* The current page content will load here */}
        {children}
      </body>
    </html>
  );
}