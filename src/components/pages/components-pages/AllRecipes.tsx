import axios from "axios";
import { useEffect, useState } from "react";
import Recipe from "./Recipe";

export default function AllRecipes(response: any) {
  const recipes = response.response;
  return (
    <div className="flex flex-wrap-reverse flex-row-reverse w-full justify-center items-center my-20">
      {recipes &&
        recipes.map((e: any, index: number) => (
          <Recipe index={index} data={e} />
        ))}
    </div>
  );
}
