import { infoEight, infoSeven } from "@/lib/dummyData";
import bg from "@/public/images/abouttwo.jpg";
import Image from "next/image";
import Link from "next/link";

export default function About() {
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
        <h1 className="font-bold text-3xl">من نحن</h1>
        <p> زاكرلي منصة تعليمية تُحدث الفرق</p>
      </section>
      <section
        className="grid grid-cols-1 place-items-center text-center gap-5 py-10"
        style={{ backgroundColor: "#F3F7FB" }}
      >
        <h2 className="font-semibold text-2xl" style={{ color: "#263054" }}>
          تعرف على فريقنا المتميز
        </h2>
        <p>
          يتألف فريقنا من خبراء محترفين في مجالات التعليم والتكنولوجيا، يعملون
          بشغف وإبداع لتقديم تجربة تعليمية متكاملة ومبتكرة.
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {infoSeven.map((item, index) => {
            return (
              <div
                key={index}
                className="rounded-lg shadow-lg h-[250px] w-[200px] flex flex-col justify-center gap-2"
              >
                <Image
                  src={item.image}
                  style={{ height: "70%" }}
                  className="w-full "
                />
                <Link
                  href={`/teachers/${item.id}`}
                  className="font-semibold cursor-pointer transition-colors duration-300 hover:text-blue-600"
                >
                  {item.name}
                </Link>
                <p className="font-medium text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1 py-20">
        <div className="flex flex-col gap-4 p-10">
          <h2 className="font-semibold">كيف تبدأ رحلتك مع زاكرلي؟</h2>
          <p className="text-slate-600">
            انضم إلى آلاف المتعلمين واستمتع بتجربة تعليمية متكاملة مع زاكرلي.
            خطوات بسيطة تفصلك عن تطوير مهاراتك وتحقيق أهدافك الأكاديمية
            والمهنية!
          </p>
          <div
            className="flex flex-col gap-3 rounded-lg shadow-lg w-3/4 p-4"
            style={{ backgroundColor: "#F3F7FC" }}
          >
            <h3 className="font-medium">إنشاء حساب</h3>
            <p className="text-slate-600">
              سجل مجانًا في زاكيرلي وابدأ رحلتك التعليمية بكل سهولة، واستمتع
              بالوصول إلى مجموعة واسعة من الدورات.
            </p>
          </div>
          <div
            className="flex flex-col gap-3 rounded-lg shadow-lg mr-12 text-white w-3/4 p-4"
            style={{ backgroundColor: "#0D5EF4" }}
          >
            <h3 className="font-medium">اختيار الدورة</h3>
            <p>
              استكشف الدورات المتاحة في مختلف المجالات، واختر الدورة التي تناسب
              مستواك واهتماماتك التعليمية.
            </p>
          </div>
          <div
            className="flex flex-col gap-3 rounded-lg shadow-lg w-3/4 p-4"
            style={{ backgroundColor: "#F3F7FC" }}
          >
            <h3 className="font-medium"> ابدأ التعلم</h3>
            <p className="text-slate-600">
              تابع الدروس التفاعلية، اختبر معلوماتك، واحصل على شهادة معتمدة عند
              إتمام الدورة بنجاح!
            </p>
          </div>
        </div>
        <Image src={bg} />
      </section>
      <section
        className="grid grid-cols-1 place-items-center text-center gap-5 py-10"
        style={{ backgroundColor: "#F3F7FB" }}
      >
        <h2 className="font-meduim text-xl" style={{ color: "#263054" }}>
          هدفنا هو توفير تعليم عالي الجودة للجميع بأسلوب مبتكر وحديث
        </h2>
        <hr className="border-t-2 border-indigo-600 w-1/4" />
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
          {infoEight.map((item, index) => {
            return (
              <div
                key={index}
                className="rounded-xl shadow-lg h-[200px] w-[300px] flex flex-col justify-center items-center gap-2"
                style={{ backgroundColor: "#F3F0FC" }}
              >
                <h2 className="font-semibold mr-3" style={{ color: "#263054" }}>
                  {item.name}
                </h2>
                <p className="font-medium text-slate-600 ">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
