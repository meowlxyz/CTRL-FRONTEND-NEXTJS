import React from "react";
import Image from "next/image";
import Button from "../ui/button/Button";
import Ellipse from "../shared/ellipse/Ellipse";

const GetStarted = () => {
  return (
    <div className="relative rounded-[56px] border-[1.5px] border-[#191919] bg-dark-grey text-center text-white">
      <Image
        layout="fill"
        className="pointer-events-none object-cover object-center"
        src="/assets/bg-vector.svg"
        alt="background image"
      />
      <div className="relative z-[1] flex flex-col items-center gap-10 px-60 py-36 max-md:px-10 max-md:py-6">
        <div className="flex flex-col gap-5">
          <h2 className="text-[52px] font-extrabold leading-[65px] tracking-normal">
            GET STARTED, IT&apos;S EASY
          </h2>
          <p className="larger-medium-text text-ligt-muted-grey">
            Simply open up our Web App, create an account <br></br> and you're ready to start your new trading journey!
          </p>
        </div>
        <Button
          label="Get Started Now"
          classes="text-lg leading-[27.9px] px-10 py-5 text-[22px] leading-[34px] tracking-normal w-max"
          href="https://t.me/ctrl_app_bot/trade"
        />
      </div>
      <div className="absolute right-[-7.5em] top-[-8em] z-[-1]">
        <Ellipse width={283.73} classes="bg-large-ellipse-gradient" />
      </div>
    </div>
  );
};

export default GetStarted;
