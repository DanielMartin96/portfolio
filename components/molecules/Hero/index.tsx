import React from "react";

const Hero = () => {
  return (
    <section className="bg-gray-800 h-screen container px-6 py-16 mx-auto">
      <div>
        <h1 className="text-white">Hi, my name is</h1>
        <h2 className="text-3xl font-bold text-white md:text-7xl">
          Daniel Martin.
        </h2>
        <h3 className="text-3xl font-bold text-gray-400 md:text-7xl">
          I build things for the web.
        </h3>
        <p className="mt-6 text-gray-300 max-w-lg">
          I’m a software engineer specializing in building exceptional digital
          products. I’m currently working at Cognizant, mainly using ReactJS.
          Learning Golang in my spare time.
        </p>
      </div>
    </section>
  );
};

export default Hero;
