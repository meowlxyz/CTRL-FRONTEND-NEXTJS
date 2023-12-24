import React from "react";
import Image from "next/image";
import { supplyTableItems } from "@/constants";

const Supply = () => {
  return (
    <section
      className="flex w-full flex-col items-center gap-10 text-white"
      id="tokenomics"
    >
      <div className="flex flex-col gap-8 text-center">
        <h1 className="xlarge-extrabold-text uppercase">Supply</h1>
        <p className="larger-medium-text text-ligt-muted-grey">
          10,000,000 $Ctrl was minted at genesis.
        </p>
      </div>
      <div className="flex-center w-full flex-wrap gap-20">
        <Image
          width={587.44}
          height={587.44}
          src="/assets/total-supply.svg"
          alt="frame image"
        />
        <div className="flex w-[50%] flex-col gap-5 max-xl:w-full">
          {supplyTableItems.map((item) => {
            return (
              <div
                key={item.title}
                className="larger-medium-text rounded-xl border-[1.5px] border-[#FFFFFF1A] bg-dark-grey p-5 pt-2"
              >
                <div className="flex flex-col">
                  <div className="flex-start gap-14">
                    <div
                      className="label-shadow ml-5 h-[60px] w-5 rotate-90 rounded-sm"
                      style={{ backgroundImage: item.iconColor }}
                    ></div>
                    <span
                      className="label"
                      style={{ backgroundImage: item.iconColor }}
                    >
                      {item.percentage}%
                    </span>
                  </div>
                  <h6>{item.title}</h6>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Supply;
