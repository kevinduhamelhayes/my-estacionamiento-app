const Navbar = ({ toggleModal = () => {} }) => {
  return (
    <nav className="w-full bg-yellow-400 h-24 px-8 flex text-white items-center justify-between">
      <figure>
        <img 
          className="w-[250px] h-[100px] object-cover"
          src="./public/logo.png" 
          alt=""
        />
      </figure>
      <ul>
        <li>
          <button
            type="button"
            className="bg-slate-900 px-4 py-2 rounded-lg font-medium m-8"
            onClick={toggleModal}
          >
            New Car
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;
