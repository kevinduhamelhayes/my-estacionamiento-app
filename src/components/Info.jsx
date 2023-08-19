import { useRef, useEffect } from "react"

const Info = ({ toggleInfo, data = { patente: "Desconocido", tiempo: "Desconocido", abonado: "Desconocido" } }) => {
  // ... (resto del código)
  const ref = useRef()

  const closeInfoOnOutsideClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      toggleInfo()
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", closeInfoOnOutsideClick)

    return () => {
      document.removeEventListener("mousedown", closeInfoOnOutsideClick)
    }
  }, [])

  return (
    <aside className="fixed backdrop-blur-sm top-0 w-full grid place-content-center h-full z-10">
      <section
        ref={ref}
        className="max-w-[600px] p-4 rounded-xl  bg-slate-800 border-yellow-500 border-2 border-dashed "
      >
        <h3 className="text-white">Información de la base de datos:</h3>

        <div className="flex flex-col h-full gap-6 mt-4">
          <p className="rounded-xl p-1 border-yellow-500 border-2 border-dashed">
            {data.patente}
          </p>
          <p className="rounded-xl p-1 border-yellow-500 border-2 border-dashed">
            {data.tiempo}
          </p>
          <p className="rounded-xl p-1 border-yellow-500 border-2 border-dashed">
            {data.abonado}
          </p>
          <button
            onClick={toggleInfo}
            className="bg-yellow-500 w-full py-2 rounded-xl text-white"
          >
            Cerrar
          </button>
        </div>
      </section>
    </aside>
  )
}

export default Info
