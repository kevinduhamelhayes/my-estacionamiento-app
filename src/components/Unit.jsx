import { useState } from "react"
import Modal from "./Modal"  // Asegúrate de importar el modal desde la ubicación correcta

function Unit() {
  const [isParked, setIsParked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false) // Nuevo estado para controlar el modal

  const handleUnitClick = () => {
    setIsParked(!isParked)
    setIsModalOpen(true) // Abre el modal al hacer clic en la unidad
  }

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen) // Cambia el estado del modal
  }

  return (
    <div
      className="border-4 grid place-content-center border-dashed border-yellow-300 rounded-md w-24 h-16 relative cursor-pointer bg-slate-300"
      onClick={handleUnitClick}
    >
      {isParked && (
        <>
          <figure className="w-12 h-22">
            <img
              src="./public/autito3.png"
              alt="car"
              className="w-full h-full rotate-90 rounded-md object-fill"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </figure>
          {isHovered && (
            <div className=" absolute top-14 -left-10 p-2 w-40 text-center bg-white border-2 rounded-lg shadow z-20 border-slate-950">
              <div className="absolute -top-1 right-20 w-2 h-2 rotate-45 -z-10 bg-white border-t-2 border-slate-950 border-l-2"></div>
              <p className="z-20">Plate: XYZ-123</p>
              <p className="z-20">Name: John Doe</p>
              <p className="z-20">Time: 12:34 PM</p>
            </div>
          )}
        </>
      )}

      {isModalOpen && <Modal toggleModal={toggleModal} />} {/* Renderiza el modal si isModalOpen es true */}
    </div>
  )
}

export default Unit

