import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "India Elects | Get Latest Indian Election Data",
  description:
    "Get the latest Indian election data and results. Your source for comprehensive election information in India.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XPYFXNJYNV"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-XPYFXNJYNV');
</script><script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8804622562841633" crossorigin="anonymous"></script></head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
