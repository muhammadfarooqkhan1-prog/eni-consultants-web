import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "./components/Navbar";
import SplashLoader from "./components/SplashLoader"; // 1. Added Import
import "./globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';

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
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
      {/* Google Analytics 4 tracking */}
      <GoogleAnalytics gaId="G-XXXXXXXXXX" />
    </html>
  );
}
export const metadata: Metadata = {
  metadataBase: new URL('https://eniconsultants.com'),
  title: {
    default: 'ENI Consultants | Visit Visas, Study, Immigration, Phd Admissions & CV Services',
    template: '%s | ENI Consultants',
  },
  description:
    'ENI Consultants provides expert destination services, study abroad guidance, visit and immigration consulting, and professional CV optimization.',
  keywords: [
    'ENI Consultants',
    'Destination Services',
    'Study Abroad Consultants',
    'Immigration Services',
    'Visit Visa Consultants',
    'CV Optimization Services',
    'Resume Writing Consultants',
    'Relocation Services',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'ENI Consultants | Visit Visas, Study, Immigration, Phd Admissions & CV Services',
    description:
      'Expert destination services, study abroad and visit visa consulting, immigration assistance, and professional CV optimization.',
    url: 'https://eniconsultants.com',
    siteName: 'ENI Consultants',
    locale: 'en_US',
    type: 'website',
  },
};