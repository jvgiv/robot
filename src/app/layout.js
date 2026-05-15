import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";
import ScrollEffects from "./ScrollEffects";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Toll Gate RoboTitans",
  description: "World Championship FTC Experience",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body>
        <ScrollEffects />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
