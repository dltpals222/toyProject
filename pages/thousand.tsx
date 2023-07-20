import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const GameStart = () => {
  // 상태 관리
  const [divRotate, setDivRotate] = useState<number>(0);
  const [randomNumber, setRandomNumber] = useState<number>(0);
  const [randomNumberTwo, setRandomNumberTwo] = useState<number>(0);
  const [count, setCount] = useState<number>(8);
  const [revertRotate, setRevertRotate] = useState<number>(0);
  const [backgroundColor, setBackgroundColor] = useState<string>("blueviolet");
  const [divBackgroundColor, setDivBackgroundColor] = useState<string>("#CCC");
  const [fontColor, setFontColor] = useState<string>("black");
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
  const [borderRadius, setBorderRadius] = useState<string>("0%");
  const [boxSize, setBoxSize] = useState<number>(100);

  // random 함수
  function random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  // 초기 startposition 설정
  const startLeft = random(0, 1850);
  const startTop = random(0, 850);
  // 클릭시 count 증가
  function countUp() {
    const newCount = count + 1;
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
    setRandomNumber(random(0, 1850));
    setRandomNumberTwo(random(0, 850));
    setRevertRotate(revertRotate - 90);
  }

  // 이벤트1
  function eventOne() {
    type BackgroundColors = {
      [key: number]: string;
    };

    const backgroundColors: BackgroundColors = {
      9: "red",
      19: "#CC3333",
      29: "lightcyan",
      39: "darkviolet",
      49: "darkturquoise",
      59: "darkseagreen",
      69: "lightcoral",
      79: "navy", //todo 글자 밝은색으로 교체
      89: "gold",
      99: "skyblue",
      109: "forestgreen",
      119: "pink",
      129: "firebrick",
      139: "mediumaquamarine",
      149: "cadetblue",
      159: "aliceblue",
      169: "mediumblue",
      179: "crimson", //todo 글자 밝은색으로 교체
      189: "lightsalmon",
      199: "slategray",
      209: "ivory",
      219: "chocolate",
      229: "lavenderblush",
      239: "pink",
      249: "burlywood",
      259: "darkorange",
      269: "lemonchiffon",
      279: "dodgerblue",
      289: "khaki",
      299: "darkcyan",
      309: "azure",
      319: "lime",
      329: "mintcream",
      339: "lightgoldenrodyellow",
      349: "violet",
      359: "darkred", //todo 글자 밝은색으로 교체
      369: "cornsilk",
      379: "lightskyblue",
      389: "mediumblue", //todo 글자 밝은색으로 교체
      399: "darkorchid",
      409: "deepskyblue",
      419: "darkgoldenrod",
      429: "darkblue", //todo 글자 밝은색으로 교체
      439: "limegreen",
      449: "hotpink",
      459: "darkkhaki",
      469: "fuchsia",
      479: "darkolivegreen",
      489: "aqua",
      499: "dimgray", //todo 글자 밝은색으로 교체
      509: "lightgrey", //* 배경색 교체
      519: "darkslategray", //todo 글자 밝은색으로 교체
      529: "saddlebrown", //todo 글자 밝은색으로 교체
      539: "darkmagenta", //todo 글자 밝은색으로 교체
      549: "deeppink",
      559: "seagreen",
      569: "lightgreen",
      579: "coral",
      589: "steelblue",
      599: "#ffe4e1",
      609: "indigo", //todo 글자 밝은색으로 교체
      619: "gainsboro",
      629: "darkgray", //* 배경색 교체
      639: "purple", //todo 글자 밝은색으로 교체
      649: "darkslateblue", //todo 글자 밝은색으로 교체
      659: "lightpink",
      669: "darkgreen",
      679: "lightsteelblue",
      689: "peachpuff",
      699: "plum",
      709: "wheat",
      719: "brown", //todo 글자 밝은색으로 교체
      729: "lawngreen",
      739: "mistyrose",
      749: "greenyellow",
      759: "thistle",
      769: "olivedrab", //todo 글자 밝은색으로 교체 + 배경색 교체
      779: "tan",
      789: "black", //todo 글자 밝은색으로 교체
      799: "mediumpurple",
      809: "palevioletred",
      819: "orange",
      829: "orchid",
      839: "turquoise",
      849: "moccasin",
      859: "yellowgreen",
      869: "rosybrown",
      879: "indianred",
      889: "paleturquoise",
      899: "mediumorchid",
      909: "chartreuse",
      919: "midnightblue", //todo 글자 밝은색으로 교체
      929: "lightslategray",
      939: "darkviolet", //todo 글자 밝은색으로 교체
      949: "aqua",
      959: "silver", //* 배경색 교체
      969: "lightblue", //* 배경색 교체
      979: "yellow",
      989: "purple", //todo 글자 밝은색으로 교체
      999: "darkcyan", //todo 글자 밝은색으로 교체
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

    const changeFontColorNumbers = [
      79, 179, 359, 389, 429, 499, 519, 529, 539, 609, 639, 649, 719, 769, 789, 919, 939, 989, 999,
    ];
    const changeDivBackgroundColorNumbers = [509, 629, 769, 959, 969];

    for (let i = 0; i < changeFontColorNumbers.length; i++) {
      const key = changeFontColorNumbers[i];
      if (count >= key && count < key + 10) {
        setFontColor("white");
        break;
      }
      setFontColor("black");
    }

    for (let i = 0; i < changeDivBackgroundColorNumbers.length; i++) {
      const key = changeDivBackgroundColorNumbers[i];
      if (count >= key && count < key + 10) {
        setDivBackgroundColor("black");
        break;
      }
      setDivBackgroundColor("#ccc");
    }
  }

  // 이벤트2
  function eventTwo(): void {
    type BorderRadius = {
      [key: number]: string;
    };
    const borderRadius: BorderRadius = {
      0: "0%",
      1: "1%",
      2: "2%",
      3: "3%",
      4: "4%",
      5: "5%",
      6: "6%",
      7: "7%",
      8: "8%",
      9: "9%",
      10: "10%",
      11: "12.5%",
      12: "15%",
      13: "17.5%",
      14: "20%",
      15: "22.5%",
      16: "25%",
      17: "30%",
      18: "35%",
      19: "40%",
      20: "50%",
    };
    const eventIndex: number = Math.floor(count / 50);
    setBorderRadius(borderRadius[eventIndex] || "50%");
  }

  // 이벤트3
  function eventThree() {
    if (count % 100 === 99 && count > 0) {
      // 박스 크기를 두 배로 만듭니다.
      setBoxSize(200);

      // 2초 후에 박스 크기를 원래대로 돌리고 나머지 이벤트를 실행하게 돕니다.
      setTimeout(() => {
        setBoxSize(100);
      }, 200);
    }
  }

  return (
    <AnimatePresence>
      <div
        onClick={() => resetCount()}
        style={{ backgroundColor: divBackgroundColor }}
        className="flex align-center relative containerDiv"
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
            left: randomNumber === 0 ? startLeft : randomNumber,
            top: randomNumberTwo === 0 ? startTop : randomNumberTwo,
            width: boxSize,
            height: boxSize,
          }}
          style={{
            width: 100,
            height: 100,
            backgroundColor: backgroundColor,
            left: randomNumber === 0 ? startLeft : randomNumber,
            top: randomNumberTwo === 0 ? startTop : randomNumberTwo,
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
            left: randomNumber === 0 ? startLeft : randomNumber,
            top: randomNumberTwo === 0 ? startTop : randomNumberTwo,
            width: boxSize,
            height: boxSize,
          }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          style={{
            borderRadius: borderRadius,
            color: fontColor,
          }}
          className="absolute move-div"
        >
          {count}
        </motion.div>
        {isPopupVisible && (
          <div className="isPopupVisibleContainer">
            <div className="isPopupVisible">
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

export default GameStart;
