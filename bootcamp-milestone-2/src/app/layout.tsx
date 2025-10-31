import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vincent Le Personal Website",
  description: "A personal website for Vincent Le",
  icons: {
  icon:"/favicon.ico"
}
};

export default function RootLayout({children}: {children:React.ReactNode }) {
    return (
      <html lang="en">
        <body className={`${geistSans.variable} ${geistMono.variable} ${'site'}`}>
        <Navbar />
        <main className="main">
          <div className="page-wrap">
            {children}
          </div>
        </main>
        <Footer/>
        </body>
      </html>
    );
  }