import { books } from "@/lib/dummyData";
import Image from "next/image";
import { notFound } from "next/navigation";

export default function SingleBook({ params }) {
  const book = books.find((item) => item.id == params.bookId);
  if (!book) {
    notFound();
  }
  console.log(book);
  return (
    <div className="container">
      <div className="mx-auto w-[90%] p-4 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-x-16 gap-y-4">
        <div className="flex flex-col gap-6">
          <h2 className="text-xl font-semibold text-indigo-600">
            معلومات الكتاب
          </h2>
          <div className="flex flex-col pag-1 text-indigo-600 font-semibold">
            <h2>اسم الكتاب: {book.title}</h2>
            <h2>اسم المؤلف: {book.auther}</h2>
            <p>سنة النشر: {book.puplished}</p>
            <p className="flex gap-0.5">
              التصنيف:{" "}
              {book.genre.map((item, index) => (
                <p key={index}>{item} ،</p>
              ))}{" "}
            </p>
            <p>عدد الصفحات:{book.pages}</p>
            <p className="flex gap-0.5">
              اللغة:{" "}
              {book.language.map((item, index) => (
                <p key={index}>{item} /</p>
              ))}{" "}
            </p>
            <p>التقييم :{book.rating}</p>
            <p>السعر :{book.discount}$</p>
          </div>
          <hr className="border bg-slate-200 text-slate-200" />
          <p className="text-slate-500">{book.description}</p>
          <hr className="border bg-slate-200 text-slate-200" />
          <div className="flex flex-col pag-1 text-indigo-600">
            <p>نسخة إلكترونية / مطبوعة</p>
            <p>شحن مجاني للطلبات فوق 900$</p>
            <p>متوفر للتحميل الفوري بعد الشراء</p>
          </div>
          <button
            className="p-2 text-white w-[90%]"
            style={{ backgroundColor: "#FFD868" }}
          >
            احصل على نسختك الآن وابدأ رحلة التعلم والمعرفة!
          </button>
        </div>
        <div className="flex justify-center items-center">
          <div style={{ backgroundColor: "#CBE4E8" }}>
            <Image src={book.image} className="p-10" />
          </div>
        </div>
      </div>
    </div>
  );
}
