import { Link, Navigate } from "react-router-dom";
import { GiHealthNormal } from "react-icons/gi";
import { SetStateAction, useState } from "react";

interface IAuthSession {
  setToken: React.Dispatch<SetStateAction<string | undefined>>;
  setUserId: React.Dispatch<SetStateAction<string | undefined>>;
  token: string | undefined;
}

export default function Header({setToken, token, setUserId}: IAuthSession) {

  function del(e: any){
    setToken(undefined),
    setUserId(undefined),
    localStorage.clear()
    console.log(token)
    location.reload()
    
  }
  return (
    <>
      {!localStorage.getItem("token") ? (
        <nav className="bg-white flex-wrap   w-screen sticky top-0 flex  justify-center items-center p-3 shadow-header">
          <Link to="/home">
            <GiHealthNormal className=" hover:text-blue-400 transition-colors text-blue-800 duration-700 text-7xl p-0 inline" />
          </Link>
          <div className="w-32"></div>
          <ul className="flex mx-40 flex-row justify-between text-sm box-border">
            <li className="mx-6">
              <Link to="/home">Home</Link>
            </li>
            <li className="mx-6">
              <Link to="/funcionabilidades">Como funciona?</Link>
            </li>
          </ul>
          <div className="w-32"></div>
          <Link to="/acess">
            <button className="back-log-trans transition-all duration-2">
              Login/Cadastre-se
            </button>
          </Link>
        </nav>
      ) : (
        <nav className="bg-white sticky top-0 flex  justify-center items-center p-3 shadow-header">
          <Link to="/home">
            <GiHealthNormal className=" hover:text-blue-400 transition-colors text-blue-800 duration-700 text-7xl p-0 inline" />
          </Link>
          <div className="w-32"></div>
          <ul className="flex mx-40 flex-row justify-between text-sm box-border">
            <li className="mx-6">
              <Link to="/home">Home</Link>
            </li>
            <li className="mx-6">
              <Link to="/recipes">Minhas receitas</Link>
            </li>
            <li className="mx-6">
              <Link to="/funcionabilidades">Como funciona?</Link>
            </li>
          </ul>
          <div className="w-32"></div>
          <Link to="/home">
            <button
              onClick={del}
              className="back-log-trans transition-all duration-2"
            > 
              Logout
            </button>
          </Link>
        </nav>
      )}
    </>
  );
}
