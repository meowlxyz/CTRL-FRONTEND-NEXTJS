import Link from "next/link";
import React from "react";

interface ButtonProps {
  label: string;
  href: string;
  classes?: string;
}

const Button = ({ label, href, classes }: ButtonProps) => {
  return (
    <Link href={href} target="_blank">
      <button
        className={`no-focus rounded-lg bg-primary font-medium capitalize ${classes}`}
      >
        {label}
      </button>
    </Link>
  );
};

export default Button;
