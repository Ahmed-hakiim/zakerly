"use client";
import { useState } from "react";
import logo from "@/public/images/logo.jpg";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="font-[Cairo] bg-white p-4 shadow-md" dir="rtl">
      <div className="container mx-auto flex items-center justify-between">
        {/* Right Side - Logo */}
        <div className="text-2xl font-bold text-blue-600 cursor-pointer transition-transform duration-300 hover:scale-105">
          <Image src={logo} className="size-10" alt="Logo" />
        </div>

        {/* Hamburger Menu (Mobile) */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-blue-600">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Center - Navigation Links */}
        <ul
          className={`lg:flex gap-8 text-lg font-semibold items-center lg:mr-10 
          ${
            isOpen
              ? "flex flex-col absolute top-16 right-0 w-full bg-white shadow-lg p-4 z-50"
              : "hidden lg:flex"
          }`}
          style={{ color: "#263054" }}
        >
          <Link
            href="/"
            className="cursor-pointer transition-colors duration-300 hover:text-blue-600"
          >
            الرئيسية
          </Link>
          <Link
            href="/courses"
            className="cursor-pointer transition-colors duration-300 hover:text-blue-600"
          >
            الدورات
          </Link>
          <Link
            href="/prices"
            className="cursor-pointer transition-colors duration-300 hover:text-blue-600"
          >
            الاسعار
          </Link>
          <Link
            href="/about"
            className="cursor-pointer transition-colors duration-300 hover:text-blue-600"
          >
            من نحن
          </Link>
          <Link
            href="/contact"
            className="cursor-pointer transition-colors duration-300 hover:text-blue-600"
          >
            الاتصال بنا
          </Link>
          <Link
            href="/exams"
            className="cursor-pointer transition-colors duration-300 hover:text-blue-600"
          >
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

        {/* Left Side - Buttons (Always Visible on Large Screens) */}
        <div className="hidden lg:flex gap-2">
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:scale-105">
            تسجيل الدخول
          </button>
          <button className="border border-blue-500 text-blue-500 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:scale-105">
            انشاء حساب
          </button>
        </div>
      </div>
    </nav>
  );
}
