import React from "react";
import MoveDiv from "@/components/moveDiv";

const StartImg = () => {
  return (
    <div style={{ width: 1000, height: 1000 }} className="flex flex-auto align-center relative">
      <MoveDiv selectColor="red" />
    </div>
  );
};

export default StartImg;
