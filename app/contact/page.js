import { infoNine } from "@/lib/dummyData";
import Image from "next/image";
import bg from "@/public/images/contactBG.png";

export default function Contact() {
  return (
    <div>
      <section
        className="flex text-white flex-col justify-center items-center gap-4 relative p-4 py-16 lg:h-[300px] pb-16 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundColor: "#26305499",
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('/images/aboutBg.jpg')`,
          backgroundPosition: "center",
        }}
      >
        <h1 className="font-bold text-3xl">تواصل معنا </h1>
        <p>
          {" "}
          لأي استفسارات أو أسئلة، يمكنك الاتصال بنا عبر النموذج أدناه أو
          باستخدام التفاصيل المتوفرة
        </p>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 p-10">
        <div className="grid grid-cols-1 gap-4">
          {infoNine.map((item, index) => {
            return (
              <div
                key={index}
                className="flex items-center gap-4 p-4 border border-slate-300 lg:w-2/3 md:w-2/3  rounded-lg"
              >
                <div
                  className="h-[70px] w-[70px] rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: "#D0DBE9" }}
                >
                  <Image src={item.image} className="size-10" />
                </div>
                <div className="flex flex-col gap-2">
                  <h2 className="font-semibold" style={{ color: "#263054" }}>
                    {item.name}
                  </h2>
                  {item.description.map((item, index) => {
                    return (
                      <p key={index} className="text-indigo-600">
                        {item}
                      </p>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
        <div
          className=" shadow-lg rounded-lg flex flex-col justify-center "
          style={{
            backgroundImage: `url('/images/contactBG.png')`,
            backgroundSize: "contain",
          }}
        >
          <form className="p-8 gap-4 ">
            <div className="py-4">
              <h2 className="font-bold text-2xl p-2">تواصل معنا</h2>
              <hr className="border-t-2 border-indigo-600 w-40" />
            </div>
            <div className="flex flex-col gap-3">
              <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  className="p-3 rounded-lg bg-white"
                  placeholder="اسم الطالب"
                />
                <input
                  type="text"
                  className="p-3 rounded-lg bg-white"
                  placeholder="رقم الهاتف"
                />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-3">
                <input
                  type="text"
                  className="p-3 rounded-lg bg-white"
                  placeholder="البريد الالكتروني"
                />
                <input
                  type="text"
                  className="p-3 rounded-lg bg-white"
                  placeholder="المرحلة الدراسية"
                />
              </div>
              <textarea
                className="w-full p-3 border col-span-2 border-gray-300 bg-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="اكتب الوصف هنا..."
                rows="4"
              />
              <button
                type="submit"
                className="p-1 w-1/2 text-xl font-semibold bg-indigo-600 text-white rounded-2xl"
              >
                إرسال
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
