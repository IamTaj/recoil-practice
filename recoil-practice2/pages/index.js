import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Display from "./Components/Display";
import { RecoilRoot } from "recoil";
import Display2 from "./Components/Display2";
import Content from "./Components/Content";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Content />
    </>
  );
}
