import check from "@/public/images/teachers/check.png";
import course from "@/public/images/teachers/course.jpg";
import learning from "@/public/images/courses/learning.png";
import clock from "@/public/images/courses/clock.png";
import stars from "@/public/images/courses/stars.png";
import { courses, examTwo, infoSeven } from "@/lib/dummyData";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function TeacherDetails({ params }) {
  const singleTeacher = infoSeven.find((item) => item.id == params.teacherId);
  if (!singleTeacher) {
    notFound();
  }
  console.log(singleTeacher);
  return (
    <div>
      <section className="mx-auto w-[90%] grid grid-cols-1 lg:grid-cols-2 py-6 md:grid-cols-2">
        <div className=" flex flex-col gap-4">
          <div>
            <h2 className="font-semibold text-2xl" style={{ color: "#263054" }}>
              {singleTeacher.name}
            </h2>
            <hr className="border-t-2 border-indigo-600 w-1/4 mt-2" />
          </div>
          <p className="w-[90%] text-slate-600">{singleTeacher.experience}</p>
          <div className="flex flex-col gap-2">
            {singleTeacher.qualifications.map((item, index) => {
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

          <button className="bg-indigo-600 font-bold rounded-lg align-middle w-1/4 py-2 text-white">
            اشترك الان
          </button>
        </div>
        <Image src={course} />
      </section>
      <section
        className="flex flex-col justify-center items-center gap-4 py-6"
        style={{ backgroundColor: "#FFFEEC" }}
      >
        <div>
          <h2 className="font-semibold text-2xl" style={{ color: "#263054" }}>
            {singleTeacher.name}
          </h2>
          <hr className="border-t-2 border-indigo-600  mt-2" />
        </div>
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
      </section>
    </div>
  );
}
