'use client';
import Image from "next/image";
import styles from "./page.module.css";
import Mensaje from "./Mensaje.js";
import Titulo from "./Titulo.js";
import Contador from "./Contador";
import Auth from "./Auth";
import Temporizador from "./Temporizador";
import DetectorVentana from "./DetectorVentana";
import ConsultaApi from "./ConsultaApi";
import Chat from "./Chat";
import Comparacion from "./Comparacion";
import Carrito from "./Carrito";

export default function Home() {
  return (
    <div>
      <Mensaje />
      <Titulo />
      <Contador />
      <Temporizador />
      <DetectorVentana />
      <ConsultaApi />
      <Auth />
      <Chat />
      <Comparacion />
      <Carrito />
    </div>
  );
}
