import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-gray-800 flex flex-wrap items-center justify-between sm:h-full w-full px-6 py-16 mx-auto">
      <div>
        <h1 className="text-white">Hi, my name is</h1>
        <h2 className="text-3xl font-bold text-white md:text-6xl">
          Daniel Martin.
        </h2>
        <h3 className="text-3xl font-bold text-gray-400 md:text-6xl">
          I love building things for the web.
        </h3>
        <p className="mt-6 text-gray-300 max-w-lg">
          I’m a software engineer specializing in building exceptional digital
          products. Currently perfecting my craft at Cognizant, mainly using
          ReactJS. In the process of doing my AWS Developer Associate
          Certification. Learning Golang in my spare time.
        </p>
      </div>
      <Image src="/computerpic.png" alt="computer" height={300} width={300} />
    </section>
  );
};

export default Hero;
