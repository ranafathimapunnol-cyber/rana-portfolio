import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Rana Fathima — Full Stack Developer",
    template: "%s | Rana Fathima",
  },

  description:
    "Rana Fathima is a Full Stack Developer working with Python, Django, FastAPI, React, Next.js, TypeScript and AI-powered applications.",

  keywords: [
    "Rana Fathima",
    "Full Stack Developer",
    "Python Developer",
    "Django Developer",
    "FastAPI Developer",
    "React Developer",
    "Next.js Developer",
    "TypeScript Developer",
    "AI Developer",
    "RAG",
    "LLM",
  ],

  authors: [
    {
      name: "Rana Fathima",
    },
  ],

  creator: "Rana Fathima",

  metadataBase: new URL("https://your-domain.com"),

  openGraph: {
    title: "Rana Fathima — Full Stack Developer",
    description:
      "Full Stack Developer building modern web applications, backend systems and AI-powered digital products.",
    type: "website",
    locale: "en_IN",
    siteName: "Rana Fathima",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rana Fathima — Full Stack Developer",
    description:
      "Full Stack Developer working with Python, Django, FastAPI, React, Next.js and AI.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}