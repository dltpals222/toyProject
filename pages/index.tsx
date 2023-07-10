import Image from "next/image";
import MA1920 from "../public/img/—Pngtree—pure watercolor gradient colorful background_964413.jpg";
import React from "react";

const StartImg = () => {
  return (
    <div>
      <Image alt="수체화" src={MA1920} className="height-100, rotate-90" />
    </div>
  );
};

export default StartImg;
