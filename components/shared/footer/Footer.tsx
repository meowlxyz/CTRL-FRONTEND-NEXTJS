import React from "react";
import Image from "next/image";
import Link from "next/link";
import Ellipse from "../ellipse/Ellipse";

const Footer = () => {
  return (
    <div className="flex-between relative gap-5 border border-dark-grey-border bg-dark-grey p-20 py-5 max-md:px-6 max-sm:flex-col">
      <p className="medium-normal-text ml-24  text-[#9D9999] max-md:ml-0">
        © 2023 by ctrlapp. All rights reserved!
      </p>
      <div className="flex-start gap-5">
        <p className="medium-normal-text mr-7 text-[#D8D8D8B2] max-md:hidden">
          Terms of Service
        </p>
        <Link
          href="https://t.me/ctrlappio"
          target="_blank"
          className="rounded-full border border-solid border-[#FFFFFF1A] bg-[#111316] p-3 transition-colors hover:bg-[#1C1C1C]"
        >
          <Image
            src="/icons/telegram-logo.svg"
            width={25.71}
            height={25.71}
            alt="social-icons"
          />
        </Link>
        <Link
          href="mailto:contact@ctrlapp.io"
          target="_blank"
          className="rounded-full border border-solid border-[#FFFFFF1A] bg-[#111316] p-3 transition-colors hover:bg-[#1C1C1C]"
        >
          <Image
            src="/icons/mail-logo.svg"
            width={25.71}
            height={25.71}
            alt="social-icons"
          />
        </Link>
        <Link
          href="https://twitter.com/ctrlappio"
          target="_blank"
          className="rounded-full border border-solid border-[#FFFFFF1A] bg-[#111316] p-3 transition-colors hover:bg-[#1C1C1C]"
        >
          <Image
            src="/icons/twitter-logo.svg"
            width={25.71}
            height={25.71}
            alt="social-icons"
          />
        </Link>
        <Link
          href="https://www.instagram.com/Ctrlappio"
          target="_blank"
          className="rounded-full border border-solid border-[#FFFFFF1A] bg-[#111316] p-3 transition-colors hover:bg-[#1C1C1C]"
        >
          <Image
            src="/icons/instagram-logo.svg"
            width={25.71}
            height={25.71}
            alt="social-icons"
          />
        </Link>
      </div>
      <div className="absolute left-[1.5em] top-[-5em] z-[1] max-md:hidden">
        <Ellipse width={134.29} classes="bg-medium-ellipse-gradient" />
      </div>
    </div>
  );
};

export default Footer;
