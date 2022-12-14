import Image from "next/image";
import React from "react";
import Title from "./ui/Title";

const About = () => {
  return (
    <div className="bg-secondary py-14 mt-9">
      <div className="container mx-auto flex items-center text-white gap-20 flex-wrap sm:justify-start justify-center ">

        <div className="relative w-[445px] h-[600px]">
            <Image src="/images/about-img.png" alt="" layout="fill"/>
        </div>
        <div>
            <Title addClass="text-[40px]">Hamisinin Faydaları?</Title>
            <p className="my-5"> Bugun allah için hangi kodu yazdın </p>
            <button className="btn-primary">Read more</button>
        </div>
      </div>
    </div>
  );
};

export default About;
