export type ColorStyle =
  | "signiture-color-red"
  | "signiture-color-green"
  | "signiture-color-blue"
  | "signiture-color-yellow";

const blockColorSelect = (colorStyle: ColorStyle, BGColor: string) => {
  const result = {
    oneCornerBlock: {
      first: `bg-${colorStyle} blockStyle rounded-tl-[25px]`,
      second: `bg-${colorStyle} heightBlockStyle rounded-tr-[25px]`,
      third: `bg-${colorStyle} heightBlockStyle rounded-bl-[25px]`,
      fourth: `bg-${colorStyle} blockStyle rounded-br-[25px]`,
    },
    twoCornersBlock: {
      normal: {
        top: `bg-${colorStyle} heightBlockStyle rounded-t-[25px]`,
        bottom: `bg-${colorStyle} heightBlockStyle rounded-b-[25px]`,
        left: `bg-${colorStyle} blockStyle rounded-l-[25px]`,
        right: `bg-${colorStyle} blockStyle rounded-r-[25px]`,
      },
      increase: {
        z0: {
          normal: `bg-${colorStyle} increaseBlockStyle`,
          height: `bg-${colorStyle} heightIncreaseBlockStyle`,
          fourth: `bg-${colorStyle} heightIncreaseBlockStyle`,
        },
        z1: {
          first: `bg-${BGColor} increaseBlockStyle z-[1] rounded-br-p[20px]`,
          second: `bg-${BGColor} heightIncreaseBlockStyle z-[1] rounded-bl-p[20px]`,
          third: `bg-${BGColor} heightIncreaseBlockStyle z-[1] rounded-tr-p[20px]`,
          fourth: `bg-${BGColor} increaseBlockStyle z-[1] rounded-tl-p[20px] absolute right-0`,
        },
      },
      decrease: {
        top: `bg-${colorStyle} decreaseBlockStyle rounded-t-[25px]`,
        bottom: `bg-${colorStyle} decreaseBlockStyle rounded-b-[25px]`,
        left: `bg-${colorStyle} heightDecreaseBlockStyle rounded-l-[25px]`,
        right: `bg-${colorStyle} heightDecreaseBlockStyle rounded-r-[25px]`,
      },
    },
    container: {
      normal: "grid grid-cols-2 blockContainer m-10 relative",
      height: "grid grid-cols-2 heightBlockContainer m-10 relative",
    },
  };

  return result;
};

export default blockColorSelect;
