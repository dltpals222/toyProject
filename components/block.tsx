import React from "react";
import { ColorStyle } from "../model/colorSelect";
import blockSelect, { BlockNumber } from "../model/blockSelect";

const Block = ({
  blockNumber,
  colorStyle,
}: {
  blockNumber: BlockNumber;
  colorStyle: ColorStyle;
}) => {
  // const secondBlockClassName: BlockStyle = {
  //   first: "increaseBlockStyle bg-signiture-color-blue",
  //   child: "bg-[#ffffff] rounded-ee-[20px] z-[1] increaseBlockStyle",
  //   second: "bg-signiture-color-blue decreaseBlockStyle rounded-t-[25px] ml-[19px]",
  //   third: "bg-signiture-color-blue blockStyle rounded-s-[25px]",
  //   fourth: "bg-signiture-color-blue blockStyle rounded-ee-[25px]",
  // };

  const block = () => {
    const BGColor = "#ffffff";
    const { firstBlock, secondBlock, thirdBlock, fourthBlock } = blockSelect(colorStyle, BGColor);

    switch (blockNumber) {
      case "first":
        return (
          <div className={firstBlock.container}>
            <div className={firstBlock.first} />
            <div className={firstBlock.second} />
            <div className={firstBlock.third} />
            <div className={firstBlock.fourth}>
              <div className={firstBlock.third} />
            </div>
          </div>
        );

      case "second":
        return (
          <div className={secondBlock.container}>
            <div className={secondBlock.first}>
              <div className={secondBlock.child} />
            </div>
            <div className={secondBlock.second} />
            <div className={secondBlock.third} />
            <div className={secondBlock.fourth} />
          </div>
        );

      case "third":
        return (
          <div className={thirdBlock.container}>
            <div className={thirdBlock.first} />
            <div className={thirdBlock.second}>
              <div className={thirdBlock.child} />
            </div>
            <div className={thirdBlock.third} />
            <div className={thirdBlock.fourth} />
          </div>
        );

      case "fourth":
        return (
          <div className={fourthBlock.container}>
            <div className={fourthBlock.first} />
            <div className={fourthBlock.second} />
            <div className={fourthBlock.third}>
              <div className={fourthBlock.child} />
            </div>
            <div className={fourthBlock.fourth} />
          </div>
        );

      default:
        console.log("다시 작성해주시기 바랍니다.");
        break;
    }
  };

  return <div>{block()}</div>;
};

export default Block;
