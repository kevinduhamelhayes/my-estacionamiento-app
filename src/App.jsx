import Navbar from "./components/Navbar"
import Modal from './components/Modal'
import Grid from "./components/Grid"
import { useState } from "react"

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [place, setPlace] = useState(0)
  const [parkedCars, setParkedCars] = useState([])

  const toggleModal = (newPlace) => {
    setIsOpen(!isOpen)
    setPlace(newPlace)
  }
  console.log(parkedCars)
  return (
    <main className="w-full h-screen flex flex-col bg-slate-900">
      <Navbar toggleInfo={toggleModal} />
      {isOpen && 
      <Modal 
      parkedCars={parkedCars} 
      place={place} 
      toggleModal={toggleModal} 
      setParkedCars={setParkedCars} />}
      <div className="p-10">
        <h1 className="text-4xl mb-6 text-yellow-400 text-center">
          Parking Devink
        </h1>
        <Grid parkedCars={parkedCars} toggleModal={toggleModal} parkedCars={parkedCars} />
      </div>
    </main>
  )
}

export default App
