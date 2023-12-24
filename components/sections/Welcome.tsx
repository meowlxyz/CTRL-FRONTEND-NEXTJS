// Welcome.tsx
import React from "react";
import Navbar from "../shared/navbar/Navbar";
import Button from "../ui/button/Button";
import Image from "next/image";
import Ellipse from "../shared/ellipse/Ellipse";
import WhatIsCtrl from "./WhatIsCtrl";

const Welcome = () => {
  return (
    <section className="relative h-full w-full" id="ctrl">
      <Image
        fill
        className="pointer-events-none object-contain object-top"
        src="./assets/bg-vector.svg"
        alt="bg-image"
      />
      <div className="relative z-10 flex h-full w-full flex-col items-center p-12 pb-[7.5rem] text-light max-xl:px-6 max-lg:px-4">
        <Navbar />
        <h1 className="huge-extrabold-text mt-[8rem] text-center uppercase max-md:mt-[4rem]">
          You
          <span className="relative">
            <Ellipse
              width={53.63}
              classes="absolute -top-[-0.15em] -left-[-0.3em] z-50 bg-small-ellipse-gradient"
            />
            <span className="relative z-10">r</span>{" "}
          </span>
          All-<span className="text-primary">in</span>-One
          <br /> Trading Termina
          <span className="relative">
            <Ellipse
              width={228.69}
              classes="absolute -top-[0.1em] -left-[-0.7em] z-50 bg-large-ellipse-gradient"
            />
            <span className="relative z-10">l</span>
          </span>
          <br />
          <span className="relative">
            <Ellipse
              width={178.13}
              classes="absolute -top-[-0.1em] -left-[3.6em] z-50 bg-medium-ellipse-gradient max-sm:hidden"
            />
            <span className="relative z-10">on</span>
          </span>{" "}
          <span className="whitespace-nowrap">
            Te
            <span className="relative">
              <Ellipse
                width={43.82}
                classes="absolute -top-[-0.15em] -left-[-0.15em] z-50 bg-small-ellipse-gradient"
              />
              <span className="relative z-10">l</span>
            </span>
            egram
          </span>
        </h1>
        <p className="larger-medium-text mt-14 text-center text-ligt-muted-grey">
          Experience seamless and lightning-fast trading on the go with our{" "}
          <br />
          free-to-use trading web app and Telegram bot.
        </p>
        <Button
          label="Start trading"
          classes="text-lg mt-14 leading-[27.9px] px-10 py-5 text-[22px] leading-[34px] tracking-normal"
          href="https://t.me/ctrl_app_bot/trade"
        />
      </div>
      <div className="h-full w-full p-12 pt-0 max-md:p-6">
        <div className="h-full w-full p-0 2xl:p-20">
          <WhatIsCtrl />
        </div>
      </div>
    </section>
  );
};

export default Welcome;
