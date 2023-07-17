import React from "react";
import { motion } from "framer-motion";

const MoveDiv = ({ selectColor }: { selectColor: string }) => {
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
      setRandomNumber(random(1, 800));
      setRandomNumberTwo(random(1, 800));
    }, 1);
  }

  const leftMove = randomNumber === 0 ? random(1, 800) : randomNumber;
  const topMove = randomNumberTwo === 0 ? random(1, 800) : randomNumberTwo;

  return (
    <div style={{ width: 1000, height: 1000 }} className="flex flex-auto align-center relative">
      <motion.div
        onClick={() => {
          rotate();
        }}
        style={{
          width: 50,
          height: 50,
          backgroundColor: selectColor,
          display: divDisplay,
          left: leftMove,
          top: topMove,
        }}
        className="absolute"
      />
    </div>
  );
};

export default MoveDiv;
