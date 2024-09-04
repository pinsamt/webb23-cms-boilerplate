import React from "react";

const Hero = ({ blok }) => {
  return (
    <section className="bg-slate-200">
      <div className="container mx-auto flex flex-col md:flex-row items-center px-5 py-24">
        <div className="md:w-1/2 lg:w-2/5 flex flex-col mb-16 md:mb-0 text-center md:text-left">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {blok?.title}
          </h1>
          <p className="mb-8 leading-relaxed text-gray-700">{blok?.text}</p>
          <button className="bg-blue-500 text-white py-2 px-6 hover:bg-blue-600 transition duration-300">
            {blok?.button}
          </button>
        </div>
        <div className="md:w-1/2 lg:w-3/5 w-full">
          <img
            className="object-cover object-center rounded-lg m-5"
            src={blok?.image}
            alt="hero"
            width={"700px"}
          ></img>
        </div>
      </div>
    </section>
  );
};

export default Hero;
