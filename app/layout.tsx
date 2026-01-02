import type { Metadata } from "next";
import { Noto_Sans_Thai, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const notoSansThai = Noto_Sans_Thai({
  variable: "--font-noto-thai",
  subsets: ["thai"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Student Portfolio | Nawat S.",
  description:
    "Personal portfolio showcasing academic projects and achievements of a Thai high school student aspiring to become a Computer Engineer.",
  keywords: [
    "portfolio",
    "student",
    "Thailand",
    "computer engineering",
    "projects",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th" className="scroll-smooth">
      <body
        className={`${plusJakartaSans.variable} ${notoSansThai.variable} antialiased bg-white text-slate-900`}
        style={{
          fontFamily:
            "var(--font-plus-jakarta), var(--font-noto-thai), sans-serif",
        }}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
