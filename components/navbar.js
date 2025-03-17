"use client";
import { useState, useEffect } from "react";
import logo from "@/public/images/logo.jpg";
import linked from "@/public/images/linked.png";
import facebook from "@/public/images/facebook.png";
import insta from "@/public/images/insta.png";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* First Section (Hidden on Scroll) */}
      <nav
        className={`font-[Cairo] bg-white p-4 shadow-lg transition-all duration-300 ${
          isScrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
        }`}
        dir="rtl"
      >
        <div className="flex justify-around items-center mb-3">
          <div className="flex flex-col gap-2 items-center">
            <Image src={logo} className="size-20" alt="Logo" />
            <h2 className="font-black text-2xl text-blue-900">
              منصة ذاكرلي التعليمية
            </h2>
          </div>
          <div className="flex gap-3">
            <Link href={"https://linkedin.com"}>
              <Image src={linked} className="size-8" alt="LinkedIn" />
            </Link>
            <Link href={"https://facebook.com"}>
              <Image src={facebook} className="size-8" alt="Facebook" />
            </Link>
            <Link href={"https://instagram.com"}>
              <Image src={insta} className="size-8" alt="Instagram" />
            </Link>
          </div>
        </div>
      </nav>

      {/* Second Section (Fixed on Scroll) */}
      <div
        className={`w-full bg-white shadow-md transition-all duration-300 ${
          isScrolled ? "fixed top-0 left-0 z-50" : "relative"
        }`}
      >
        <div className="container mx-auto flex items-center justify-around p-4">
          {/* Hamburger Menu (Mobile) */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-blue-600">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Navigation Links */}
          <ul
            className={`lg:flex gap-8 text-lg font-semibold items-center lg:mr-10 transition-all duration-300 
            ${isOpen ? "absolute top-full right-0 w-full bg-white shadow-md p-4 flex flex-col" : "hidden lg:flex"}`}
            style={{ color: "#263054" }}
          >
            <Link href="/" onClick={() => setIsOpen(false)} className="cursor-pointer transition-colors duration-300 hover:text-blue-600">
              الرئيسية
            </Link>
            <Link href="/courses" onClick={() => setIsOpen(false)} className="cursor-pointer transition-colors duration-300 hover:text-blue-600">
              الدورات
            </Link>
            <Link href="/prices" onClick={() => setIsOpen(false)} className="cursor-pointer transition-colors duration-300 hover:text-blue-600">
              الاسعار
            </Link>
            <Link href="/about" onClick={() => setIsOpen(false)} className="cursor-pointer transition-colors duration-300 hover:text-blue-600">
              من نحن
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)} className="cursor-pointer transition-colors duration-300 hover:text-blue-600">
              الاتصال بنا
            </Link>
            <Link href="/exams" onClick={() => setIsOpen(false)} className="cursor-pointer transition-colors duration-300 hover:text-blue-600">
              الامتحانات
            </Link>

            {/* Buttons in Mobile Menu */}
            <div className="flex flex-col gap-2 mt-4 lg:hidden">
              <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white">
                تسجيل الدخول
              </button>
              <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white">
                انشاء حساب
              </button>
            </div>
          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex gap-2">
            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:scale-105">
              تسجيل الدخول
            </button>
            <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:scale-105">
              انشاء حساب
            </button>
          </div>
        </div>
      </div>

      {/* Prevent Overlap */}
      {/* <div className="pt-20"></div> */}
    </>
  );
}
