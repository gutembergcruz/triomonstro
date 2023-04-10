/* eslint-disable @next/next/no-img-element */
import { Inter } from "next/font/google";
import { Back, Container, Luffy, Sanji, Zoro } from "./styles";
import { useState } from "react";
import { FiChevronLeft } from "react-icons/fi";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [change, setChange] = useState(0);

  return (
    <Container>
      <Zoro
        onClick={() => setChange(1)}
        className={
          change === 1 ? "on" : change === 2 ? "off" : change === 3 ? "off" : ""
        }
      >
        <img src="https://i.imgur.com/S1HwQ3B.png" alt="" />
      </Zoro>
      <Luffy
        onClick={() => setChange(2)}
        className={
          change === 1 ? "off" : change === 2 ? "on" : change === 3 ? "off" : ""
        }
      >
        <img
          src="https://pnganime.com/web/image-thumbnails/82/121-lg.png"
          alt=""
        />
      </Luffy>
      <Sanji
        onClick={() => setChange(3)}
        className={
          change === 1 ? "off" : change === 2 ? "off" : change === 3 ? "on" : ""
        }
      >
        <img
          src="https://i.pinimg.com/originals/d5/47/01/d547012cafffe451f37b493e9f91a7a6.png"
          alt=""
        />
      </Sanji>

      {change !== 0 && (
        <Back onClick={() => setChange(0)}>
          <FiChevronLeft /> Voltar
        </Back>
      )}
    </Container>
  );
}
