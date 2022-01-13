import React from "react";

const style = {
  width: "100%",
  height: "auto",
  padding: "8px 16px 16px",
  backgroundColor: "orange",
  fontSize: "1.2em"
};

export const OutputData = (props) => {
  const { outHour, outMin, outSec } = props;
  return (
    <div style={style}>
      <p>フルマラソンの予想タイムは</p>
      <p>
        <span>{outHour}</span>時間<span>{outMin}</span>分<span>{outSec}</span>
        秒です。
      </p>
    </div>
  );
};
