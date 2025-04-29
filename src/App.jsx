import React, { useEffect, useState } from "react"
import Carteirinha from "./Components/Carteirinha/Carteirinha"
import Home from "./Components/Home/Home"

function App() {
  const [path, setPath] = useState(window.location.pathname)

  useEffect(() => {
    // Atualiza o estado do caminho sempre que o usuário navegar
    const handlePopState = () => setPath(window.location.pathname)
    window.addEventListener("popstate", handlePopState)

    return () => window.removeEventListener("popstate", handlePopState)
  }, [])

  // Renderiza o componente baseado na URL
  const renderPage = () => {
    if (path === "/carteirinha") {
      return <Carteirinha />
    }
    return <Home />
  }

  return <div>{renderPage()}</div>
}

export default App
