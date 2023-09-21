import { useRef, useEffect } from "react"
import { useFormik } from "formik"

const Modal1 = ({ toggleModal, place, setParkedCars, parkedCars }) => {
  const ref = useRef()

  const closeModalOnOutsideClick = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      toggleModal()
    }
  }
  useEffect(() => {
    document.addEventListener("mousedown", closeModalOnOutsideClick)

    return () => {
      document.removeEventListener("mousedown", closeModalOnOutsideClick)
    }
  }, [])

  const formik = useFormik({
    initialValues: {
      place,
      patente: "",
      tiempo: "",
      abonado: false,
    },
    onSubmit: (values) => {
      setParkedCars([...parkedCars, values])
      toggleModal()
    },
  })

  return (
    <aside className="absolute backdrop-blur-sm top-0 left-0 w-full h-full grid place-content-center z-10">
      <section
        ref={ref}
        className="max-w-[600px] p-4 rounded-xl  bg-slate-800 border-yellow-500 border-2 border-dashed "
      >
        <h3 className="text-white">Completa los datos del nuevo cliente en nuestro parking nro {place}:</h3>
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col h-full mt-4"
        >
          <input
            name="patente"
            type="text"
            id="patente"
            onChange={formik.handleChange}
            value={formik.values.patente}
            placeholder="Patente"
            className="rounded-xl p-1 my-2 border-yellow-500 border-2 border-dashed"
          />
          <input
            type="text"
            name="tiempo"
            id="tiempo"
            onChange={formik.handleChange}
            value={formik.values.tiempo}
            placeholder="Tiempo"
            className="rounded-xl p-1 my-2 border-yellow-500 border-2 border-dashed"
          />
          <div className="my-2 w-full flex justify-between items-center">
  <p className="text-white">Abonado?</p>
  <input
    type="checkbox"
    id="abonado"
    onChange={formik.handleChange}
    checked={formik.values.abonado}
    name="abonado"
    className="p-1 border-yellow-500 border-2 border-dashed"
  />
</div>

          <button
            type="submit"
            className="bg-yellow-500 w-full py-2 rounded-xl text-white"
          >
            Submit
          </button>
        </form>
      </section>
    </aside>
  )
}

export default Modal1
