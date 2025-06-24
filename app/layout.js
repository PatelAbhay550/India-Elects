import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { images } from "wikipedia";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "India Elects | Get Latest Indian Election Data & Political Information",
  description:
    "Get the latest Indian election data, Prime Ministers list, neighboring countries info, and comprehensive political information. Your source for Indian politics and governance.",
  keywords: "India Elections, Prime Ministers, Politics, Lok Sabha, State Elections, Indian Democracy, Political Leaders",
  openGraph: {
    title: "India Elects - Complete Indian Political Information Hub",
    description: "Comprehensive election data, political information, and governance details for India",
    type: "website",
    url: "https://indiaelects.vercel.app",
    siteName: "India Elects",
    images: [
      {
        url: "https://indiaelects.vercel.app/og-image.png",
        width: 800,
        height: 600,
        alt: "India Elects og-image",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-TFF6HJBZ');
            `,
          }}
        ></script>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-XPYFXNJYNV"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-XPYFXNJYNV');
            `,
          }}
        ></script>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8804622562841633"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={inter.className}>        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TFF6HJBZ"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <Header />
        {children}
      </body>
    </html>
  );
}
