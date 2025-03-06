import Image from "next/image";
import leftBg from '@/public/images/leftbg.png'
import firstKids from '@/public/images/firstKids.jpg'
import secondKids from '@/public/images/secondKids.jpg'
import createive from '@/public/images/creative-process.png'
import educational from '@/public/images/educational.png'
import check from '@/public/images/check.png'
import kid from '@/public/images/kid.png'
import tele from '@/public/images/tele.png'
import one from '@/public/images/one.png'
import { info, infoFive, infoFour, infoSix, infoThree, infoTwo } from "@/lib/dummyData";
import StudentsSlider from "@/components/slider";

export default function Home() {
  return (
    <div >
      {/* <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2">
            Get started by editing{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-semibold">
              app/page.js
            </code>
            .
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Read our docs
          </a>
        </div>
      </main> */}
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer> */}
      <section className="bg-blue-200 flex justify-around pt-11 pb-11">
        <div className="flex flex-col gap-4 justify-center">
          <h1 className="text-indigo-600  text-3xl">
            أهلا بكم في <br />
            <span className="text-6xl font-semibold mt-2">ذاكرلي</span>
          </h1>
          <p className="text-indigo-600 mt-3"> منصة تعليمية شاملة لدعم مستقبلك</p>
          <div className="flex gap-2 text-white"> 
            <button className=" p-2 rounded-lg" style={{backgroundColor:"#FBDA7B"}}> استكشف الدورات </button>
            <button className=" p-2 rounded-lg" style={{backgroundColor:"#1068B0"}}>سجل الان</button>
          </div>
        </div>
        <div className="flex items-end">
          <Image src={one} className="size-32" />
        </div>
        
        <div className=" flex flex-col gap-4 relative p-4 py-16 pb-16 bg-cover bg-no-repeat bg-center"
        style={{  
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url("https://s3-alpha-sig.figma.com/img/1cb8/5b19/cd6c14d5c27aad382d2e0707ca55816e?Expires=1742169600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qkKbxCqVK82BBK4CWMW~5luCYk8nO8971OPn6DsgNs3E6vL9zGwUh3vlzC7BKOItGTaULcCyGYtzUaz7HU5oyiFqlV0XJNrR3ke9NSkg2wOqfVBO8K0BlG~vdA~yvy~O6hKbAX4N~kU33OY9eRW13DGG~gUXbPbu8n71FMlh7Ch9v8UG7hJ6JOqW1Wd2CfAN~ai5ySDbjZjP-u4nIRjT88vYndtpe-47YEEUW~YM85t6WIzG7o7UsFRm32TmGvFWHqvl22RaYxieS1XWLmDeXfSXLIjrRTYgjQE7pk43ASx-1X0DV31dNrL7Trh3EgIhOEW8UEe4txT-tngdsv1v9Q__")`}}
        >
          <div className="flex gap-2">
            <Image src={firstKids} width={300} className="rounded-lg"/>
            <div className="h-[150px] w-[150px] mt-12 shadow-lg flex flex-col items-center justify-center rounded-lg bg-white">
            <Image src={createive} className="size-16" />
            <h3 className="font-semibold text-lg text-center ">أساليب تعليمية حديثة</h3>
            </div>
          </div>
          <div className="flex gap-2 mr-16">
            <div className="h-[150px] w-[150px] shadow-lg flex flex-col items-center justify-center rounded-lg bg-white">
            <Image src={educational} className="size-16" />
            <h3 className="font-semibold text-lg text-center ">دروس تعليمية  </h3>
            </div>
            <Image src={secondKids} width={300} className="rounded-lg" />
          </div>
        </div>
        <div className="flex">
          <Image src={tele} className="size-32" />
        </div>
      </section>
      <section style={{backgroundColor:"#FFFDE8",backgroundImage: "url('/images/shamel.png')"}} className="p-4 pb-16 bg-cover bg-no-repeat bg-center"
      >
        <h1 className="text-center p-6 mb-4 text-3xl text-indigo-600 font-semibold">كل ما تحتاجه للتعلم والتطور</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-24 place-items-center">
          {
            info.map((item, index) => {
              return (
                <div key={index} className="p-6 rounded-lg flex flex-col gap-6 items-center h-[300px] w-[300px] bg-white shadow-2xl">
                  <Image src={item.image} className="size-16" />
                  <h3 className="font-semibold text-lg text-center text-indigo-600">{item.name}</h3>
                  <p className="text-center text-slate-600">{item.description}</p>
                </div>
              );
            })
          }
        </div>

      </section>
      <section className="p-4 pb-16 flex justify-around ">
        <div className="flex flex-col gap-4 px-8 ">
          <h2 className="text-2xl font-bold text-indigo-600">أكتشف أبرز الدورات</h2>
          <p className="font-semibold">ابدأ رحلتك التعليمية مع الدورات الأكثر طلبًا وشهرة</p>
          <ul className="flex flex-col gap-2 list-disc pr-4">
            {
              infoTwo.map((item,index)=>{
                return (
                  <li key={index} className="text-slate-600">{item}</li>
                )
              })
            }
          </ul>
          <button className=" p-2 rounded-lg w-42 text-white mt-6" style={{backgroundColor:"#FBDA7B"}}> استكشف المزيد </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-y-6">
            {
              infoThree.map((item,index)=>{
                return(
                  <div  key={index} className="rounded-lg shadow-lg  flex flex-col gap-2 p-4 w-3/4 justify-around" style={{backgroundColor:`${item.bg}`}}>
                    <h2 className="text-xl font-bold flex gap-1" style={{color:"#263054"}}><Image src={check} className="size-8" />{item.name}</h2>
                    <p className="font-medium text-slate-600">{item.description}</p>
                  </div>
                )
              })
            }
        </div>

      </section>
      <section className="p-4 pb-16 flex justify-around pt-16"  style={{backgroundColor:"#FFFDE8"}} >
        <div className="flex flex-col gap-4 w-1/2 justify-center" style={{color:"#263054"}}>
          <h2 className="text-2xl font-bold"> أرقام تتحدث عن نجاحنا</h2>
          <p className="font-medium">نحن في زاكيرلي نفتخر بتقديم تجربة تعليمية استثنائية تساهم في تطوير مهارات الطلاب وتحقيق طموحاتهم. من خلال آلاف الطلاب المسجلين، والمحتوى التعليمي المتميز، والخبراء المعتمدين، نواصل رحلتنا في تقديم المعرفة بأساليب حديثة ومبتكرة.</p>
          <ul className="flex gap-2 pr-4">
            
            <li className="flex flex-col justify-around items-center gap-2 font-semibold">+40 <span className="font-medium">عدد الدورات</span></li>
            <li className="flex flex-col justify-around items-center gap-2 font-semibold">+40 <span className="font-medium">عدد المعلمين</span></li>
            <li className="flex flex-col justify-around items-center gap-2 font-semibold">+40 <span className="font-medium">عدد الطلبة</span></li>
                
          </ul>
          <button className=" p-2 rounded-lg w-42 text-white mt-6" style={{backgroundColor:"#1068B0"}}>  تواصل معنا </button>
        </div>
        <div >
            <Image src={kid} height={400} />
        </div>

      </section>
      <section className="p-4 pb-16" style={{color:"#263054"}}>
        <h1 className="text-center p-6 text-3xl font-bold">كيف تبدأ رحلتك مع زاكرلي؟</h1>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-24 place-items-center">
          {
            infoFour.map((item, index) => {
              return (
                <div key={index} className="p-6 rounded-lg flex flex-col gap-6 items-center h-[250px] w-[300px] bg-white shadow-2xl">
                  <Image src={item.image} className="size-16" />
                  <h3 className="font-semibold text-lg text-center">{item.name}</h3>
                  <p className="text-center text-slate-600">{item.description}</p>
                </div>
              );
            })
          }
        </div>

      </section>
      <section
        className="p-4 pb-16 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundColor: "#DBE8EA",
          backgroundImage: "url('/images/polygon.png')",
        }}
      >
          <h1 className="text-center p-6 text-3xl font-bold" style={{color:"#263054"}}>آراء الطلاب</h1>
          <p className="text-center text-slate-600">
            نحن نفخر ببناء مجتمع تعليمي يحقق رضا طلابنا ويدعمهم في مسيرتهم الأكاديمية
          </p>

          <div className="mr-9 mt-9">
            <StudentsSlider />
          </div>
      </section>
      <section
        className="relative p-4 py-16 pb-16 bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: "url('/images/polygon.png')",
        }}
      >
        
        <div className="absolute inset-0 bg-slate-900/70"></div>

        
        <div className="relative z-10 text-white">
          <h1 className="text-center p-6 text-3xl">أهدافنا</h1>
          <p className="text-center">
            نسعى دائمًا لتطبيق هذه القيم في كل ما نقدمه، من تطوير المحتوى التعليمي إلى دعم مجتمعنا الطلابي.
          </p>

          <div className="mr-9 mt-9 flex justify-center">
            <div className="grid grid-cols-2 lg:grid-cols-5 md:grid-cols-3 gap-0">
              {infoFive.map((item, index) => (
                <div
                  key={index}
                  className="w-[120px] h-[120px] bg-white border border-blue-500 flex flex-col items-center justify-center"
                >
                  <Image src={item.image} className="size-10" />
                  <h3 className="text-indigo-600">{item.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section style={{backgroundColor:"white"}} className="p-4 pb-16">
        <h1 className="text-center p-8 text-3xl font-bold" style={{color:"#263054"}}>مدارسنا</h1>
        <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 grid-cols-1 gap-y-4 gap-x-2 place-items-center">
          {
            infoSix.map((item, index) => {
              return (
                <div key={index} className="p-6 rounded-lg flex gap-4 items-center h-[200px]   shadow-sm">
                  <Image src={item.image} className="size-20" />
                  <div className="flex flex-col gap-2 items-start">

                  <h3 className="font-semibold text-2xl text-center mr-6 text-indigo-600">{item.name}</h3>
                  <p className="text-center w-3/4 text-slate-600">{item.description}</p>
                  </div>
                </div>
              );
            })
          }
        </div>

      </section>

    </div>
  );
}
