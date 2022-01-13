import React, { useState } from "react";
import { InputData } from "./component/InputData";
import { OutputData } from "./component/OutputData";

export const App = () => {
  const [min, setMin] = useState(1);
  const [sec, setSec] = useState(0);

  const [outHour, setOutHour] = useState(0);
  const [outMin, setOutMin] = useState(0);
  const [outSec, setOutSec] = useState(0);

  const onChangeMin = (e) => {
    const newMin = e.target.value;
    setMin(newMin);
  };
  const onChangeSec = (e) => {
    const newSec = e.target.value;
    setSec(newSec);
  };
  const onClickCul = () => {
    let allHours = min * 42.195;
    let allMin = sec * 42.195;
    let allSec;
    // 入力値の全部をいったん秒にする
    allHours = allHours * 60;
    allSec = Math.round(allHours + allMin);

    // 分にしてから秒を計算
    let newMin = allSec / 60;
    let newSec = newMin - Math.floor(newMin);
    newSec = Math.round(60 * newSec);
    allSec = allSec % 60;

    //秒
    const lastSec = allSec + newSec;

    //時間と分の計算
    newMin = Math.floor(newMin);

    //時間
    let lastHours = newMin / 60;

    newMin = lastHours - Math.floor(lastHours);
    newMin = Math.round(60 * newMin);

    const lastMin = newMin;
    lastHours = Math.floor(lastHours);

    setOutHour(lastHours);
    setOutMin(lastMin);
    setOutSec(lastSec);
  };
  return (
    <>
      <InputData
        min={min}
        sec={sec}
        onChangeMin={onChangeMin}
        onChangeSec={onChangeSec}
        onClickCul={onClickCul}
      />
      <OutputData outHour={outHour} outMin={outMin} outSec={outSec} />
    </>
  );
};
