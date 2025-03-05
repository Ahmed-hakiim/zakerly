import logo from '@/public/images/logo.jpg'
import Image from 'next/image';
export default function Footer() {
    return (
      <div
        className="p-6 grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 font-semibold"
        style={{ backgroundColor: "#F3F7FC", color: "#1068B0" }}
      >
        {/* Centered Logo */}
        <div className="flex justify-center items-start">
          <Image src={logo} className='size-16' />
        </div>
  
        <div className="flex flex-col gap-3">
          <h2>address</h2>
          <ul className="flex flex-col gap-2 font-medium">
            <li>(434) 546-4356</li>
            <li>contact@lift.agencyr.com</li>
          </ul>
        </div>
  
        <div className="flex flex-col gap-3">
          <h2>المراحل الدراسية</h2>
          <ul className="flex flex-col gap-2 font-medium">
            <li>المرحلة الابتدائية</li>
            <li>المرحلة الابتدائية</li>
            <li>المرحلة الابتدائية</li>
          </ul>
        </div>
  
        <div className="flex flex-col gap-3">
          <h2>المدارس</h2>
          <ul className="flex flex-col gap-2 font-medium">
            <li>مدرسة ذاكرلي المصرية</li>
            <li>مدرسة ذاكرلي المصرية</li>
            <li>مدرسة ذاكرلي المصرية</li>
            <li>مدرسة ذاكرلي المصرية</li>
          </ul>
        </div>
      </div>
    );
  }
  