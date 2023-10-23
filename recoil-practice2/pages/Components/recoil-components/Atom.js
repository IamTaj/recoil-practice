const { atom } = require("recoil");

const counter = atom({
  key: "counter",
  default: 0,
});

const counter2 = atom({
  key: "counter2",
  default: 1,
});


export {counter, counter2};