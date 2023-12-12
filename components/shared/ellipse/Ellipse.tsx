import React from "react";

const Ellipse = ({ width, classes }: { width: number; classes?: string }) => {
  return (
    <div
      className={`ellipse-shadow aspect-square rounded-full bg-ellipse-gradient ${classes}`}
      style={{ width: `${width}px` }}
    ></div>
  );
};

export default Ellipse;
