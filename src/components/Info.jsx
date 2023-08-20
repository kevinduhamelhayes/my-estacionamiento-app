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
        className="max-w-[600px] relative p-4 rounded-xl  bg-slate-900 border-yellow-500 border-2 border-dashed "
      >
        <h3 className="text-white text-2xl">Información de la base de datos:</h3>

        <div className="grid grid-cols-3 grid-rows-6 h-full gap-4 mt-4">
          <p className="rounded-xl p-1 border-yellow-500 border-2 border-dashed bg-slate-200">
            {data.patente}
          </p>
          <p className="rounded-xl p-1 border-yellow-500 border-2 border-dashed bg-slate-200">
            {data.tiempo}
          </p>
          <p className="rounded-xl p-1 border-yellow-500 border-2 border-dashed bg-slate-200">
            {data.abonado}
          </p>
          <p className="rounded-xl p-1 border-yellow-500 border-2 border-dashed bg-slate-200">
            {data.abonado}
          </p>
          <p className="rounded-xl p-1 border-yellow-500 border-2 border-dashed bg-slate-200">
            {data.abonado}
          </p>
          <p className="rounded-xl p-1 border-yellow-500 border-2 border-dashed bg-slate-200">
            {data.abonado}
          </p>
          <p className="rounded-xl p-1 border-yellow-500 border-2 border-dashed bg-slate-200">
            {data.abonado}
          </p>
          <p className="rounded-xl p-1 border-yellow-500 border-2 border-dashed bg-slate-200">
            {data.abonado}
          </p>
          <p className="rounded-xl p-1 border-yellow-500 border-2 border-dashed bg-slate-200">
            {data.abonado}
          </p>
          <p className="rounded-xl p-1 border-yellow-500 border-2 border-dashed bg-slate-200">
            {data.abonado}
          </p>
          <p className="rounded-xl p-1 border-yellow-500 border-2 border-dashed bg-slate-200">
            {data.abonado}
          </p>
          <p className="rounded-xl p-1 border-yellow-500 border-2 border-dashed bg-slate-200">
            {data.abonado}
          </p>
          <p className="rounded-xl p-1 border-yellow-500 border-2 border-dashed bg-slate-200">
            {data.abonado}
          </p>
          <p className="rounded-xl p-1 border-yellow-500 border-2 border-dashed bg-slate-200">
            {data.abonado}
          </p>
          <p className="rounded-xl p-1 border-yellow-500 border-2 border-dashed bg-slate-200">
            {data.abonado}
          </p>
          
        </div>
        <button
            onClick={toggleInfo}
            className="bg-yellow-500 px-36 py-2  absolute left-6 -bottom-5 rounded-xl text-white"
          >
            Cerrar
          </button>
      </section>
    </aside>
  )
}

export default Info
