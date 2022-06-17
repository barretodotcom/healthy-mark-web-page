import { IoIosArrowDown } from "react-icons/io";
import { useState } from "react";
import "../../index.css";

export default function Home() {
  const styles =
    "w-80 py-3 bg-healty-cyan mx-5 my-5 rounded-md flex flex-wrap text-center items-center justify-center hover:bg-healty-cyan-hover";
  return (
    <div className="w-full h-screen body-home flex items-center justify-center">
      <div className="flex justify-center">
        <div className="max-w-prose flex bg h-96   rounded-xl">
          <h1 className=" text-5xl text-white hover:text-black duration-2 group">
            Bem vindo(a) ao Healthy Mark.
          </h1>
          <div className="flex flex-wrap max-w-xs">
            <div className={`${styles} back-acord-trans group`}>
              <p className="mx-5">Primeiros passos</p>
              <div className="w-16"></div>
              <IoIosArrowDown className="" />
              <p
                className={`max-h-0 hidden group-hover:max-h-full group-hover:inline py-3 transition-all`}
              >
                Comece criando sua conta com seu nome, email e senha.
              </p>
            </div>

            <div className={`${styles} back-acord-trans group`}>
              <p className="mx-5">Benefícios</p>
              <div className="mx-14"></div>
              <IoIosArrowDown />
              <p
                className={`ax-h-0 hidden group-hover:max-h-full group-hover:inline p-3`}
              >
                Fácil Acessibilidade, interface intuitiva para todas as idades,
                sua saúde cada vez mais perto de você.
              </p>
            </div>

            <div className={`${styles} back-acord-trans group`}>
              <p className="mx-5">Informacional</p>
              <div className="mx-11"></div>
              <IoIosArrowDown />
              <p
                className={` ax-h-0 hidden  group-hover:max-h-full group-hover:inline `}
              >
                Em todos os lugares do Brasil, em parceria com o governo
                federal.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
