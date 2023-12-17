import React from "react";
import ImageFrame from "../shared/image-frame/ImageFrame";
import Image from "next/image";

const Staking = () => {
  return (
    <section id="staking" className="w-full text-white">
      <div className="flex h-full w-full flex-wrap items-center justify-between max-xl:justify-center">
        <ImageFrame imageUrl="/assets/chart-iphone.png" reverse={true} />
        <div className="flex w-[39%] flex-col gap-5 max-xl:w-[90%]">
          <div className="flex flex-col gap-5">
            <h3 className="larger-medium-text text-primary">
              POWERING STAKING
            </h3>
            <h1 className="xlarge-extrabold-text uppercase">Staking</h1>
            <p className="larger-medium-text">$Ctrl can be staked.</p>
          </div>
          <p className="large-medium-text border-b-2 border-dark-grey-border pb-8 text-ligt-muted-grey">
            50% of the platform fees and 2% of the token trading volume (40% of
            taxes) are converted to ETH and distributed to $Ctrl stakers.
          </p>
          <div className="flex flex-col gap-5">
            <h5 className="larger-bold-text">
              Ctrl holders will have two staking options
            </h5>
            <p className="medium-normal-text flex-start gap-3 text-light-muted-white">
              <Image
                src="/icons/primary-confirm.svg"
                width={20}
                height={20}
                alt="icon"
              />
              Stake $Ctrl to earn ETH
            </p>
            <p className="medium-normal-text flex-start gap-3 border-b-2 border-dark-grey-border pb-8 text-light-muted-white">
              <Image
                src="/icons/green-confirm.svg"
                width={20}
                height={20}
                alt="icon"
              />
              Stake $Ctrl to earn more $Ctrl with auto-compounding.
            </p>
            <p className="large-medium-text text-ligt-muted-grey">
              Both of these vaults are operational at launch. Rewards will be
              distributed over the course of the week. That means that you need
              to stay staked for the whole week to get your whole weekly reward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Staking;
