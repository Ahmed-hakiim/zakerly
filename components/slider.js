"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import user from '@/public/images/user.png'
import stars from '@/public/images/stars.png'
import Image from "next/image";
const students = [
  {image:user, desc: "تعلمت الكثير من هذا الكورس وكان الشرح واضحًا جدًا!", name: "أحمد محمد", grade: "الصف العاشر" },
  {image:user, desc: "الدروس مفيدة جدًا وساعدتني في تحسين مستواي.", name: "سارة خالد", grade: "الصف التاسع" },
  {image:user, desc: "الأساتذة محترفون ويهتمون بتوضيح كل التفاصيل.", name: "يوسف عبد الله", grade: "الصف الحادي عشر" },
  {image:user, desc: "الأساتذة محترفون ويهتمون بتوضيح كل التفاصيل.", name: "يوسف عبد الله", grade: "الصف الحادي عشر" },
  {image:user, desc: "الأساتذة محترفون ويهتمون بتوضيح كل التفاصيل.", name: "يوسف عبد الله", grade: "الصف الحادي عشر" },
  {image:user, desc: "الأساتذة محترفون ويهتمون بتوضيح كل التفاصيل.", name: "يوسف عبد الله", grade: "الصف الحادي عشر" },
  {image:user, desc: "استمتعت بالتعلم وشعرت بتقدم كبير في دراستي.", name: "ليلى حسن", grade: "الصف الثامن" }
];

export default function StudentsSlider() {
  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        768: { slidesPerView: 2 }, // Show 2 slides on tablets
        1024: { slidesPerView: 3 }, // Show 3 slides on larger screens
      }}
      className="w-full py-6"
    >
      {students.map((student, index) => (
        <SwiperSlide key={index} className="flex justify-center">
          <div className="bg-white shadow-lg rounded-lg p-6 w-[380px] flex flex-col gap-4 text-right mb-14">
            <p className="text-slate-600">{student.desc}</p>
            <hr className="border-gray-300" />
            <div className="flex justify-between items-center text-sm font-semibold">
              <span className=" flex gap-2 items-center"><Image src={student.image} className="size-8" /> {student.name}</span>
              <span ><Image src={stars}/></span>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
