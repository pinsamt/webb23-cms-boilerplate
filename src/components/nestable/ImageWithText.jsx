import React from "react";

const ImageWithText = ({ item }) => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white m-4">
        <div className="w-full h-45 overflow-hidden">
          <img src={item?.image} alt="Card Image"></img>
        </div>
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{item.name}</div>
          <p className="text-gray-700 text-base">{item.text}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageWithText;
