import { infoSeven } from "@/lib/dummyData";
import Image from "next/image";

export default function Teachers() {
  return (
    <div>
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
                <h2 className="font-semibold">{item.name}</h2>
                <p className="font-medium text-slate-600">{item.description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
