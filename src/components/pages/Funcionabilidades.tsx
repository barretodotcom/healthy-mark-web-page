import { Md10Mp, MdCheck } from "react-icons/md";
import { GoX } from "react-icons/go";
import { MdSmsFailed } from "react-icons/md";
/* MdOutlineSportsKabaddi cara pegando no ovo do cara */
export default function Funcionabilidades() {
  const styles =
    "w-96 h-5c mx-10 my-10 card-func flex items-center justify-center rounded-xl duration-2";
  const styleUndCard = "w-72 h-80 group-hover:h-84 group-hover:w-80";
  return (
    <div className="w-screen flex ease-in bg-func min-h-screen">
      <div className="flex flex-wrap m-auto my-20 ">
        <div
          className={styles + " group flex relative transition-all flex-wrap"}
        >
          <div>
            <h1 className=" w-full absolute left-0 p-5 top-0 text-xl text-center text-white rounded-t-xl header-2cnd-card-1 ">
              Após ser feito sua consulta, é lançada sua receita médica no
              sistema.
            </h1>
          </div>

          <div className="absolute top-28">
            <div
              className={
                styleUndCard +
                " bg-blue-900  p-bott card-purple  duration-2 rounded flex flex-wrap group justify-center "
              }
            >
              <div className="w-60 bg-blue-600 h-10 my-2 rounded"></div>
              <div className="w-60 bg-blue-600 h-10 my-2 rounded"></div>
              <div className="w-60 bg-blue-600 h-10 my-2 rounded"></div>
              <div className="w-56 bg-blue-600 h-10 my-2 rounded"></div>
              <div className="w-28 button-monit-2 bg-right bg-blue-700 h-10 my-2 rounded"></div>
            </div>
          </div>
        </div>

        <div className={styles + " relative group bg-red-500"}>
          <div>
            <h1 className=" w-full absolute left-0 p-5 top-0 text-xl text-center text-white rounded-t-xl  header-2cnd-card-2">
              Agora fica mais fácil de acessar todas as suas consultas,
              facilitando seu trabalho e o do farmacêutico.
            </h1>
          </div>

          <div
            className={
              styleUndCard +
              " bg-gray-300 transition-all duration-1000 rounded-xl absolute top-36"
            }
          >
            <div className="body-home-card bg-healty-cyan max-h-96 p-5 rounded-t-2xl">
              <h1 className="text-2xl text-white ">Durateston</h1>
            </div>

            <div className="flex flex-wrap group p-5">
              <div className="w-56 h-14 flex flex-wrap rounded-xl justify-center  border-healty-cyan ">
                <div className="card-dura w-60 my-3 bg-gray-200 h-8 rounded"></div>
                <div className="card-dura w-60 my-3 bg-gray-200 h-8 rounded"></div>
                <div className="card-dura w-60 my-3 bg-gray-200 h-8 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles + " relative "}>
          <div className="header-2cnd-card-3 w-full absolute top-0 p-5 rounded-t-xl text-center">
            <h1 className="text-white text-xl">Livre-se de preocupações!</h1>
          </div>
          <div
            className={
              styleUndCard +
              " bg-gray-200 rounded-xl top-28 absolute flex flex-wrap items-center justify-center"
            }
          >
            <div className=" w-60 body-home-card h-8 rounded text-white p-1">
              Durateston
            </div>
            <div className=" w-60 body-home-card h-8 rounded text-white p-1">
              Azitromicina
            </div>
            <div className=" w-60 body-home-card h-8 rounded text-white p-1">
              Diazepan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
