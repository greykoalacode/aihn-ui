import type { Metadata } from "next";
import { DM_Sans, Fira_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/navbar/navbar";

const dmSans = DM_Sans({ weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900', '1000'], style: ['normal', 'italic'], subsets: ['latin'], variable: '--dm-sans' });
const firaMono = Fira_Mono({ weight: ['400','500','700'], subsets: ['latin'], variable: '--fira-mono'});


export const metadata: Metadata = {
  title: "AIHN: your hackernews guy",
  description: "Hackernews at ease!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&family=Fira+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
      </head> */}
      <body className={`${firaMono.variable} ${dmSans.variable}`}>
        <NavBar />
        <div className="mt-24">
        {children}
        </div>
        </body>
    </html>
  );
}
