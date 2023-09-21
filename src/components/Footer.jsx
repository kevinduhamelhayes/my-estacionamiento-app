import React from "react"

import {
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaGithub,
  FaWhatsapp,
  FaRocket,
  FaPinterest,
  FaTwitch,
  FaYoutube,
} from "react-icons/fa"
import { IoHammer } from "react-icons/io5"


const Footer1 = () => {
  return (
    <footer className="flex flex-col min-h-[280px] w-full md:flex-col items-center space-y-10 bg-slate-900 px-20 pb-10 font-medium text-white">
      <div className="flex w-full flex-row md:flex-row md:justify-between space-y-5 md:space-y-0">
        
           {/*
           <div>
          <div className="flex flex-col justify-center items-center gap-4 m-6 pb-4">
            <div className="flex items-center space-x-2 text-2xl"> <h1> Social Media </h1></div>
           
            <div className="flex flex-row gap-12">
              <Link
                href="https://www.linkedin.com/in/kevin-duhamel-hayes-7a3b3b1b7/"
                className="text-blue-400 transition-colors duration-200 font-semibold text-4xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="#"
                className="text-purple-400 transition-colors duration-200 font-semibold text-4xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://api.whatsapp.com/send/?phone=%2B543415883040"
                className="text-green-400 transition-colors duration-200 font-semibold text-4xl"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp />
              </Link>
            </div>
            
          </div>
        </div>
*/}

        <div className="flex flex-row justify-between w-full">
          <h2 className="flex items-center space-x-2 text-2xl">
            <span>Gracias por Visitarme</span>
          </h2>
          <div className="mt-8 flex flex-col gap-8 justify-around">
            <span className="flex items-center space-x-4">
              <FaPhoneAlt />
              <span>+5493415883040</span>
            </span>
            <span className="flex items-center space-x-4">
              <FaEnvelope />
              <a
                className="hover:text-blue-400 transition-colors duration-200 font-semibold text-lg"
                href="mailto:contact@themanagers.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                kevinduhamelh@gmail.com
              </a>
            </span>
          </div>
        </div>
      </div>
      <div className="my-4 w-full border-t border-slate-500" />
      <div className="flex flex-col mt-4 w-full xl:flex-row items-center justify-between gap-8">
        <ul className="flex flex-row gap-8">
          <li className="cursor-pointer hover:underline">Servicios</li>
          <li className="hidden md:flex cursor-pointer hover:underline">
            Testimonios
          </li>
          <li className="cursor-pointer hover:underline">Portafolio</li>
          <li className="cursor-pointer hover:underline">Contacto</li>
        </ul>
        <span className="flex flex-wrap mt-8 md:mt-0">
  &copy; {new Date().getFullYear()} This website is made with ❤️ by{" "}
  <a
    className="hover:text-cyan-400 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-green-500 animate-gradient-x ml-2"
    href="https://www.devink.dev/"
    target="_blank"
    rel="noopener noreferrer"
  >
    Devink
  </a>
</span>

      </div>
    </footer>
  )
}

export default Footer1
