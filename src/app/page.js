'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Mensaje from "./Mensaje.js";
import Titulo from "./Titulo.js";

export default function Home() {
  return (
    <div>
        <Mensaje />
        <Titulo />
    </div>
  );
}
