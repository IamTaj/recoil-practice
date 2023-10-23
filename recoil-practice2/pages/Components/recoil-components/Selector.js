const { selector } = require("recoil");
import { counter, counter2 } from "./Atom";

const counterSelector = selector({
  key: "counterSelector",
  get: ({ get }) => {
    const counterValue = get(counter);
    return counterValue + 1;
  },
});

const adderSelector = selector({
  key: "adderSelector",
  get: ({ get }) => {
    const counterValue1 = get(counter);
    const counterValue2 = get(counter2);
    return counterValue1 + counterValue2;
  },
});

export { counterSelector, adderSelector };
