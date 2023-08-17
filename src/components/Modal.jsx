import { useRef, useEffect } from "react"

const Modal = ({ toggleModal }) => {
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

  return (
    <aside className="fixed backdrop-blur-sm top-0 w-full grid place-content-center h-full z-10">
      <section
        ref={ref}
        className="max-w-[600px] p-4 rounded-xl  bg-white border-blue-600 border "
      >
        <h3>Completa los datos del nuevo cliente:</h3>
        <form action="" className="flex flex-col h-full gap-6 mt-4">
          <input
            type="text"
            name="patente"
            placeholder="Patente"
            className="rounded-xl p-1 border border-blue-600"
          />
          <input
            type="text"
            name="patente"
            placeholder="Tiempo"
            className="rounded-xl p-1 border border-blue-600"
          />
          <input
            type="text"
            name="patente"
            placeholder="Abonado"
            className="rounded-xl p-1 border border-blue-600"
          />
          <button
            type="submit"
            className="bg-red-600 w-full py-2 rounded-xl text-white"
          >
            Submit
          </button>
        </form>
      </section>
    </aside>
  )
}

export default Modal
