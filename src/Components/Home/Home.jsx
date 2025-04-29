import redditIcon from "../../assets/reddit-icon.svg"

function Home() {
  return (
    <div class="max-w-4xl text-center">
      <h1 class="font-roboto font-bold text-4xl pb-8">
        🏆 Carteirinha de Fã da FURIA 🏆
      </h1>
      <p class="font-inter font-regular text-2xl pb-12">
        Quer saber o quão fã você realmente é da FURIA? Conecte sua conta do
        Reddit e deixe nosso sistema analisar seus posts, comentários e upvotes.
        Vamos gerar sua Carteirinha de Fã personalizada com seu nível de
        dedicação ao time!
      </p>
      <button class="border-[0.1rem] border-[#F9F9F9] rounded-full hover:bg-[#F9F9F9] hover:text-black transition">
        <a
          href="https://www.google.com/"
          class="flex items-center gap-4 font-inter text-2xl px-[2.625rem] py-[0.980rem]"
        >
          <img src={redditIcon} />
          Conecte-se com o Reddit
        </a>
      </button>
    </div>
  )
}

export default Home
