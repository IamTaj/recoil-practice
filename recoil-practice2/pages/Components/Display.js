import React from "react";
import { counter, counter2 } from "./recoil-components/Atom";
import { counterSelector, adderSelector } from "./recoil-components/Selector";
import { useRecoilState, useRecoilValue } from "recoil";
import Link from "next/link";

export default function Display() {
  const [counterValue, setCounterValue] = useRecoilState(counter);
  const [counterValue2, setCounterValue2] = useRecoilState(counter2);

  const mainSelectorValue = useRecoilValue(adderSelector);

  return (
    <div style={{ background: "red" }}>
      <center>
        <h1>Display1</h1>
      </center>
      <h1>Total Counter : {mainSelectorValue}</h1>
      <h3>Counter Value : {counterValue}</h3>
      <h3>Counter 2 : {counterValue2}</h3>
      <br />
      <button onClick={() => setCounterValue(counterValue + 1)}>Counter</button>
      <button onClick={() => setCounterValue2(counterValue2 * 2)}>
        Counter
      </button>

      <button>
        {" "}
        <Link href="/Components/Display2">View Updated Counter</Link>
      </button>
    </div>
  );
}
