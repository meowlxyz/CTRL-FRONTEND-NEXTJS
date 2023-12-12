import React from "react";

interface ButtonProps {
  label: string;
  onClick: () => void;
  classes?: string;
}

const Button = ({ label, onClick, classes }: ButtonProps) => {
  return (
    <button
      className={`no-focus rounded-lg bg-primary font-medium capitalize ${classes}`}
    >
      {label}
    </button>
  );
};

export default Button;
