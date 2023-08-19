import Navbar from "./components/Navbar"
//import Modal from './components/Modal'
import Grid from "./components/Grid"
import { useState } from "react"
import Info from "./components/Info"

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleInfo = () => {
    setIsOpen(!isOpen)
  }
  return (
    <main className="w-full flex flex-col bg-slate-900">
      <Navbar toggleInfo={toggleInfo} />
      {isOpen && <Info toggleInfo={toggleInfo} />}
      <div className="p-10">
        <h1 className="text-4xl mb-6 text-yellow-400 text-center">
          Parking Devink
        </h1>

        <Grid />
      </div>
    </main>
  )
}

export default App
