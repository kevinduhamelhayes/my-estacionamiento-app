import { FaReact } from "react-icons/fa"

const Navbar = ({ toggleModal = () => {} }) => {
  return (
    <nav className="w-full bg-blue-400 h-24 px-8 flex text-white items-center justify-between">
      <figure>
        <h3 className="text-2xl font-medium flex gap-2 items-center">
          <FaReact size="1.4em" />
          Logo
        </h3>
      </figure>
      <ul>
        <li>
          <button
            type="button"
            className="bg-red-600 px-4 py-2 rounded-lg font-medium"
            onClick={toggleModal}
          >
            New Car
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
