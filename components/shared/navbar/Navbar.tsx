import React from "react";
import Image from "next/image";
import Link from "next/link";
import { sidebarLinks } from "@/constants";
import Button from "@/components/ui/button/Button";

const Navbar = () => {
  return (
    <div className="flex-between w-[85%] whitespace-nowrap rounded-2xl border border-dark-grey-border bg-dark-grey p-4">
      <div className="flex-center gap-[18px]">
        <Image src="/logo.svg" width={67} height={47} alt="logo" />
        <h4>Ctrl</h4>
      </div>
      <nav className="w-max">
        <ol className="flex-center medium-normal-text gap-10 px-[30px] py-[15px] capitalize text-muted-grey">
          {sidebarLinks.map((link) => (
            <li key={link.label}>
              <Link href={link.sectionID}>{link.label}</Link>
            </li>
          ))}
        </ol>
      </nav>
      <Button
        label="Connect Wallet"
        onClick={() => {}}
        classes="text-lg leading-7 px-8 py-[15px]"
      />
    </div>
  );
};

export default Navbar;
