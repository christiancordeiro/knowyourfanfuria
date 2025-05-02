import Carteirinha from "./Components/Carteirinha/Carteirinha"
import Home from "./Components/Home/Home"
import { UserStorage } from "./UserContext"
import { BrowserRouter, Route, Routes } from "react-router-dom"

function App() {
  return (
    <div>
      <BrowserRouter>
        <UserStorage>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/carteirinha" element={<Carteirinha />} />
          </Routes>
        </UserStorage>
      </BrowserRouter>
    </div>
  )
}

export default App
