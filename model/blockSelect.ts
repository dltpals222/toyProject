import { Container } from "postcss";
import BCS, { ColorStyle } from "./colorSelect";

export interface blockTypes {
  container: string;
  first: string;
  second: string;
  third: string;
  fourth: string;
  child: string;
}

export interface returnTypes {
  firstBlock: blockTypes;
  secondBlock: blockTypes;
  thirdBlock: blockTypes;
  fourthBlock: blockTypes;
}

export type BlockNumber = "first" | "second" | "third" | "fourth";

const blockColorSelect = (colorStyle: ColorStyle, BGColor: string): returnTypes => {
  const { oneCornerBlock, twoCornersBlock, container } = BCS(colorStyle, BGColor);
  const blockClassName = {
    firstBlock: {
      container: container.normal,
      first: oneCornerBlock.first,
      second: twoCornersBlock.normal.right,
      third: twoCornersBlock.decrease.bottom,
      fourth: twoCornersBlock.increase.z0.normal,
      child: twoCornersBlock.increase.z1.fourth,
    },
    secondBlock: {
      container: container.normal,
      first: twoCornersBlock.increase.z0.normal,
      child: twoCornersBlock.increase.z1.first,
      second: twoCornersBlock.decrease.top,
      third: twoCornersBlock.normal.left,
      fourth: oneCornerBlock.fourth,
    },
    thirdBlock: {
      container: container.height,
      first: twoCornersBlock.normal.top,
      second: twoCornersBlock.increase.z0.height,
      child: twoCornersBlock.increase.z1.second,
      third: oneCornerBlock.third,
      fourth: twoCornersBlock.decrease.right,
    },
    fourthBlock: {
      container: container.height,
      first: twoCornersBlock.decrease.left,
      second: oneCornerBlock.second,
      third: twoCornersBlock.increase.z0.height,
      child: twoCornersBlock.increase.z1.third,
      fourth: twoCornersBlock.normal.bottom,
    },
  };
  return blockClassName;
};

export default blockColorSelect;
