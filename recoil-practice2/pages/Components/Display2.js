import React from "react";
import { counter, counter2 } from "./recoil-components/Atom";
import { counterSelector, adderSelector } from "./recoil-components/Selector";
import { useRecoilState, useRecoilValue } from "recoil";

export default function Display2() {
  const [counterValue, setCounterValue] = useRecoilState(counter);
  const [counterValue2, setCounterValue2] = useRecoilState(counter2);

  const mainSelectorValue = useRecoilValue(adderSelector);
  return (
    <div style={{ background: "yellow" }}>
      <center>
        <h1>Display2</h1>
      </center>
      <h1>Total Counter : {mainSelectorValue}</h1>
      <h3>Counter Value : {counterValue}</h3>
      <h3>Counter 2 : {counterValue2}</h3>
    </div>
  );
}
