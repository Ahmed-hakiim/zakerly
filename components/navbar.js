import logo from '@/public/images/logo.jpg'
import Image from 'next/image';
import Link from 'next/link';
export default function Navbar() {
    return (
      <nav className="flex items-center font-[Cairo] justify-between bg-white p-4 " dir="rtl">
        {/* Right Side - Logo */}
        <div className="text-2xl font-bold text-blue-600 cursor-pointer transition-transform duration-300 hover:scale-105 pr-16">
          <Image src={logo} className='size-10' />
        </div>
  
        {/* Center - Navigation Links */}
        <ul className="flex gap-8 text-lg font-semibold justify-center items-center lg:mr-10" style={{color:"#263054"}}>
          <Link href={'/'} className="cursor-pointer transition-colors duration-300 hover:text-blue-600">الرئيسية</Link>
          <li className="cursor-pointer transition-colors duration-300 hover:text-blue-600">الدورات</li>
          <li className="cursor-pointer transition-colors duration-300 hover:text-blue-600">الاسعار</li>
          <Link href={'/about'} className="cursor-pointer transition-colors duration-300 hover:text-blue-600">من نحن </Link>
          <Link href={'/contact'} className="cursor-pointer transition-colors duration-300 hover:text-blue-600">الاتصال بنا</Link>
          <li className="cursor-pointer transition-colors duration-300 hover:text-blue-600">الامتحانات</li>
        </ul>
  
        {/* Left Side - Buttons */}
        <div className="flex gap-2">
          <button className="cursor-pointer border border-blue-500 text-blue-500 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:scale-105">
            تسجيل الدخول
          </button>
          <button className="cursor-pointer border border-blue-500 text-blue-500 px-4 py-2 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:shadow-lg hover:scale-105">
            انشاء حساب
          </button>
        </div>
      </nav>
    );
  }
  