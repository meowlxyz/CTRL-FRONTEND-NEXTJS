import React from "react";
import Image from "next/image";
import { featuresTableItems } from "@/constants";
import ImageFrame from "../shared/image-frame/ImageFrame";

const WhatIsCtrl = () => {
  return (
    <section id="ctrl" className="flex-between flex-wrap items-center p-20">
      <div className="flex w-[39%] flex-col gap-8 text-light">
        <div className="flex flex-col gap-6">
          <h6 className="larger-medium-text uppercase text-primary">
            Key Features
          </h6>
          <h2 className="xlarge-extrabold-text whitespace-nowrap uppercase">
            What is Ctrl?
          </h2>
        </div>
        <div className="flex flex-col gap-7">
          {featuresTableItems.map((item) => {
            return (
              <div
                key={item.title}
                className="flex flex-row gap-6 rounded-2xl border border-dark-grey-border bg-dark-grey p-8"
              >
                <div
                  className="flex-center aspect-square h-[72px] w-[72px] rounded-full"
                  style={{
                    backgroundColor: item.bgColor,
                  }}
                >
                  <Image
                    src={item.iconUrl}
                    width={33}
                    height={33}
                    alt="table-icon"
                    className="aspect-square object-contain"
                  />
                </div>
                <div className="flex flex-col gap-5">
                  <h3 className="xl-bold-text">{item.title}</h3>
                  <p className="medium-normal-text text-ligt-muted-grey">
                    {item.paragraph}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-min">
        <ImageFrame />
      </div>
    </section>
  );
};

export default WhatIsCtrl;
