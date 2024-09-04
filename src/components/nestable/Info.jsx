import React from "react";

const Info = ({ blok }) => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="container mx-auto px-5 py-24">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 text-center">
          {blok.title}
        </h1>
        <p className="text-lg text-gray-700 leading-relaxed text-center max-w-3xl mx-auto">
          {blok.text}
        </p>
      </div>
    </div>
  );
};

export default Info;
