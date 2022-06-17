import { useRoutes } from "react-router-dom";
import Funcionabilidades from "../pages/Funcionabilidades";
import Home from "../pages/Home";
import Recipes from "../pages/RecipesPage";
import Acess from "../pages/AcessPage";
import RecipesPage from "../pages/RecipesPage";
import React, { SetStateAction } from "react";


interface IAuthSession {
  setToken: React.Dispatch<SetStateAction<string | undefined>>;
  setUserId: React.Dispatch<SetStateAction<string | undefined>>;
  token: string | undefined;
}

export default function Container({setToken,setUserId,token}: IAuthSession) {
  const startRoutes = {
    path: "/",
    element: <Home />,
  };
  const acessRoutes = {
    path: "/acess",
    element: <Acess setUserId={setUserId} setToken = {setToken} token = {token}/>,
  };
  const homeRoutes = {
    path: "/home",
    element: <Home />,
  };
  const howToRoutes = {
    path: "/funcionabilidades",
    element: <Funcionabilidades />,
  };
  const myRecipes = {
    path: "/recipes",
    element: <RecipesPage />,
  };
  const routing = useRoutes([
    acessRoutes,
    startRoutes,
    homeRoutes,
    howToRoutes,
    myRecipes,
  ]);

  return <div className="max-h-auto">{routing}</div>;
}
