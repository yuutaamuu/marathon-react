import React from "react";

const style = {
  width: "100%",
  height: "auto",
  padding: "8px 16px 16px",
  backgroundColor: "pink",
  fontSize: "1.2em"
};

const border = {
  color: "#364e96",
  border: "solid 3px #a6d3c8",
  borderRadius: "0.5em",
  padding: ".5em 2em",
  marginRight: "0.3em"
};

const borderR = {
  color: "#364e96",
  border: "solid 3px #a6d3c8",
  borderRadius: "0.5em",
  padding: ".5em 2em",
  marginRight: "0.3em",
  marginLeft: "1.5em"
};

export const InputData = (props) => {
  const { min, sec, onChangeMin, onChangeSec, onClickCul } = props;
  return (
    <div style={style}>
      <p>1kmのタイムを入力してください。</p>
      <input
        style={border}
        type="number"
        max="59"
        min="1"
        value={min}
        onChange={onChangeMin}
      />
      分
      <input
        style={borderR}
        type="number"
        max="59"
        min="0"
        value={sec}
        onChange={onChangeSec}
      />
      秒<button onClick={onClickCul}>予想する</button>
    </div>
  );
};
