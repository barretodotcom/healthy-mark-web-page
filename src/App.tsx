import { useState } from "react";
import { useRoutes } from "react-router-dom";
import Container from "./components/layout/Container";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Widget from "./components/pages/components-pages/Widget";
import Funcionabilidades from "./components/pages/Funcionabilidades";
import Home from "./components/pages/Home";
import AuthContext from "./contexts/AuthContext";
/*  MdOutlineFeedback  */

function App() {

  const [token,setToken] = useState<string | undefined>()
  const [userId,setUserId] = useState<string | undefined>()
  const setTokenStorage = (token: string, userId: string) => {
    localStorage.setItem("token", token)
    localStorage.setItem("userId",userId)
    setToken(token)
    setUserId(userId)
  }
  return (
    <div className="App overflow-x-hidden">
      <Header setUserId = {setUserId} setToken = {setToken} token={token} />
          <Container setUserId = {setUserId} setToken = {setToken} token={token} />
      <Footer />
    </div>
  );
}

export default App;
