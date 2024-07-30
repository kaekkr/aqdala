"use client";

import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Manrope } from "next/font/google";
import "./globals.css";
import useNavbarStore from "@/lib/store";
import NavbarMobile from "@/components/NavbarMobile";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const manrope = Manrope({ subsets: ["latin"], weight: ["400", "500"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const { isNavOpen } = useNavbarStore();

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <html lang="ru">
      <body className={`${manrope.className} bg-neutral-light`}>
        <Header />
        {isNavOpen ? (
          <NavbarMobile />
        ) : (
          <div className="pt-11 pb-[122px]">{children}</div>
        )}
        <Footer />
      </body>
    </html>
  );
}
