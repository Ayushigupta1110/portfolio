import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { Analytics } from "@vercel/analytics/next"

import "./globals.css";

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ibrahim Memon - Software Engineer & UI/UX Designer",
  description: "A self-taught UI/UX designer and Software Engineer at WebHR. Creating meaningful and delightful digital products that balance user needs and business goals. 3+ years of industry experience.",
  keywords: [
    "Ayushi Gupta",
    "Graphic Designer",
    "Web Designer",
    "Digital Experiences",
    "Portfolio",
  ],
  authors: [{ name: "Ayushi Gupta" }],
  creator: "Ayushi Gupta",
  publisher: "Ayushi Gupta",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "  ",
    title: "Ayushi Gupta - Graphic Designer & Web Developer",
    description: "I’m Ayushi Gupta, a BCA graduate currently pursuing my Master’s degree and working as a freelancer. Passionate about learning, creating, and turning ideas into meaningful digital experiences.",
    siteName: "Ayushi Gupta Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayushi Gupta - Graphic Designer & Web Developer",
    description: "BCA Graduate & Master’s Student | Freelancer | Turning Ideas into Digital Experiences.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href="  " />
      </head>
      <body
        className={`${poppins.variable} font-sans antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
