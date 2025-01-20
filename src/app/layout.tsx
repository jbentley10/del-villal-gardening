"use client";

import { Inter, DM_Serif_Text } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";

// Declare fonts
const dmSerifText = DM_Serif_Text({ weight: "400", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <style jsx global>{`
        h1,
        h2,
        h3,
        h4,
        button,
        span,
        .dm-serif-text {
          font-family: ${dmSerifText.style.fontFamily};
        }

        button > a {
          font-family: ${dmSerifText.style.fontFamily};
        }

        p,
        a {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <head>
        <link rel='icon' href='/favicon.ico' sizes='any' />
      </head>
      <body>
        <Navigation />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
