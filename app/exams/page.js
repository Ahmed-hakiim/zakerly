import { examOne, examTwo } from "@/lib/dummyData";
import Image from "next/image";
import bg from "@/public/images/exams/bg.jpg";
import learning from "@/public/images/courses/learning.png";
import clock from "@/public/images/courses/clock.png";
export default function Exams() {
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
        <h1 className="font-bold text-3xl">اختبر مهاراتك وانطلق نحو النجاح!</h1>
        <p>
          {" "}
          اختبارات تفاعلية مصممة خصيصًا لتعزيز معرفتك وتقييم مستواك بدقة. احصل
          على نتائج فورية، تقارير تفصيلية، وفرصة للتحسين المستمر!
        </p>
      </section>
      <section className="mx-auto w-[85%] py-6 grid grid-cols-1 lg:grid-cols-2">
        <div className="grid grid-cols-1 gap-4 pt-4">
          <h2 className="font-semibold text-2xl">
            مميزات الاختبارات في زاكرلي{" "}
          </h2>
          <p className="text-slate-500">
            {" "}
            اختبارات تفاعلية مصممة لتقييم مهاراتك وتطوير معرفتك! اختر الاختبار
            المناسب لك وخض تجربة تعليمية متكاملة تضمن لك النجاح والتفوق.
          </p>
          {examOne.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-4 border w-[90%] border-slate-300 rounded-lg"
              >
                <Image src={item.image} className="size-10" />

                <div className="flex flex-col gap-2">
                  <h2 className="font-semibold" style={{ color: "#263054" }}>
                    {item.name}
                  </h2>

                  <p key={index} className="text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
        <Image src={bg} />
      </section>
      <section
        className="mx-auto  grid grid-cols-1 gap-6 py-7"
        style={{ backgroundColor: "#E2EDF7" }}
      >
        <h2
          className="font-semibold text-center text-2xl "
          style={{ color: "#263054" }}
        >
          أنواع الاختبارات المتاحة
        </h2>
        <form className=" w-[85%] mx-auto my-5 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-3 place-items-center bg-white shadow-lg rounded-lg p-10">
          <div className="relative w-1/2">
            <input
              type="search"
              className="bg-white p-2 w-full pr-10 border-b border-slate-500 focus:outline-none"
              placeholder="ادخل اسم الامتحان"
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
        <div className="w-[85%] mx-auto my-5 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 place-items-center gap-y-4 gap-6">
          {examTwo.map((item, index) => {
            return (
              <div key={index} className="shadow-lg pb-6 flex flex-col gap-3">
                <Image src={item.image} className=" h-[30%]" />
                <div className="flex flex-col gap-2 mr-8">
                  <h2 className="font-semibold" style={{ color: "#263054" }}>
                    {item.name}
                  </h2>
                  <p className="text-slate-600">{item.description}</p>
                </div>
                <div className="mt-4 flex justify-around">
                  <div className="flex gap-2">
                    <Image src={learning} className="size-6" />
                    <p className="text-indigo-600">{item.questions}</p>
                  </div>
                  <div className="flex gap-2">
                    <Image src={clock} className="size-6" />
                    <p className="text-indigo-600">{item.time}</p>
                  </div>
                </div>
                <div className="flex justify-center items-center">
                  <button className="bg-indigo-600 py-3 mt-4 text-white w-[70%]">
                    استكشف المزيد
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="w-full flex justify-center mt-4">
          <button className="bg-indigo-600 py-3 rounded-2xl text-white w-44">
            المزيد
          </button>
        </div>
      </section>
    </div>
  );
}
