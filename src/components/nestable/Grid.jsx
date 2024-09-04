import React from "react";
import ImageWithText from "./ImageWithText";

const Grid = ({ blok }) => {
  return (
    <div className="grid grid-cols-3 gap-4 mb-8">
      {blok.columns.map((item, index) => (
        <ImageWithText item={item} key={index}></ImageWithText>
      ))}
    </div>
  );
};

export default Grid;
