import Image from "next/image";
import profilePic from "@/public/images/profile.png";
import { courses, studentInfo } from "@/lib/dummyData";
import learning from "@/public/images/courses/learning.png";
import clock from "@/public/images/courses/clock.png";
import stars from "@/public/images/courses/stars.png";
import Link from "next/link";
export default function Profile() {
  return (
    <div className="grid grid-cols-1 mx-auto w-[90%] py-6 gap-y-3">
      <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 ">
        <div className="flex gap-3 items-center">
          <Image src={profilePic} className="size-20 rounded-full" />
          <div className="flex flex-col gap-2">
            <h2 className="font-semibold" style={{ color: "#263054" }}>
              اسم الطالب
            </h2>
            <p className="text-slate-600">البريد الالكتروني الطالب</p>
          </div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-3 place-items-center ">
          {studentInfo.map((item, index) => {
            return (
              <div
                key={index}
                className="flex flex-col justify-center items-center rounded-lg h-22 w-22 shadow-lg"
                style={{ backgroundColor: `${item.bg}` }}
              >
                <p>{item.numbers}+</p>
                <p>{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>
      <h2
        className="font-semibold pt-10 text-2xl mx-auto w-[90%]"
        style={{ color: "#263054" }}
      >
        جميع الدورات
      </h2>
      <div className="w-[90%] mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-4 py-3">
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
    </div>
  );
}
