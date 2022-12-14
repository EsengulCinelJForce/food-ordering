import Image from "next/image";
import React from "react";
import Title from "../ui/Title";
import { HiShoppingCart } from "react-icons/hi";
import Link from "next/link";
const MenuItem = () => {
  return (
    <div className="bg-secondary rounded-3xl">
      <div className="w-full  bg-[#f1f2f3] h-[210px] grid place-content-center rounded-bl-[46px] rounded-t-2xl">
       <Link href="/product">
       <div className="relative w-40 h-36 z-50 ">
          <Image src="/images/f1.png" alt="" layout="fill" className="hover:scale-110 transition-all"></Image>
        </div>
       </Link>
      </div>
      <div className="text-white  font-dancing p-[25px]">
        <h4 className="text-xl font-semibold">Yenur omega 5</h4>
        <p className="text-[15px]">faydaları say say bitmez</p>
        <div className="flex  justify-between">
          <span>20tl</span>
          <button className="btn-primary w-10 h-10 rounded-full p-0 grid place-content-center">
            <HiShoppingCart />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
