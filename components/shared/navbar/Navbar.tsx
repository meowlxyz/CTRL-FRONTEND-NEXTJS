"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import Button from "@/components/ui/button/Button";

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [activeSection, setActiveSection] = useState("ctrl");

  const handleScroll = () => {
    const scrollTop = window.scrollY;
    setIsSticky(scrollTop > 50);
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;

      if (
        scrollTop >= sectionTop - 50 &&
        scrollTop < sectionTop + sectionHeight - 50
      ) {
        setActiveSection(section.id);
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return isSticky ? (
    <>
      <div className="flex-between w-[85%] whitespace-nowrap rounded-2xl border-transparent bg-transparent p-4 text-transparent transition-colors">
        <div className="flex-center gap-[18px]">
          <Image src="/logo.svg" width={67} height={47} alt="logo" />
          <h4>Ctrl</h4>
        </div>
        <nav className="w-max">
          <ol className="flex-center medium-normal-text gap-10 px-[30px] py-[15px] capitalize text-muted-grey">
            {sidebarLinks.map((link) => (
              <li key={link.label}>
                <Link href={`#${link.sectionID}`}>{link.label}</Link>
              </li>
            ))}
          </ol>
        </nav>
        <Button
          label="Connect Wallet"
          onClick={() => {}}
          classes="text-[18px] leading-7 px-[30px] py-[15px] bg-transparent"
        />
      </div>
      <div className={`navbar flex-center sticky w-full bg-transparent px-12`}>
        <div className="flex-between w-[85%] whitespace-nowrap rounded-2xl border border-dark-grey-border bg-dark-grey p-4  shadow-xl">
          <div className="flex-center gap-[18px]">
            <Image src="/logo.svg" width={67} height={47} alt="logo" />
            <h4>Ctrl</h4>
          </div>
          <nav className="w-max">
            <ol className="flex-center medium-normal-text gap-10 px-[30px] py-[15px] capitalize text-muted-grey">
              {sidebarLinks.map((link) => (
                <li
                  className={`${
                    activeSection === link.sectionID
                      ? "!text-light transition-colors"
                      : " "
                  } hover-effect`}
                  key={link.label}
                >
                  <Link href={`#${link.sectionID}`}>{link.label}</Link>
                </li>
              ))}
            </ol>
          </nav>
          <Button
            label="Connect Wallet"
            onClick={() => {}}
            classes="text-[18px] leading-7 px-[30px] py-[15px]"
          />
        </div>
      </div>
    </>
  ) : (
    <div className="flex-between w-[85%] whitespace-nowrap rounded-2xl border border-dark-grey-border bg-dark-grey p-4">
      <div className="flex-center gap-[18px]">
        <Image src="/logo.svg" width={67} height={47} alt="logo" />
        <h4>Ctrl</h4>
      </div>
      <nav className="w-max">
        <ol className="flex-center medium-normal-text gap-10 px-[30px] py-[15px] capitalize text-muted-grey">
          {sidebarLinks.map((link) => (
            <li
              className={`${
                activeSection === link.sectionID &&
                "!text-light transition-colors"
              } hover-effect`}
              key={link.label}
            >
              <Link href={`#${link.sectionID}`}>{link.label}</Link>
            </li>
          ))}
        </ol>
      </nav>
      <Button
        label="Connect Wallet"
        onClick={() => {}}
        classes="text-[18px] leading-7 px-[30px] py-[15px]"
      />
    </div>
  );
};

export default Navbar;
