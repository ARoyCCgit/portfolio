import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Arnab Roy | Senior Full-Stack & Backend Software Engineer",
  description:
    "Portfolio of Arnab Roy, Senior Full-Stack & Backend Engineer with nearly 5 years experience specializing in Node.js, Next.js, PHP/Laravel, microservices, real-time communication systems, and payment architecture.",
  keywords: [
    "Arnab Roy",
    "Senior Full-Stack Engineer",
    "Senior Backend Developer",
    "Node.js",
    "Next.js",
    "PHP",
    "Laravel",
    "Microservices",
    "WebSockets",
    "Socket.IO",
    "Payment Gateway",
    "Extensiv 3PL",
  ],
  authors: [{ name: "Arnab Roy" }],
  openGraph: {
    title: "Arnab Roy | Senior Full-Stack & Backend Engineer",
    description:
      "Explore enterprise case studies, real-time super-app architecture (Have-it), payment systems, and verified recruiter metrics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#090d16] text-slate-100 selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
