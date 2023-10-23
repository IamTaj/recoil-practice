import React from "react";
import { atom } from "recoil";
import { DarkModeSwitch, Button } from "./RecoilFunctions";

export default function Atom() {
  return (
    <div>
      <div>
        <DarkModeSwitch />
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
}
