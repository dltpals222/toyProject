import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StartImg = () => {
  // 상태 관리
  const [divRotate, setDivRotate] = useState<number>(0);
  const [randomNumber, setRandomNumber] = useState<number>(0);
  const [randomNumberTwo, setRandomNumberTwo] = useState<number>(0);
  const [count, setCount] = useState<number>(0);
  const [revertRotate, setRevertRotate] = useState<number>(0);
  const [backgroundColor, setBackgroundColor] = useState<string>("blueviolet");
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  const [borderRadius, setBorderRadius] = useState<string>("0%");

  // random 함수
  function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // 클릭시 count 증가
  function countUp() {
    const newCount = count + 1;
    setCount(newCount);
    if (newCount === 251) {
      setIsPopupVisible(true);
    }
  }

  // count 초기화
  function resetCount() {
    setCount(0);
  }

  // 회전 함수
  function rotate() {
    setDivRotate(divRotate + 90);
    setRandomNumber(random(1, 800));
    setRandomNumberTwo(random(1, 800));
    setRevertRotate(revertRotate - 90);
  }

  // 이벤트1
  function eventOne() {
    type BackgroundColors = {
      [key: number]: string;
    };

    const backgroundColors: BackgroundColors = {
      9: "red",
      19: "orange",
      29: "yellow",
      39: "green",
      49: "blue",
      59: "indigo",
      69: "violet",
      79: "purple",
      89: "pink",
      99: "black",
      109: "#ffe4e1",
      119: "#f0f0f0",
      129: "gray",
      139: "grey",
      149: "silver",
      159: "maroon",
      169: "olive",
      179: "teal",
      189: "aqua",
      199: "cyan",
      209: "skyblue",
      219: "orchid",
      229: "purple",
      239: "fuchsia",
      249: "purple",
      259: "pink",
      269: "plum",
    };

    const countKeys = Object.keys(backgroundColors);

    for (let i = 0; i < countKeys.length; i++) {
      const key = parseInt(countKeys[i]);
      if (count >= key && count < key + 10) {
        setBackgroundColor(backgroundColors[key]);
        break;
      }
      setBackgroundColor("blueviolet");
    }
  }

  // 이벤트2
  function eventTwo(): void {
    type BorderRadius = {
      [key: string]: string;
    };

    const borderRadius: BorderRadius = {
      0: "0%",
      1: "6.25%",
      2: "12.5%",
      3: "18.75%",
      4: "25%",
      5: "31.25%",
      6: "37.5%",
      7: "43.75%",
      8: "50%",
    };

    const eventIndex: number = Math.floor(count / 50);
    setBorderRadius(borderRadius[eventIndex] || "50%");
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
            eventTwo();
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
            borderRadius: borderRadius,
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
            eventTwo();
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
            borderRadius: borderRadius,
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
