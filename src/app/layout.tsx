"use client";

import { Inter, DM_Serif_Text } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";
import Script from "next/script";

// Declare fonts
const dmSerifText = DM_Serif_Text({ weight: "400", subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
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

        h3 {
          font-size: 1.5rem;
        }

        button > a {
          font-family: ${dmSerifText.style.fontFamily};
        }

        p,
        a {
          font-family: ${inter.style.fontFamily};
        }

        @media (max-width: 628px) {
          h1 {
            font-size: 52px;
          }
          h2 {
            font-size: 48px;
          }
        }
      `}</style>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        <Navigation />
        {children}
        <Analytics />
        <Footer />
        <Script
          src='https://www.googletagmanager.com/gtag/js?id=G-F15J6JRHZR'
          strategy='beforeInteractive'
        />
        <Script id='gtag-script'>
          {`window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-F15J6JRHZR');`}
        </Script>
        <Script
          id='hs-script-loader'
          strategy='lazyOnload'
          src='https://js.hs-scripts.com/47099822.js'
        />
      </body>
    </html>
  );
}
