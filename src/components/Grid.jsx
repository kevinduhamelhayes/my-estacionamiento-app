// Grid.jsx

import Unit from "./Unit"
import { useEffect, useState } from "react"

function Grid({parkedCars, toggleModal, }) {
  const [units , setUnits] = useState(Array(25).fill(null)) 
  useEffect(()=>{
    const newUnits = [...units];
    parkedCars.forEach((car) => {
      newUnits[car.index] = car;
    });
    setUnits(newUnits);
  },[parkedCars])
  console.log(units)
  return (
    <div className="grid grid-cols-3 min-w-[360px]  md:grid-cols-5 lg:grid-cols-8 gap-4 bg-slate-700 p-4">
      {units
        .map((_, index) => (
          <Unit key={index} index={index} toggleModal={toggleModal} />
        ))}
    </div>
  )
}

export default Grid
