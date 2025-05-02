import { useContext } from "react"
import redditIcon from "../../assets/reddit-icon.svg"
import { UserContext } from "../../UserContext"

function Home() {
  const { handleRedditLogin } = useContext(UserContext)

  return (
    <div className="max-w-4xl text-center">
      <h1 className="font-roboto font-bold text-4xl pb-8">
        🏆 Carteirinha de Fã da FURIA 🏆
      </h1>
      <p className="font-inter font-regular text-2xl pb-12">
        Quer saber o quão fã você realmente é da FURIA? Conecte sua conta do
        Reddit e deixe nosso sistema analisar seus posts, comentários e upvotes.
        Vamos gerar sua Carteirinha de Fã personalizada com seu nível de
        dedicação ao time!
      </p>
      <button
        onClick={handleRedditLogin}
        className="border-[0.1rem] border-[#F9F9F9] rounded-full hover:bg-[#F9F9F9] hover:text-black transition"
      >
        <span className="flex items-center gap-4 font-inter sm:text-2xl text-1xl sm:px-[2.625rem]  px-[1.625rem] py-[0.980rem]">
          <img src={redditIcon} />
          Conecte-se com o Reddit
        </span>
      </button>
    </div>
  )
}

export default Home
