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
  const [boxSize, setBoxSize] = useState<number>(100);

  // random 함수
  function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // 클릭시 count 증가
  function countUp() {
    const newCount = count + 10;
    setCount(newCount);
    if (newCount === 1000) {
      setIsPopupVisible(true);
    }
  }

  // count 초기화
  function resetCount() {
    setCount(0);
    setBackgroundColor("blueviolet");
    setBorderRadius("0%");
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
      279: "navy",
      289: "magenta",
      299: "lime",
      309: "khaki",
      319: "gold",
      329: "chocolate",
      339: "beige",
      349: "azure",
      359: "aliceblue",
      369: "aqua",
      379: "aquamarine",
      389: "blueviolet",
      399: "brown",
      409: "burlywood",
      419: "cadetblue",
      429: "chartreuse",
      439: "coral",
      449: "cornflowerblue",
      459: "cornsilk",
      469: "crimson",
      479: "darkblue",
      489: "darkcyan",
      499: "darkgoldenrod",
      509: "darkgray",
      519: "darkgreen",
      529: "darkkhaki",
      539: "darkmagenta",
      549: "darkolivegreen",
      559: "darkorange",
      569: "darkorchid",
      579: "darkred",
      589: "darksalmon",
      599: "darkseagreen",
      609: "darkslateblue",
      619: "darkslategray",
      629: "darkturquoise",
      639: "darkviolet",
      649: "deeppink",
      659: "deepskyblue",
      669: "dimgray",
      679: "dodgerblue",
      689: "firebrick",
      699: "floralwhite",
      709: "forestgreen",
      719: "gainsboro",
      729: "ghostwhite",
      739: "goldenrod",
      749: "greenyellow",
      759: "honeydew",
      769: "hotpink",
      779: "indianred",
      789: "ivory",
      799: "lavender",
      809: "lavenderblush",
      819: "lawngreen",
      829: "lemonchiffon",
      839: "lightblue",
      849: "lightcoral",
      859: "lightcyan",
      869: "lightgoldenrodyellow",
      879: "lightgreen",
      889: "lightgrey",
      899: "lightpink",
      909: "lightsalmon",
      919: "lightseagreen",
      929: "lightskyblue",
      939: "lightslategray",
      949: "lightsteelblue",
      959: "lightyellow",
      969: "limegreen",
      979: "linen",
      989: "mediumaquamarine",
      999: "mediumblue",
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
      "0": "0%",
      "1": "1%",
      "2": "2%",
      "3": "3%",
      "4": "4%",
      "5": "5%",
      "6": "6%",
      "7": "7%",
      "8": "8%",
      "9": "9%",
      "10": "10%",
      "11": "12.5%",
      "12": "15%",
      "13": "17.5%",
      "14": "20%",
      "15": "22.5%",
      "16": "25%",
      "17": "30%",
      "18": "35%",
      "19": "40%",
      "20": "50%",
    };
    const eventIndex: number = Math.floor(count / 50);
    setBorderRadius(borderRadius[eventIndex.toString()] || "50%");
  }

  // 이벤트3
  function eventThree() {
    if (count % 100 === 99 && count > 0) {
      // 박스 크기를 두 배로 만듭니다.
      setBoxSize(200);

      // 2초 후에 박스 크기를 원래대로 돌리고 나머지 이벤트를 실행하게 돕니다.
      setTimeout(() => {
        setBoxSize(100);
      }, 2000);
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
            eventTwo();
            eventThree();
          }}
          animate={{
            rotate: divRotate,
            left: randomNumber,
            top: randomNumberTwo,
            width: boxSize,
            height: boxSize,
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
        ></motion.div>
        <motion.div
          onClick={(e) => {
            e.stopPropagation();
            countUp();
            rotate();
            eventOne();
            eventTwo();
            eventThree();
          }}
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            left: randomNumber,
            top: randomNumberTwo,
            width: boxSize,
            height: boxSize,
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
              <h2>축하합니다. 1000번 클릭하셨군요!</h2>
              <div style={{ display: "flex", justifyContent: "center" }}>
                <button className="buttonStyle" onClick={() => setIsPopupVisible(false)}>
                  재시작
                </button>
              </div>
              <p />
            </div>
          </div>
        )}
      </div>
    </AnimatePresence>
  );
};

export default StartImg;
