import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Layout from "@/components/layout/Layout";
import Head from "next/head";
import Script from "next/script";
import { LanguageProvider } from "@/lib/i18n/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Orascom Construction",
  description: "A leading global engineering and construction contractor",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@200;300;400;500;600;700;800;900&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <LanguageProvider>
          <Layout>{children}</Layout>
        </LanguageProvider>
        
        {/* Load external dependencies first */}
        <Script src="https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.min.js" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/ScrollMagic.min.js" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/animation.gsap.min.js" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.8/plugins/debug.addIndicators.min.js" />
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/vivus/0.4.6/vivus.min.js" />
        
        {/* Load local utility libraries */}
        <Script src="/lib/bodyScrollLock.min.js" />
        <Script src="/lib/utils.js" />
        <Script src="/lib/utls.js" />
        
        {/* Load local animation libraries */}
        <Script src="/lib/TweenMax.min.js" />
        <Script src="/lib/ScrollMagic.min.js" />
        <Script src="/lib/animation.gsap.min.js" />
        <Script src="/lib/debug.addIndicators.min.js" />
        <Script src="/lib/vivus.min.js" />
        
        {/* Load local components */}
        <Script src="/lib/cursor.js" />
        <Script src="/lib/distortion.js" />
        <Script src="/lib/sticky.js" />
        
        {/* Load page-specific scripts */}
        <Script src="/lib/main-dist.js" />
        <Script src="/lib/menu.js" />
        <Script src="/lib/home.js" />
        <Script src="/lib/news.js" />
        <Script src="/lib/projects.js" />
        <Script src="/lib/webinars.js" />
        <Script src="/lib/scrolling-effects.js" />
      </body>
    </html>
  );
}
