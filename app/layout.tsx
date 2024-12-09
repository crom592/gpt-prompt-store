import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GPT Prompt Store",
  description: "Discover, share, and explore the best AI prompts for ChatGPT and other AI tools",
  keywords: ["AI", "ChatGPT", "Prompts", "Prompt Engineering", "AI Tools"],
  authors: [{ name: "GPT Prompt Store Team" }],
  creator: "GPT Prompt Store",
  publisher: "GPT Prompt Store",
  metadataBase: new URL("https://gptpromptstore.com"),
  openGraph: {
    title: "GPT Prompt Store - Discover Amazing AI Prompts",
    description: "Your ultimate destination for high-quality AI prompts",
    type: "website",
    url: "https://gptpromptstore.com",
    images: ["/logo.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "GPT Prompt Store",
    description: "Discover, share, and explore the best AI prompts",
    images: ["/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
