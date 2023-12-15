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
      <div className="h-full w-full p-12 pt-0">
        <div className="h-full w-full p-0 2xl:p-20">
          <div className="z-[2] flex flex-col items-center justify-center gap-10 px-[12rem] text-center">
            <h2 className="xlarge-extrabold-text uppercase">
              Discover New Tokens
            </h2>
            <p className="larger-medium-text text-ligt-muted-grey">
              Get alerts on newly created tokens on Ethereum in real-time with
              our scanner. Integrated with our bot, you can easily add tokens
              and snipe them with the click of a button.
            </p>
            <div className="h-[732.33px] w-[1288px] overflow-hidden rounded-[56px]">
              <video
                src="/ctrl.mp4"
                controls={true}
                autoPlay={true}
                muted
                loop
              ></video>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Video;
