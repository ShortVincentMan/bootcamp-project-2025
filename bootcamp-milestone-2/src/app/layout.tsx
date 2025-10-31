import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar";
import Footer from "../components/footer";

// Make Geist Mono the default font site-wide
const geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Vincent Le Personal Website",
  description: "A personal website for Vincent Le",
  icons: { icon: "/favicon.ico" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Apply monospace to the entire site */}
      <body className={`${geistMono.className} site`}>
        <Navbar />
        <main className="main">
          <div className="page-wrap">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
