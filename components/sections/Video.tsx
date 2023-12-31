import React from "react";
import Image from "next/image";

const Video = () => {
  return (
    <div className="relative text-white">
      <Image
        fill
        className="pointer-events-none z-[-1] object-cover object-top pt-[5rem]"
        src="/assets/bg-vector.svg"
        alt="hero image"
      />
      <div className="h-full w-full p-12 pt-0 max-md:p-6">
        <div className="h-full w-full p-0 2xl:p-20">
          <div className="z-[2] flex flex-col items-center justify-center gap-10 px-[12rem] text-center max-md:px-0">
            <h2 className="xlarge-extrabold-text uppercase">
              The easiest way to buy tokens on Telegram
            </h2>
            <p className="larger-medium-text text-ligt-muted-grey">
              Enjoy our simple and easy to use interface, accessible directly from Telegram.
            </p>
            <div className="h-[732.33px] w-[1288px] overflow-hidden rounded-[56px]">
              <video
                src="/ctrl.mp4"
                controls={false}
                autoPlay={true}
                muted={true}
                loop={true}
                playsInline={true}
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
