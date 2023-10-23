
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Atom from "@/components/Atom";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
  <>
  <Atom/>
  </>
  );
}
