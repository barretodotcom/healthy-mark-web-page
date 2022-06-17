import axios, { AxiosError } from "axios";
import React, { ButtonHTMLAttributes, SetStateAction, useContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

interface IAuthSession {
  setToken: React.Dispatch<SetStateAction<string | undefined>>;
  setUserId: React.Dispatch<SetStateAction<string | undefined>>;
  token: string | undefined;
}


export default function Acess({setToken,setUserId,token}: IAuthSession) {
  const style =
    "bg-violet-600 text-center my-2 mx-32 outline-none py-2 w-11/12 text-white hover:bg-violet-600 shadow-boa rounded hover:bg-violet-500 transition-all";

  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();
  const [age, setAge] = useState<number>();
  const [errorNewUserMessage, setErrorMessage] = useState<string>();
  const [errorLoginMessage, setErrorLoginMessage] = useState<string>();
  const [sucessMessage, setSucessMessage] = useState<string>();
  const newUser = {
    name,
    email,
    password,
    age,
  };

  const [logEmail, setLogEmail] = useState<string>();
  const [logPassword, setLogPassword] = useState<string>();

  const user = {
    email: logEmail,
    password: logPassword,
  };

  async function createUser(event: React.FormEvent) {
    event.preventDefault();
    if (!name?.includes(" ")) {
      setErrorMessage("Insira seu nome e sobrenome.");
      return;
    }
    await axios
      .post(api.url + "/users", newUser)
      .then(() => {
        setSucessMessage("Usuário registrado com sucesso.")
        setTimeout(() => {
          location.reload()
        },2000)
      })
      .catch((e) => {
        setErrorMessage(e.response.data.message);
      });
  }

  async function loginUser(event: React.FormEvent) {
    event.preventDefault();
    await axios
      .post(api.url + "/session", user)
      .then((e) => {
        console.log(e)
        setToken(e.data.token);
        setUserId(e.data.user.id);
        localStorage.setItem("token",e.data.token);        
        localStorage.setItem("userId",e.data.user.id);  
        setErrorLoginMessage(undefined);
      })
      .catch((e) => {
        console.log(e)
        setToken(undefined);
        setUserId(undefined);
        localStorage.clear()
        setErrorLoginMessage(e.response.data.message);
      });
  }

  return (
    <div className="w-full bg-func min-h-screen flex flex-wrap justify-center">


        <div className="bg-white relative h-5c box-border my-40 mx-32 rounded-xl shadow-boa">
          <div className="text-center block absolute top-0 w-full p-5 text-white header-2cnd-card-1 rounded-t-xl">
            <h1 className="text-2xl inline-block">Novo por aqui? Cadastre-se!</h1>
          </div>
          <div className="my-30 text-white w-full">
            <form onSubmit={(e) => createUser(e)} className='flex flex-col items-center'>
            {errorNewUserMessage && (
              <p className="text-black bg-red-200 border-red-500 border-solid border-2 w-1/2 rounded p-2">
                {errorNewUserMessage}
              </p>
            )}
            {sucessMessage && (
              <p className="text-black bg-green-200 border-green-500 border-solid border=2 w-11/12 text-center rounded p-2"> {sucessMessage} </p>
            )}
              <input
                type="text"
                placeholder="Nome completo"
                name="name"
                className={style}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                className={style}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Senha"
                name="password"
                className={style}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                type="text"
                placeholder="Idade"
                name="age"
                className={style}
                onChange={(e) => setAge(parseInt(e.target.value))}
              />
              <button className="bg-new-med w-4/12 py-3 my-3 rounded text-white">
                Cadastrar
              </button>
            </form>
          </div>
        </div>

      <div className="bg-white relative h-5c box-border my-40 mx-32 rounded-xl shadow-boa">
        <div className="text-center block absolute top-0 w-full p-5 text-white header-2cnd-card-1 rounded-t-xl">
          <h1 className="text-2xl inline-block">Já é usuário? Faça seu login!</h1>
        </div>
        <div className="my-30 flex items-center justify-center flex-wrap">

          <form
            onSubmit={(e) => loginUser(e)}
            className="flex flex-col items-center justify-center"
            >
            {errorLoginMessage && (
              <p className="text-black text-center bg-red-200 border-red-500 border-solid border-2 w-1/2 rounded p-2">
                {errorLoginMessage}
              </p>
            )}
            <input
              onChange={(e) => setLogEmail(e.target.value)}
              type="email"
              className={style}
              placeholder="E-mail"
            />
            <input
              onChange={(e) => setLogPassword(e.target.value)}
              type="password"
              className={style}
              placeholder="Senha"
            />
            <button className="bg-new-med px-10 py-3 my-3 rounded text-white">
              Fazer login
            </button>
            {token && <Navigate to = '/recipes'/>}
          </form> 
        </div>
      </div>
    </div>
  );
}
