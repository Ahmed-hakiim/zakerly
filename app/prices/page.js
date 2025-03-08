import { prices } from "@/lib/dummyData";
import Image from "next/image";
import wow from '@/public/images/prices/wow.png'
import check from '@/public/images/prices/check.png'
export default function Prices() {
  return (
    <div>
        <section className='flex text-white flex-col justify-center items-center gap-4 relative p-4 py-16 lg:h-[300px] pb-16 bg-cover bg-no-repeat bg-center' style={{ 
        backgroundColor:"#26305499",
          backgroundImage: `linear-gradient(90deg, rgba(0,0,0,0.7), rgba(0,0,0,0.5)), url('/images/aboutBg.jpg')`,backgroundPosition: 'center'}}> 
          <h1 className='font-bold text-3xl'>أسعارنا </h1>
          <p> اختر الخطة المناسبة لك وابدأ رحلتك التعليمية اليوم!</p>

        </section>
        <section className="w-[90%] mx-auto py-10 grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 place-items-center gap-y-4">
            {
                prices.map((item,index)=>{
                    return(
                        <div key={index} className="shadow-2xl rounded-lg flex flex-col items-center gap-2 p-4" style={{backgroundColor:"#EDF5FF"}}>
                            <h2 className="font-semibold text-xl">{item.name}</h2>
                            <p className="text-slate-500">{item.description}</p>
                            <div className="flex justify-around">
                                <div className="flex ">
                                    <Image src={wow} className="size-4 mt-1.5"/>
                                    <p className="w-1/2 text-sm">USD/Creator/mo (annually)</p>
                                </div>
                                <h2 className="font-semibold">${item.price}</h2>
                            </div>
                            <hr className="border-t-1 border-indigo-600 w-[90%]" />
                            <ul className="flex flex-col gap-3 text-indigo-600">
                               
                                {
                                    item.features.map((item,index)=>{
                                        return(
                                            <li key={index} className="flex"> <Image src={check} className="size-3 mt-2 ml-2" /> {item}</li>
                                        )
                                    })
                                }
                            </ul>
                            <button className="mt-4 py-3 w-[90%] text-white font-bold bg-indigo-600 rounded-2xl">اشترك الان</button>
                        </div>
                    )
                })
            }

        </section>
    </div>
  )
}
