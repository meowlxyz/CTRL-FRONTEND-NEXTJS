import React from "react";
import Ellipse from "../ellipse/Ellipse";
import Image from "next/image";

interface ImageFrameProps {
  imageUrl: string;
  reverse?: boolean;
}

const ImageFrame = ({ imageUrl, reverse }: ImageFrameProps) => {
  return !reverse ? (
    <div className="relative mx-[7rem]">
      <div className="absolute bottom-[12.5em] left-[-7.5em] z-[2]">
        <Ellipse width={148} classes="bg-medium-ellipse-gradient" />
      </div>
      <div className="absolute bottom-[12em] right-[-6.5em] z-[-3] h-[509px] w-[741px] rounded-[23.38px] border  border-dark-grey-border bg-dark-grey "></div>
      <Image
        src={imageUrl}
        width={523}
        height={1048}
        alt="home-page-iphone"
        className="bg-transparent"
        quality={100}
      />
      <div className="absolute right-[-8em] top-[15em] z-[-2] ">
        <Ellipse width={177.88} classes="bg-medium-ellipse-gradient" />
      </div>
    </div>
  ) : (
    <div className="relative mx-[7rem]">
      <div className="absolute bottom-[12.5em] right-[-7.5em] z-[2]">
        <Ellipse width={148} classes="bg-medium-ellipse-gradient" />
      </div>
      <div className="absolute bottom-[12em] right-[-6.5em] z-[-3] h-[509px] w-[741px] rounded-[23.38px] border  border-dark-grey-border bg-dark-grey "></div>
      <Image
        src={imageUrl}
        width={523}
        height={1048}
        alt="home-page-iphone"
        className="bg-transparent"
        quality={100}
      />
      <div className="absolute left-[-8em] top-[15em] z-[-2] ">
        <Ellipse width={177.88} classes="bg-medium-ellipse-gradient" />
      </div>
    </div>
  );
};

export default ImageFrame;
