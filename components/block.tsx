import React from "react";

export type BlockStyle = {
  container: string;
  first: string;
  second: string;
  third: string;
  fourth: string;
  blockCase?: {
    1?: string;
    2?: string;
    3?: string;
    4?: string;
  };
};

const Block = (props: BlockStyle) => {
  console.log(props.blockCase);
  return (
    <div className={props.container}>
      <div className={props.first}>{/* <div className={props.blockCase[1]}></div> */}</div>
      <div className={props.second}></div>
      <div className={props.third}></div>
      <div className={props.fourth}></div>
    </div>
  );
};

export default Block;
