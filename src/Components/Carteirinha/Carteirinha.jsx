import Infos from "./Infos"
import idCard from "../../assets/id-card.svg"

const Carteirinha = () => {
  return (
    <div class="2xl: max-w-2xl 2xl:mx-auto sm:p-4 py-12">
      <div class="bg-[#5B5B5B] bg-opacity-[7%] backdrop-blur-lg border-[0.2px] border-[#F9F9F9] border-opacity-20 rounded-lg text-center">
        <div className="flex justify-center items-center gap-4 px-12 pt-12 pb-10">
          <img
            src={idCard}
            alt="Id card icon"
            className="sm:w-12 sm:h-12 w-10 h-10 invert hue-rotate-90"
          />
          <h1 class="font-roboto font-bold sm:text-4xl text-2xl text-[#F8F8F8]">
            Carteirinha de fã
          </h1>
        </div>

        <div class="grid sm:grid-cols-2 grid-cols-1 gap-8 sm:px-16 px-24">
          <div class="w-40 h-40 sm:w-56 sm:h-56 flex justify-center items-center bg-gray-500 rounded-full">
            <img src="" alt="" />
          </div>
          <div>
            <Infos info1="username" info2="u/NormanAthomic" />
            <Infos info1="descricao" info2="just a guy tryna get by" />
            <Infos info1="cake day" info2="aug 6, 2020" />
          </div>
        </div>
        <div>
          <h3 class="font-roboto font-medium text-3xl pt-8 pb-6 text-[#DEDEDE]">
            Interações Fúria:
          </h3>
          <div className="flex items-center justify-between px-20 sm:px-24">
            <Infos info1="Posts" info2="10" />
            <Infos info1="Upvoted" info2="30" />
            <Infos info1="Comentários" info2="20" />
          </div>
          <h2 class="font-roboto font-extrabold text-3xl py-10 text-[#EDEDED]">
            Nível de fã: ultra
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Carteirinha
