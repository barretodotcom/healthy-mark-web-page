import axios from "axios"
import { useEffect, useState } from "react"
import { GoX } from "react-icons/go"
import Timer from "./Timer"

interface MedProps {
    data:any,
}

const MedicineBox: React.FC<MedProps> = ({data}) => {

    const [time,setTime] = useState<any>()

    function deleteMed(index:number){
        axios.delete('http://localhost:5000/medicines/' + index)
        location.reload()
    }

    return(
        <div className="items-center overflow-hidden">
            
           {data.length > 0 ? data.map((e:any,index:number) => (
            <div className="bg-white mx-5 h-96 w-96 rounded-t-2xl rounded-xl flex flex-wrap my-5 shadow-boa overflow-hidden">

                <div className="relative body-home-card h-18 text-black top-0  w-full flex items-center justify-center rounded-t-2xl">
                    <h1 className="inline ">{e.name}</h1>
                    <GoX onClick={() => deleteMed(e.id)} className="text-red-600 absolute top-4 right-4 text-3xl bg-red-400 rounded cursor-pointer hover:text-4xl transition-all"/>
                </div>

                <div className="flex items-center justify-center w-full h-full relative ">
                    <div className="bg-gray-300 h-64 rounded-xl w-80 my-5 absolute top-0 flex flex-wrap">
                        <h1 className="flex items-center justify-center body-home-card-med w-full text-center rounded-t-xl">Rotina:</h1>
                        <h1 className="w-60 body-home-card h-8 my-3 mx-3 rounded text-white p-1">A cada {e.intervaloHoras} horas</h1>
                        <h1 className="w-60 body-home-card h-8 my-3 mx-3 rounded text-white p-1">Tempo até conclusão:</h1>
                        <div className="flex items-center justify-center w-full">
                            <Timer time = {e.duracao} setTime = {setTime}/>
                        </div>
                    </div>
                </div>

            </div>
           )) : <div className="flex flex-wrap w-12c text-3xl  justify-center">
                    <h1 className="inline-block ">Poxa, nenhum remédio</h1>
                    <h1>que tal melhorar a eficiência do seu tratamento?</h1> 
                </div>}


        </div>
    )
}

export default MedicineBox