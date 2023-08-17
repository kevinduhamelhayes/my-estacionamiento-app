import Navbar from './components/Navbar'
import Modal from './components/Modal'
import Grid from './components/Grid'
import { useState, useEffect } from 'react'

const App = () => {
  const [isOpen, setIsOpen] = useState(false)
  const toggleModal = () => {
    setIsOpen(!isOpen)
  }
  return (
    <main className='w-full flex flex-col '>
      <Navbar
      toggleModal={toggleModal}
      />
      {isOpen && <Modal toggleModal={toggleModal}/>}
      <div className="p-10">
      <h1 className="text-2xl mb-6">Parking Grid</h1>
      <Grid />
    </div>
    </main>
  )
}

export default App