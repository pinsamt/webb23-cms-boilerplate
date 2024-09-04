import React from "react";
import Image from "next/image";

const Custom404 = ({ config }) => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="container mx-auto flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex justify-center">
          <img
            className="w-80 h-100 overflow-visible"
            src={config.content.image}
            alt="No Bananas Found"
          ></img>
        </div>
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-8xl font-bold text-gray-900">
            {config.content.text}
          </h1>
          <p className="text-2xl text-gray-700 mt-4">{config.content.desc}</p>
        </div>
      </div>
    </div>
  );
};

export default Custom404;
