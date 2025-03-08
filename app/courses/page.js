import { courses } from "@/lib/dummyData";
import Image from "next/image";
import learning from "@/public/images/courses/learning.png";
import clock from "@/public/images/courses/clock.png";
import stars from "@/public/images/courses/stars.png";
import Link from "next/link";

export default function Courses() {
  return (
    <div>
      <section
        className="flex text-white flex-col justify-center items-center gap-4 relative p-4 py-16 lg:h-[300px] pb-16 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundColor: "#26305499",
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('/images/banner.jpg')`,
          backgroundPosition: "center",
        }}
      >
        <h1 className="font-bold text-3xl">
          اكتشف جميع الدورات التعليمية المتاحة لك!
        </h1>
        <p>
          {" "}
          مجموعة متنوعة من الدورات في مختلف التخصصات لمساعدتك على تطوير مهاراتك
          وتحقيق أهدافك الأكاديمية والمهنية.
        </p>
      </section>
      <section
        className="p-4 pb-16 bg-cover bg-no-repeat bg-center place-items-center grid grid-cols-1 "
        style={{ backgroundImage: "url('/images/shamel.png')" }}
      >
        <form className=" w-[90%] mx-auto my-5 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-3 place-items-center bg-white shadow-lg rounded-lg p-10">
          <div className="relative w-1/2">
            <input
              type="search"
              className="bg-white p-2 w-full pr-10 border-b border-slate-500 focus:outline-none"
              placeholder="ادخل اسم الدورة"
            />
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35m0 0a7.5 7.5 0 1 0-1.15 1.15L21 21z"
              />
            </svg>
          </div>

          <div className="relative w-1/2">
            <select className="bg-white p-2 w-full pr-10 border border-slate-200 rounded-lg focus:outline-none appearance-none">
              <option value="">اختر خيارًا</option>
              <option value="1">الخيار الأول</option>
              <option value="2">الخيار الثاني</option>
            </select>
            <svg
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-500 pointer-events-none"
              xmlns="file:///C:/Users/hakiim/Downloads/filter%20(1)%201.svg"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M10 18h4v-2h-4v2Zm-6-8v2h16v-2H4Zm3-6v2h10V4H7Z" />
            </svg>
          </div>
        </form>
        <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-4">
          {courses.map((item, index) => {
            return (
              <div
                key={index}
                className="rounded-lg shadow-lg pb-6 flex flex-col gap-3"
              >
                <Image src={item.image} className="p-3 h-[50%]" />
                <div className="flex flex-col gap-2 mr-8">
                  <Link
                    href={`/courses/${item.id}`}
                    className="font-semibold"
                    style={{ color: "#263054" }}
                  >
                    {item.name}
                  </Link>
                  <p className="text-slate-600">إعداد وتقديم:{item.teacher}</p>
                </div>
                <div className="mt-4 flex justify-around">
                  <div className="flex gap-2">
                    <Image src={learning} className="size-6" />
                    <p className="text-indigo-600">{item.count}</p>
                  </div>
                  <div className="flex gap-2">
                    <Image src={clock} className="size-6" />
                    <p className="text-indigo-600">{item.duration}</p>
                  </div>
                </div>
                <hr className="border-t-2 border-slate-200 w-[90%]" />
                <div className="mt-4 flex justify-around">
                  <Image src={stars} />
                  <p className="text-slate-600">استكشف المزيد</p>
                </div>
              </div>
            );
          })}
        </div>
        <button className="w-30 bg-indigo-600 text-white rounded-lg my-8 p-2">
          المزيد
        </button>
      </section>
    </div>
  );
}
