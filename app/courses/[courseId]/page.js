import plus from "@/public/images/courses/plus.png";
import check from "@/public/images/courses/check.png";
import clock from "@/public/images/courses/clock.png";
import learning from "@/public/images/courses/learning.png";
import education from "@/public/images/courses/education.png";
import pay from "@/public/images/courses/pay.png";

import { courses } from "@/lib/dummyData";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function CourseInfo({ params }) {
  const singleCourse = courses.find((item) => item.id == params.courseId);
  if (!singleCourse) {
    notFound();
  }
  //   console.log(singleCourse);
  return (
    <div className="mx-auto w-[90%] grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 py-6 gap-3">
      <div className="grid grid-cols-1 gap-y-4">
        <h2 className="font-semibold text-xl">
          {singleCourse.name} : {singleCourse.title}
        </h2>
        <p className="text-slate-600 font-medium">{singleCourse.description}</p>
        <h2 className="font-semibold" style={{ color: "#263054" }}>
          موضوعات الدورة
        </h2>
        {singleCourse.features.map((item, index) => {
          return (
            <div
              key={index}
              className="flex justify-center items-center p-2.5 w-[90%] rounded-lg text-indigo-600 border border-slate-400 gap-1"
              style={{ backgroundColor: "#F3F7FC" }}
            >
              <Image src={plus} className="size-6" />
              <p>{item}</p>
            </div>
          );
        })}
        <div className="grid grid-cols-1 lg:flex lg:gap-4  md:grid-cols-2 py-3 place-items-start">
          <Image src={singleCourse.teacherImage} height={200} />
          <div className="flex flex-col gap-3">
            <h2 className="font-semibold" style={{ color: "#263054" }}>
              معلم الدورة
            </h2>
            <h3 className="font-semibold" style={{ color: "#263054" }}>
              {singleCourse.teacher}
            </h3>
            <p className="text-slate-600">{singleCourse.teacherDesc}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-y-1">
        <Image
          src={singleCourse.image}
          height={200}
          width={600}
          className="rounded-lg"
        />
        <div className="flex flex-col gap-3 ">
          <p className="text-indigo-600 ">ماذا ستتعلم؟</p>
          {singleCourse.learnings.map((item, index) => {
            return (
              <div
                key={index}
                className="flex  items-center p-1 w-[90%]  text-indigo-600 gap-1"
              >
                <Image src={check} className="size-6" />
                <p>{item}</p>
              </div>
            );
          })}
        </div>
        <div className="rounded-lg shadow-lg mt-5 p-10 flex flex-col gap-4">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <h2 className="text-slate-500 line-through">
                ${singleCourse.price}
              </h2>
              <h2>${singleCourse.discount}</h2>
            </div>
            <button className="bg-indigo-600 w-30 h-12 rounded-2xl text-white font-bold">
              اشترك الان
            </button>
          </div>
          <hr className="border-t-2 border-slate-600 w-[90%]" />
          <div className="flex flex-col gap-4 text-indigo-600">
            <div className="flex items-center">
              <Image src={clock} className="size-6" />
              <p>{singleCourse.duration}</p>
            </div>
            <div className="flex items-center">
              <Image src={learning} className="size-6" />
              <p>{singleCourse.count}</p>
            </div>
            <div className="flex items-center">
              <Image src={education} className="size-6" />
              <p>{singleCourse.students} طالب</p>
            </div>
          </div>
          <hr className="border-t-2 border-slate-600 w-[90%]" />
          <h2 className="font-semibold">
            الدفع الآمن: تمتع بتجربة دفع آمنة وسهلة عبر الإنترنت
          </h2>
          <Image src={pay} width={371} height={78} />
        </div>
      </div>
    </div>
  );
}
