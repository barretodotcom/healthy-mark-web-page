import axios from "axios";
import { useEffect, useState } from "react";

interface IRecipes {
  data: any;
  index: any;
}

export default function Recipe(data: any) {

  const [pacientName, setPacientName] = useState<string>();
  const [medicineName, setMedicineName] = useState<string>();
  const [sintomas, setSintomas] = useState<string>();
  const [durationDays, setDurationDays] = useState<number>();
  const [hoursInterval, setHoursInterval] = useState<number>();
  const [day, setDay] = useState<string>();
  const [month, setMonth] = useState<string>();
  const [year, setYear] = useState<string>();
  const [recipeIndex, setRecipeIndex] = useState<any>(data.index);
  useEffect(() => {
    async function getPacientName() {
      setDay(data.data.createdAt.substring(8, 10));
      setMonth(data.data.createdAt.substring(5, 7));
      setYear(data.data.createdAt.substring(0, 4));

      axios
        .get("https://healthy-mark-api.herokuapp.com/users/findone/" + data.data.idPaciente)
        .then((e) =>{ setPacientName(e.data.name)})
        .catch((error) => console.log(error));
      axios
        .get("https://healthy-mark-api.herokuapp.com/recipes/" + data.data.idPaciente)
        .then((e) => {
          setSintomas(data.data.sintomas);
          setDurationDays(data.data.durationDays);
          setHoursInterval(data.data.hoursInterval);
        })
        .catch((e) => console.log(e));
      axios.get("https://healthy-mark-api.herokuapp.com/medicines").then((e) => {
        e.data.map((e: any) => {
          if (e.id === data.data.idMedicine) {
            setMedicineName(e.name);
          }
        });
      });
    }
    getPacientName();
  },[]);

  return (
    <div className="w-6c max-h-4.5c shadow-boa  overflow-hidden bg-gray-100 rounded-xl mx-5 my-4">
      <div className="box-border">
        <div className="bg-yellow-300 text-xl h-auto w-auto p-5 grid grid-cols-2 text-green-900 font-bold">
          <h1>Receita {(recipeIndex + 1).toString().padStart(2, "0")}</h1>
          <img
            className="w-32 mx-30"
            src="https://logodownload.org/wp-content/uploads/2019/01/governo-federal-2019-bolsonaro-logo-2.png"
          />
        </div>
        <div className="p-3">
          <p className="font-thin">Nome do Paciente</p>
          <label className="font-bold"> {pacientName}</label>
          <p className="font-thin">Sintomas</p>
          <label className="font-bold"> {sintomas}</label>
          <p className="font-thin">Nome do remédio</p>
          <label className="font-bold"> {medicineName}</label>
          <p className="font-thin">Duração do tratamento (em dias)</p>
          <label className="font-bold"> {durationDays}</label>
          <p className="font-thin">Intervalo de horas</p>
          <label className="font-bold"> {hoursInterval}</label>
          <p className="font-thin">Data da emissão</p>
          <label className="font-bold">
            {day}/{month}/{year}
          </label>
        </div>
      </div>
    </div>
  );
}
