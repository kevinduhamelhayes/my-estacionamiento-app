import { useState } from "react"
import MiniCard from "./MiniCard"

function Unit({abonado, patente, tiempo, index, toggleModal }) {
  const [isParked, setIsParked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const handleUnitClick = () => {
    toggleModal(index)
    setIsParked(!isParked)
  }

  return (
    <div
      className="border-4 grid place-content-center border-dashed border-yellow-300 rounded-md w-24 h-16 relative cursor-pointer bg-slate-300"
      onClick={handleUnitClick}
    >
      {patente && (
        <>
          <figure className="relative w-12 h-22">
            <img
              src="./public/autito3.png"
              alt="car"
              className="w-full h-full rotate-90 rounded-md object-fill"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
          </figure>
          {index && isHovered && (
            <MiniCard abonado={abonado} patente={patente} tiempo={tiempo}/>
          
          )}
        </>
      )}
    </div>
  )
}

export default Unit
