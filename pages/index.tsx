import React from "react";
import Block, { BlockStyle } from "../components/block";

const StartImg = () => {
  const firstBlock: BlockStyle = {
    container: "grid grid-cols-2 blockContainer m-10",
    first: "upperBlockStyle  z-[0] bg-signiture-color-red",
    blockCase: { 2: "bg-[#ffffff] rounded-ee-[20px] z-[1] upperBlockStyle" },
    second: "bg-signiture-color-red innerBlockStyle rounded-t-[25px] ml-[25px]",
    third: "bg-signiture-color-red blockStyle rounded-s-[25px]",
    fourth: "bg-signiture-color-red blockStyle rounded-ee-[25px]",
  };
  return (
    <>
      <Block></Block>
    </>
  );
};

export default StartImg;
