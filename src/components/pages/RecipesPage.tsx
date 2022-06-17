import axios from "axios";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../../contexts/AuthContext";
import AllRecipes from "./components-pages/AllRecipes";
import MedicineBox from "./components-pages/MedicineBox";

export default function RecipesPage() {
  const [data, setData] = useState<any>();
  const context = useContext(AuthContext);
  useEffect(() => {
    async function getData() {
      const userId = localStorage.getItem("userId");
      console.log(userId)
      if(userId){
        const recipes = await axios
          .get( api.url + "/recipes/" + userId)
          .then((e) => setData(e.data))
          .catch((e) => e);
      }
      }
    getData();
  }, []);
  return (
    <div className="bg-gray-300 flex items-center min-h-screen justify-center">
      <AllRecipes response={data} />
    </div>
  );
}
