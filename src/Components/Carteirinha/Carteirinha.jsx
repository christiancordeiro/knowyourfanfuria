import Infos from "./Infos"
import idCard from "../../assets/id-card.svg"
import { use, useContext, useEffect, useState } from "react"
import { UserContext } from "../../UserContext"
import Loading from "./Loading"

const Carteirinha = () => {
  const { dados, comment, posts, upvoted } = useContext(UserContext)
  const [nivel, setNivel] = useState("Aguarde, calculando...")

  useEffect(() => {
    if (
      typeof comment !== "number" ||
      typeof posts !== "number" ||
      typeof upvoted !== "number"
    ) {
      return
    }

    const media = (comment + posts + upvoted) / 3
    let result = ""

    if (media < 0) {
      result = "Novo fã"
    } else if (media <= 5) {
      result = "Fã iniciante"
    } else if (media < 10) {
      result = "Fã intermediário"
    } else if (media < 20) {
      result = "Fã ultra"
    } else {
      result = "Fã lendário"
    }

    setNivel(result)
  }, [comment, posts, upvoted])

  return (
    <div className="2xl: max-w-2xl 2xl:mx-auto sm:p-4 py-12">
      <div className="bg-[#5B5B5B] bg-opacity-[7%] backdrop-blur-lg border-[0.2px] border-[#F9F9F9] border-opacity-20 rounded-lg text-center">
        <div className="flex justify-center items-center gap-4 px-12 pt-12 pb-10">
          <img
            src={idCard}
            alt="Id card icon"
            className="sm:w-12 sm:h-12 w-10 h-10 invert hue-rotate-90"
          />
          <h1 className="font-roboto font-bold sm:text-4xl text-2xl text-[#F8F8F8]">
            Carteirinha de fã
          </h1>
        </div>

        {dados ? (
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-8 sm:px-16 px-24">
            <div className="w-40 h-40 sm:w-56 sm:h-56 flex justify-center items-center rounded-full border-2 border-[#F9F9F9] z-10 relative overflow-hidden">
              <img
                src={dados.icon}
                alt="Avatar"
                className=" absolute -z-10 inset-0 w-full h-full object-cover"
              />
            </div>
            <div>
              <Infos info1="username" info2={dados.displayName} />
              <Infos info1="descricao" info2={dados.description} />
              <Infos info1="cake day" info2={dados.cakeDay} />
            </div>
          </div>
        ) : (
          <div className="text-center text-white">
            Carregando dados do usuário...
          </div>
        )}
        <div>
          <h3 className="font-roboto font-medium text-3xl pt-8 pb-6 text-[#DEDEDE]">
            Interações Fúria:
          </h3>
          <div className="flex items-center justify-between px-20 sm:px-24">
            {typeof posts === "number" ? (
              <Infos info1="Posts" info2={posts} />
            ) : (
              <Loading />
            )}
            {typeof comment === "number" ? (
              <Infos info1="Comentários" info2={comment} />
            ) : (
              <Loading />
            )}
            {typeof upvoted === "number" ? (
              <Infos info1="Upvoted" info2={upvoted} />
            ) : (
              <Loading />
            )}
          </div>
          <h2 className="font-roboto font-extrabold text-3xl py-10 text-[#EDEDED]">
            Nível de fã: {nivel}
          </h2>
        </div>
      </div>
    </div>
  )
}

export default Carteirinha
