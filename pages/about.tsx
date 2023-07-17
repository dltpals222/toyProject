import React from "react";
import { motion } from "framer-motion";

const StartImg = () => {
  const [divDisplay, setDivDisplay] = React.useState<string>("block");
  const [randomNumber, setRandomNumber] = React.useState<number>(0);
  const [randomNumberTwo, setRandomNumberTwo] = React.useState<number>(0);

  function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function rotate() {
    setDivDisplay("none");
    setTimeout(() => {
      setDivDisplay("block");
      setRandomNumber(random(1, 900));
      setRandomNumberTwo(random(1, 900));
    }, 1000);
  }

  return (
    <div style={{ width: 1000, height: 1000 }} className="flex flex-auto align-center relative">
      <motion.div
        onClick={() => {
          rotate();
        }}
        style={{
          width: 50,
          height: 50,
          backgroundColor: "blueviolet",
          display: divDisplay,
          left: randomNumber,
          top: randomNumberTwo,
        }}
        className="absolute"
      />
    </div>
  );
};

export default StartImg;
