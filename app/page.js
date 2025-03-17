"use client";
import Image from "next/image";
import leftBg from "@/public/images/leftbg.png";
import goalsbg from "@/public/images/goalsbg.jpg";
import firstKids from "@/public/images/firstKids.jpg";
import secondKids from "@/public/images/secondKids.jpg";
import createive from "@/public/images/creative-process.png";
import educational from "@/public/images/educational.png";
import check from "@/public/images/check.png";
import kid from "@/public/images/kid.png";
import tele from "@/public/images/tele.png";
import one from "@/public/images/one.png";
import { motion } from "framer-motion";
import {
  info,
  infoFive,
  infoFour,
  infoSix,
  infoThree,
  infoTwo,
} from "@/lib/dummyData";
import StudentsSlider from "@/components/slider";
import { fadeIn } from "@/variants";

export default function Home() {
  console.log("fade in: ", fadeIn);
  console.log("motion is :", motion);
  return (
    <div>
      {/* Hero Section */}
      <section
        className="bg-blue-200 flex justify-center items-center pt-11 pb-11 relative bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url("https://s3-alpha-sig.figma.com/img/1cb8/5b19/cd6c14d5c27aad382d2e0707ca55816e?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qkKbxCqVK82BBK4CWMW~5luCYk8nO8971OPn6DsgNs3E6vL9zGwUh3vlzC7BKOItGTaULcCyGYtzUaz7HU5oyiFqlV0XJNrR3ke9NSkg2wOqfVBO8K0BlG~vdA~yvy~O6hKbAX4N~kU33OY9eRW13DGG~gUXbPbu8n71FMlh7Ch9v8UG7hJ6JOqW1Wd2CfAN~ai5ySDbjZjP-u4nIRjT88vYndtpe-47YEEUW~YM85t6WIzG7o7UsFRm32TmGvFWHqvl22RaYxieS1XWLmDeXfSXLIjrRTYgjQE7pk43ASx-1X0DV31dNrL7Trh3EgIhOEW8UEe4txT-tngdsv1v9Q__")`,
        }}
      >
        <motion.div
          className="flex flex-col gap-4 justify-center lg:mr-20 md:mr-10 mr-8 lg:py-20"
          initial={{ x: "100%", opacity: 0 }} // Starts from the right and invisible
          transition={{ duration: 0.8, ease: "easeOut" }} // Animation settings
          whileInView={{ x: 0, opacity: 1 }} // Animates when in viewport
          viewport={{ once: false }}
        >
          <h1 className="text-white text-3xl">
            أهلا بكم في <br />
            <span className="text-6xl font-semibold mt-2">ذاكرلي</span>
          </h1>
          <p className="text-white mt-3"> منصة تعليمية شاملة لدعم مستقبلك</p>
          <div className="flex gap-2 text-white">
            <button
              className="p-2 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
              style={{ backgroundColor: "#FBDA7B" }}
            >
              {" "}
              استكشف الدورات{" "}
            </button>
            <button
              className="p-2 rounded-lg cursor-pointer hover:scale-105 transition-transform duration-300"
              style={{ backgroundColor: "#1068B0" }}
            >
              سجل الان
            </button>
          </div>
        </motion.div>

        {/* <motion.div
          className="flex flex-col gap-4 relative p-4 py-16 pb-16"
          initial={{ x: "100%", opacity: 0 }} // Starts from the right and invisible
          whileInView={{ x: 0, opacity: 1 }} // Animates when in viewport
          exit={{ x: "100%", opacity: 0 }} // Hides when leaving the viewport
          transition={{ duration: 0.8, ease: "easeOut" }} // Animation settings
          viewport={{ once: false }}
        >
          <div className="flex items-end">
            <Image src={one} className="size-32" />
          </div>
          <div className="grid grid-cols-1 gap-y-2">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2">
              <Image src={firstKids} width={300} className="rounded-lg" />
              <div className="lg:h-[150px] lg:w-[150px] mt-12 shadow-lg flex flex-col items-center justify-center rounded-lg bg-white hover:scale-105 transition-transform duration-300">
                <Image src={createive} className="size-16" />
                <h3 className="font-semibold text-lg text-center">
                  أساليب تعليمية حديثة
                </h3>
              </div>
            </div>
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-2 lg:mr-16">
              <div className="lg:h-[150px] lg:w-[150px] shadow-lg flex flex-col items-center justify-center rounded-lg bg-white hover:scale-105 transition-transform duration-300">
                <Image src={educational} className="size-16" />
                <h3 className="font-semibold text-lg text-center">دروس تعليمية</h3>
              </div>
              <Image
                src={secondKids}
                width={300}
                className="rounded-lg lg:-mr-28"
              />
            </div>
          </div>
          <div className="flex">
            <Image src={tele} className="size-32" />
          </div>
        </motion.div> */}
      </section>

      {/* Features Section */}
      <section
        style={{
          backgroundColor: "#FFFDE8",
          backgroundImage: "url('/images/shamel.png')",
        }}
        className="p-4 pb-16 bg-cover bg-no-repeat bg-center"
      >
        <h1 className="text-center p-6 mb-4 text-3xl text-indigo-600 font-semibold">
          كل ما تحتاجه للتعلم والتطور
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-24 place-items-center">
          {info.map((item, index) => {
            return (
              <motion.div
                // variants={fadeIn("up",0.2)}
                // initial="hidden"
                // whileInView={"show"}
                // viewport={{once:false, amount:0.7}}
                initial={{ y: 100, opacity: 0 }} // Starts from the bottom and invisible
                whileInView={{ y: 0, opacity: 1 }} // Animates to its original position
                transition={{ duration: 0.3, ease: "easeOut" }} // Animation settings
                viewport={{ once: false }}
                key={index}
                className="p-6 rounded-lg flex flex-col gap-6 items-center h-[300px] w-[300px] bg-white shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                <Image src={item.image} className="size-16" />
                <h3 className="font-semibold text-lg text-center text-indigo-600">
                  {item.name}
                </h3>
                <p className="text-center text-slate-600">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Courses Section */}
      <section className="p-4 pb-16 grid  grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-around">
        <motion.div
          initial={{ x: "100%", opacity: 0 }} // Starts from the right and invisible
          whileInView={{ x: 0, opacity: 1 }} // Animates when in viewport
          transition={{ duration: 0.8, ease: "easeOut" }} // Animation settings
          viewport={{ once: false }} // Ensures animation repeats every time the div enters the viewport
          className="flex flex-col gap-4 px-8"
        >
          <h2 className="text-2xl font-bold text-indigo-600">
            أكتشف أبرز الدورات
          </h2>
          <p className="font-semibold">
            ابدأ رحلتك التعليمية مع الدورات الأكثر طلبًا وشهرة
          </p>
          <ul className="flex flex-col gap-2 list-disc pr-4">
            {infoTwo.map((item, index) => {
              return (
                <li key={index} className="text-slate-600">
                  {item}
                </li>
              );
            })}
          </ul>
          <button
            className="p-2 rounded-lg w-42 text-white mt-6 cursor-pointer hover:scale-105 transition-transform duration-300"
            style={{ backgroundColor: "#FBDA7B" }}
          >
            {" "}
            استكشف المزيد{" "}
          </button>
        </motion.div>
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }} // Starts smaller and invisible
          whileInView={{ scale: 1, opacity: 1 }} // Scales up and becomes visible
          transition={{ duration: 0.8, ease: "easeOut" }} // Animation settings
          viewport={{ once: false }} className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-y-6">
          {infoThree.map((item, index) => {
            return (
              <div
                key={index}
                className="rounded-lg shadow-lg flex flex-col gap-2 p-4 w-3/4 justify-around hover:scale-105 transition-transform duration-300"
                style={{ backgroundColor: item.bg }}
              >
                <h2
                  className="text-xl font-bold flex gap-1"
                  style={{ color: "#263054" }}
                >
                  <Image src={check} className="size-8" />
                  {item.name}
                </h2>
                <p className="font-medium text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section
        className="p-4 pb-16 flex justify-around pt-16"
        style={{ backgroundColor: "#FFFDE8" }}
        initial={{ y: 100, opacity: 0 }} // Starts from the bottom and invisible
        whileInView={{ y: 0, opacity: 1 }} // Animates to its original position
        transition={{ duration: 0.8, ease: "easeOut" }} // Animation settings
        viewport={{ once: false }}
      >
        <div
          className="flex flex-col gap-4 w-1/2 justify-center"
          style={{ color: "#263054" }}
        >
          <h2 className="text-2xl font-bold"> أرقام تتحدث عن نجاحنا</h2>
          <p className="font-medium">
            نحن في زاكيرلي نفتخر بتقديم تجربة تعليمية استثنائية تساهم في تطوير
            مهارات الطلاب وتحقيق طموحاتهم. من خلال آلاف الطلاب المسجلين،
            والمحتوى التعليمي المتميز، والخبراء المعتمدين، نواصل رحلتنا في تقديم
            المعرفة بأساليب حديثة ومبتكرة.
          </p>
          <ul className="flex gap-2 pr-4">
            <li className="flex flex-col justify-around items-center gap-2 font-semibold">
              +40 <span className="font-medium">عدد الدورات</span>
            </li>
            <li className="flex flex-col justify-around items-center gap-2 font-semibold">
              +40 <span className="font-medium">عدد المعلمين</span>
            </li>
            <li className="flex flex-col justify-around items-center gap-2 font-semibold">
              +40 <span className="font-medium">عدد الطلبة</span>
            </li>
          </ul>
          <button
            className="p-2 rounded-lg w-42 text-white mt-6 cursor-pointer hover:scale-105 transition-transform duration-300"
            style={{ backgroundColor: "#1068B0" }}
          >
            {" "}
            تواصل معنا{" "}
          </button>
        </div>
        <div>
          <Image src={kid} height={400} />
        </div>
      </motion.section>

      {/* How to Start Section */}
      <motion.section className="p-4 pb-16" style={{ color: "#263054" }}
        initial={{ scale: 0.8, opacity: 0 }} // Starts smaller and invisible
        whileInView={{ scale: 1, opacity: 1 }} // Scales up and becomes visible
        transition={{ duration: 0.8, ease: "easeOut" }} // Animation settings
        viewport={{ once: false }}>
        <h1 className="text-center p-6 text-3xl font-bold">
          كيف تبدأ رحلتك مع زاكرلي؟
        </h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-24 place-items-center">
          {infoFour.map((item, index) => {
            return (
              <div
                key={index}
                className="p-6 rounded-lg flex flex-col gap-6 items-center h-[250px] w-[300px] bg-white shadow-2xl hover:scale-105 transition-transform duration-300"
              >
                <Image src={item.image} className="size-16" />
                <h3 className="font-semibold text-lg text-center">
                  {item.name}
                </h3>
                <p className="text-center text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        className="p-4 pb-16 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundColor: "#DBE8EA",
          backgroundImage: "url('/images/polygon.png')",
        }}
        initial={{ x: "100%", opacity: 0 }} // Starts from the right and invisible
        whileInView={{ x: 0, opacity: 1 }} // Animates when in viewport
        transition={{ duration: 0.8, ease: "easeOut" }} // Animation settings
        viewport={{ once: false }}
      >
        <h1
          className="text-center p-6 text-3xl font-bold"
          style={{ color: "#263054" }}
        >
          آراء الطلاب
        </h1>
        <p className="text-center text-slate-600">
          نحن نفخر ببناء مجتمع تعليمي يحقق رضا طلابنا ويدعمهم في مسيرتهم
          الأكاديمية
        </p>

        <div className="mr-9 mt-9">
          <StudentsSlider />
        </div>
      </motion.section>

      {/* Goals Section */}
      <section
        className="p-4 py-16 pb-16 relative bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url("/images/goalsbg.jpg")`,
        }}
      >
        <div className="absolute inset-0 bg-slate-900/50"></div>

        <motion.div className="relative z-10 text-white"
          initial={{ scale: 0.8, opacity: 0 }} // Starts smaller and invisible
          whileInView={{ scale: 1, opacity: 1 }} // Scales up and becomes visible
          transition={{ duration: 0.8, ease: "easeOut" }} // Animation settings
          viewport={{ once: false }}>
          <h1 className="text-center p-6 text-3xl">أهدافنا</h1>
          <p className="text-center">
            نسعى دائمًا لتطبيق هذه القيم في كل ما نقدمه، من تطوير المحتوى
            التعليمي إلى دعم مجتمعنا الطلابي.
          </p>

          <div className="mr-9 mt-9 flex justify-center">
            <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-0">
              {infoFive.map((item, index) => (
                <div
                  key={index}
                  className="w-[120px] h-[120px] bg-white border border-blue-500 flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300"
                >
                  <Image src={item.image} className="size-10" />
                  <h3 className="text-indigo-600">{item.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </section>

      {/* Schools Section */}
      <motion.section style={{ backgroundColor: "white" }} className="p-4 pb-16"
        initial={{ x: "100%", opacity: 0 }} // Starts from the right and invisible
        whileInView={{ x: 0, opacity: 1 }} // Animates when in viewport
        transition={{ duration: 0.8, ease: "easeOut" }} // Animation settings
        viewport={{ once: false }}>
        <h1
          className="text-center p-8 text-3xl font-bold"
          style={{ color: "#263054" }}
        >
          مدارسنا
        </h1>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-y-4 gap-x-2 place-items-center">
          {infoSix.map((item, index) => {
            return (
              <div
                key={index}
                className="p-6 rounded-lg lg:flex-row md:flex flex flex-col gap-4 items-center lg:h-[200px] shadow-sm hover:scale-105 transition-transform duration-300"
              >
                <Image src={item.image} className="size-20" />
                <div className="flex flex-col gap-2 items-start">
                  <h3 className="font-semibold text-2xl text-center mr-6 text-indigo-600">
                    {item.name}
                  </h3>
                  <p className="text-center w-3/4 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.section>
    </div>
  );
}
