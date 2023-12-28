import React from "react";
import ImageFrame from "../shared/image-frame/ImageFrame";
import Image from "next/image";

const Revenue = () => {
  return (
    <section id="revenue" className="w-full text-white">
      <div className="flex h-full w-full flex-wrap items-center justify-between max-xl:justify-center">
        <div className="flex w-[39%] flex-col gap-7 max-xl:w-full">
          <div className="flex flex-col gap-5">
            <h4 className="larger-medium-text text-primary">
              Referral program
            </h4>
            <h2 className="xlarge-extrabold-text uppercase">Share & Earn</h2>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex items-start justify-start gap-5">
              <Image
                src="/icons/primary-circle.svg"
                width={40}
                height={40}
                alt="icon"
              />
              <div className="flex flex-col gap-3">
                <h3 className="xl-bold-text">Individual Traders</h3>
                <p className="medium-normal-text">
                  You can set up referral links and send them to your
                  friends to earn 25% of the trading fees they generate.
                </p>
              </div>
            </div>
            <div className="h-[2px] w-full bg-dark-grey-border"></div>
            <div className="flex items-start justify-start gap-5">
              <Image
                src="/icons/green-circle.svg"
                width={40}
                height={40}
                alt="icon"
              />
              <div className="flex flex-col gap-3">
                <h3 className="xl-bold-text">
                  Group Owners
                </h3>
                <p className="medium-normal-text">
                  Add the Ctrl bot to your telegram group and earn 25% of
                  the fees generated each time a trade is done in your group or channel.
                </p>
              </div>
            </div>
          </div>
        </div>
        <ImageFrame imageUrl="/assets/telegram-chat-iphone.png" />
      </div>
    </section>
  );
};

export default Revenue;
