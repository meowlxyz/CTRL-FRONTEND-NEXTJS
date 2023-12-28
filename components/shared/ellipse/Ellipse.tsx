"use client";
import React from "react";

const Ellipse = ({ width, classes }: { width: number; classes?: string }) => {
  const [isDesktop, setIsDesktop] = React.useState<boolean>(false);

  const handleResize = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  React.useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  if (isDesktop) {
    return (
      <div
        className={`ellipse-shadow aspect-square rounded-full ${classes}`}
        style={{ width: `${width}px` }}
      ></div>
    );
  } else {
    return (<div
      className={`ellipse-shadow aspect-square rounded-full ${classes}`}
      style={{ width: `${width}px`, visibility: `hidden` }}
    ></div>)
  }

};

export default Ellipse;
