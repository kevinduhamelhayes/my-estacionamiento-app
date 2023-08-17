// Grid.jsx

import Unit from "./Unit"

function Grid({ numUnits = 25 }) {
  return (
    <div className="grid grid-cols-3 min-w-[360px]  md:grid-cols-5 lg:grid-cols-8 gap-4 bg-slate-700 p-4">
      {Array(numUnits)
        .fill(null)
        .map((_, index) => (
          <Unit key={index} />
        ))}
    </div>
  )
}

export default Grid
