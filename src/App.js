import React, { useState } from "react";
import { InputData } from "./component/InputData";
import { OutputData } from "./component/OutputData";

export const App = () => {
  const [min, setMin] = useState(1);
  const onChangeMin = (e) => {
    const newMin = e.target.value;
    setMin(newMin);
  };
  return (
    <>
      <InputData min={min} onChangeMin={onChangeMin} />
      <OutputData />
    </>
  );
};
