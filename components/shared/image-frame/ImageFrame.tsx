import React from "react";
import Ellipse from "../ellipse/Ellipse";
import Image from "next/image";

const ImageFrame = () => {
  return (
    <div className="relative h-[509px] w-[741px] rounded-[23.38px] border border-dark-grey-border bg-dark-grey">
      <div className="absolute bottom-[-0.5em] left-[-1em] z-[2]">
        <Ellipse width={148} classes="bg-medium-ellipse-gradient" />
      </div>

      <div className="absolute bottom-[-12em] left-[6em] z-[1]">
        <Image
          src="/assets/home-page-iphone.png"
          width={523}
          height={1048}
          alt="home-page-iphone"
          className="bg-transparent"
        />
      </div>

      <div className="absolute right-[-1em] top-[-3em] ">
        <Ellipse width={177.88} classes="bg-medium-ellipse-gradient" />
      </div>
    </div>
  );
};

export default ImageFrame;
