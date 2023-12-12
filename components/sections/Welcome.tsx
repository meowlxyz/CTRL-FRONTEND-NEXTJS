// Welcome.tsx
import React from "react";
import Navbar from "../shared/navbar/Navbar";
import Button from "../ui/button/Button";
import Image from "next/image";
import Ellipse from "../shared/ellipse/Ellipse";

const Welcome = () => {
  return (
    <div className="relative h-full w-full">
      <Image
        layout="fill"
        className="pointer-events-none object-cover object-top"
        src="./assets/bg-vector.svg"
        alt="bg-image"
      />
      <div className="relative z-10 flex h-full w-full flex-col items-center p-12 pb-0 text-light">
        <Navbar />
        <h1 className="huge-extrabold-text mt-[8rem] text-center uppercase">
          You
          <span className="relative">
            <Ellipse
              width={53.63}
              classes="absolute -top-[-0.15em] -left-[-0.3em] z-50"
            />
            <span className="relative z-10">r</span>{" "}
          </span>
          All-<span className="text-primary">in</span>-One
          <br /> Trading Terminal
          <br />
          on Telegram
        </h1>
        <p className="larger-medium-text mt-14 text-center text-ligt-muted-grey">
          Experience seamless and lightning-fast trading on the go with our{" "}
          <br />
          free-to-use trading web app and Telegram bot.
        </p>
        <Button
          label="Start trading"
          classes="text-lg mt-14 leading-[27.9px] px-10 py-5 text-[22px] leading-[34px] tracking-normal"
          onClick={() => {}}
        />
      </div>
    </div>
  );
};

export default Welcome;
