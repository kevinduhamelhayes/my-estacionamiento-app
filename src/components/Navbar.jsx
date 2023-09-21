import React from 'react';
import ModalInfo from "./ModalInfo";
const Navbar = () => {
  return (
    <nav className="w-full bg-yellow-400 h-24 px-8 flex text-white items-center justify-between">
      <figure>
        <img 
          className="w-[250px] h-[100px] object-cover"
          src="/logo.png" 
          alt="logo"
        />
      </figure>
      <ModalInfo/>
    </nav>
  )
}

export default Navbar;
