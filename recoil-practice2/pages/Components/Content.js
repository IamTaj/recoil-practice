import Link from "next/link";
import React from "react";

export default function Content() {
  return (
    <>
      <center>
        <h1>Content Page</h1>
      </center>
      <ul>
        <li>
          <Link href="/Components/Display">Set Counter Page</Link>
        </li>
        <li>
          <Link href="/pages/Components/Display2">View Updated Counter</Link>
        </li>
      </ul>
    </>
  );
}
