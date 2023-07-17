import React, { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StartImg = () => {
  const [divRotate, setDivRotate] = React.useState<number>(0);
  const [randomNumber, setRandomNumber] = React.useState<number>(0);
  const [randomNumberTwo, setRandomNumberTwo] = React.useState<number>(0);
  const [count, setCount] = React.useState<number>(0);
  const [revertRotate, setRevertRotate] = React.useState<number>(0);
  const [backgroundColor, setBackgroundColor] = React.useState<string>("blueviolet");
  const [isPopupVisible, setIsPopupVisible] = React.useState<boolean>(false);

  function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function countUp() {
    const newCount = count + 1;
    setCount(newCount);
    if (newCount === 251) {
      setIsPopupVisible(true);
    }
  }

  function resetCount() {
    setCount(0);
  }

  function rotate() {
    setDivRotate(divRotate + 90);
    setRandomNumber(random(1, 800));
    setRandomNumberTwo(random(1, 800));
    setRevertRotate(revertRotate - 90);
  }

  function eventOne() {
    switch (true) {
      case count >= 9 && count < 19:
        setBackgroundColor("red");
        break;
      case count >= 19 && count < 29:
        setBackgroundColor("orange");
        break;
      case count >= 29 && count < 39:
        setBackgroundColor("yellow");
        break;
      case count >= 39 && count < 49:
        setBackgroundColor("green");
        break;
      case count >= 49 && count < 59:
        setBackgroundColor("blue");
        break;
      case count >= 59 && count < 69:
        setBackgroundColor("indigo");
        break;
      case count >= 69 && count < 79:
        setBackgroundColor("violet");
        break;
      case count >= 79 && count < 89:
        setBackgroundColor("purple");
        break;
      case count >= 89 && count < 99:
        setBackgroundColor("pink");
        break;
      case count >= 99 && count < 109:
        setBackgroundColor("black");
        break;
      case count >= 109 && count < 119:
        setBackgroundColor("#ffe4e1");
        break;
      case count >= 119 && count < 129:
        setBackgroundColor("#f0f0f0");
        break;
      case count >= 129 && count < 139:
        setBackgroundColor("gray");
        break;
      case count >= 139 && count < 149:
        setBackgroundColor("grey");
        break;
      case count >= 149 && count < 159:
        setBackgroundColor("silver");
        break;
      case count >= 159 && count < 169:
        setBackgroundColor("maroon");
        break;
      case count >= 169 && count < 179:
        setBackgroundColor("olive");
        break;
      case count >= 179 && count < 189:
        setBackgroundColor("teal");
        break;
      case count >= 189 && count < 199:
        setBackgroundColor("aqua");
        break;
      case count >= 199 && count < 209:
        setBackgroundColor("cyan");
        break;
      case count >= 209 && count < 219:
        setBackgroundColor("skyblue");
        break;
      case count >= 219 && count < 229:
        setBackgroundColor("orchid");
        break;
      case count >= 229 && count < 239:
        setBackgroundColor("purple");
        break;
      case count >= 239 && count < 249:
        setBackgroundColor("fuchsia");
        break;
      case count >= 249 && count < 259:
        setBackgroundColor("purple");
        break;
      case count >= 259 && count < 269:
        setBackgroundColor("pink");
        break;
      case count >= 269 && count < 279:
        setBackgroundColor("plum");
        break;
      default:
        setBackgroundColor("blueviolet");
        break;
    }
  }

  return (
    <AnimatePresence>
      <div
        onClick={() => resetCount()}
        style={{ width: "100vw", height: "100vh" }}
        className="flex align-center relative"
      >
        {/* <Block blockNumber="first" colorStyle="signiture-color-red"></Block> */}
        <motion.div
          onClick={(e) => {
            e.stopPropagation();
            countUp();
            rotate();
            eventOne();
          }}
          animate={{
            rotate: divRotate,
            left: randomNumber,
            top: randomNumberTwo,
          }}
          style={{
            width: 100,
            height: 100,
            backgroundColor: backgroundColor,
            left: 0,
            top: 0,
          }}
          className="absolute flex flex-1"
        >
          {/* <div style={{ transform: `rotate(${revertRotate}deg)` }}>{count}</div> */}
        </motion.div>
        <motion.div
          onClick={(e) => {
            e.stopPropagation();
            countUp();
            rotate();
            eventOne();
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            left: randomNumber,
            top: randomNumberTwo,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            width: 100,
            height: 100,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: "1.5em",
          }}
          className="absolute"
        >
          {count}
        </motion.div>
        {isPopupVisible && (
          <div
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "rgba(0,0,0,0.5)",
            }}
          >
            <div
              style={{
                backgroundColor: "white",
                borderRadius: "5px",
                padding: "1em",
              }}
            >
              <h2>축하합니다. 250번 클릭하셨군요!</h2>
              <p />
              <button onClick={() => setIsPopupVisible(false)}>닫기</button>
            </div>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default StartImg;
