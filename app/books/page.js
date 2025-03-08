import cart from "@/public/images/books/cart.png";
import book from "@/public/images/carousel/book.jpg";
import Carousel from "@/components/carousel";

import Image from "next/image";
import { Search } from "lucide-react";
import { books } from "@/lib/dummyData";

export default function Books() {
  return (
    <div>
      <div className="mx-auto w-[90%] flex justify-center items-center gap-2 py-4">
        <div className="flex items-center gap-1">
          <h2 className="font-bold text-slate-600">Cart</h2>
          <Image src={cart} className="size-6" />
        </div>
        <div className="relative w-[50%]">
          <input
            type="search"
            className="p-3 w-full pl-10 rounded-lg text-gray-700"
            style={{ backgroundColor: "#F3F9FB" }}
            placeholder="Search essentials, groceries and more..."
          />
          <Search
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500"
            size={18}
          />
        </div>
      </div>
      <div>
        <Carousel />
      </div>
      <div className="mx-auto w-[90%] py-10 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 place-items-center ">
        {books.map((item) => {
          return (
            <div
              key={item.id}
              className="relative w-64 p-4 bg-white rounded-xl shadow-lg border-b border-l border-r border-blue-500"
            >
              {/* Discount Badge */}
              <div className="absolute top-0 right-0 bg-blue-500 text-white text-sm font-bold px-5 py-5 rounded-tr-xl rounded-bl-xl">
                {item.sale}% <br /> OFF
              </div>

              <div className="flex justify-center">
                <Image
                  src={item.image}
                  alt="Galaxy M13"
                  className="object-contain"
                />
              </div>

              {/* Product Details */}
              <div className="flex flex-col items-end">
                <h3 className="text-gray-800 font-semibold mt-2">
                  {item.title}
                </h3>

                {/* Pricing */}
                <div className="flex items-center gap-2 mt-1">
                  <span className="text-sm text-gray-500 line-through">
                    ₹{item.price}
                  </span>
                  <span className="text-lg font-bold text-black">
                    ₹{item.discount}
                  </span>
                </div>

                {/* Savings */}
                <p className="text-green-600 font-medium mt-1">
                  Save - ₹{item.save}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
