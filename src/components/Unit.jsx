// Unit.jsx
import React, { useState } from "react"

function Unit() {
  const [isParked, setIsParked] = useState(false)

  return (
    <div
      className="border-4 border-dashed border-yellow-300 rounded-md w-24 h-16 mx-auto my-auto relative cursor-pointer bg-slate-300 "
      onClick={() => setIsParked(!isParked)}
    >
      {isParked && (
        <figure className="w-22 h-12 m-1 bg-white ">
          <img
            src="./public/autito.png"
            alt="car"
            className="w-full h-full object-cover rounded-md bg-white"
          />
        </figure>
      )}
    </div>
  )
}
export default Unit
