import React from "react";

const style = {
  width: "100%",
  height: "auto",
  padding: "8px 16px 16px",
  backgroundColor: "orange",
  fontSize: "1.2em"
};

export const OutputData = () => {
  return (
    <div style={style}>
      <p>フルマラソンの予想は</p>
      <p>
        <span>2</span>時間<span>15</span>分<span>30</span>秒です。
      </p>
    </div>
  );
};
