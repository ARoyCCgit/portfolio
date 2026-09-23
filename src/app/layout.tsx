import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000")
  ),
  title: "Arnab Roy | Senior Full-Stack & Backend Software Engineer",
  description:
    "Portfolio of Arnab Roy, Senior Full-Stack & Backend Engineer. I build scalable backend systems, custom Shopify solutions, APIs, integrations, and e-commerce experiences using PHP, Laravel, Node.js, JavaScript, and modern web technologies.",
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
    "GenAI",
    "Gemini Pro",
    "ChatGPT",
  ],
  authors: [{ name: "Arnab Roy" }],
  openGraph: {
    title: "Arnab Roy | Senior Full-Stack & Backend Engineer",
    description:
      "Explore enterprise case studies, real-time super-app architecture (Have-it), payment systems, and verified recruiter metrics.",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Arnab Roy - Senior Full-Stack & Backend Engineer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arnab Roy | Senior Full-Stack & Backend Engineer",
    description:
      "Explore enterprise case studies, real-time super-app architecture (Have-it), payment systems, and verified recruiter metrics.",
    images: ["/og-image.png"],
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  }
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 selection:bg-blue-600 selection:text-white transition-colors duration-200">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
