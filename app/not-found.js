import notFound from "@/public/notFound.jpg";
import Image from "next/image";
export default function NotFound() {
  return (
    <div className="flex flex-col justify-center items-center gap-3 py-6">
      <Image src={notFound} width={400} height={400} />
      <p>عذرًا، الصفحة التي تبحث عنها غير موجودة</p>
      <button className="p-2 text-white" style={{ backgroundColor: "#FBDA7B" }}>
        الصفحة الرئيسية
      </button>
    </div>
  );
}
