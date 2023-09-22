import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import logo from '../Assets/images/Logo-QUIPUX.png'
import imgacceuil from '../Assets/images/acce.png'
import { NavLink } from 'react-router-dom'

export default function Acceuil() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gradient-to-r from-[#004225] to-[#FFCF9D] min-h-screen flex flex-col">
      <nav className="bg-[#FFB000]">
        <div className="container mx-auto flex items-center justify-between py-2">
          <a href="#" className="text-[#F5F5DC] text-2xl font-semibold">
            <img src={logo} alt="" className="h-16 w-auto" />
          </a>
          <div className="hidden md:flex space-x-6">
            <NavLink to="/" className="text-[#F5F5DC] hover:text-gray-300">Accueil</NavLink>
            <NavLink to="/about" className="text-[#F5F5DC] hover:text-gray-300">À Propos</NavLink>
            <NavLink to="/contact" className="text-[#F5F5DC] hover:text-gray-300">Contact</NavLink>
          </div>
          <button
            className="md:hidden text-[#F5F5DC] hover:text-gray-300"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
          </button>
        </div>
      </nav>
      <div className="container mx-auto text-center md:text-left px-6 flex-grow">
        <h1 className="text-[#F5F5DC] text-4xl md:text-6xl text-center font-bold mt-10 mb-6">KPI Report</h1>
        <div className="md:flex items-center">
          <div className="md:w-1/2">
            <img src={imgacceuil} alt="Hero" className="object-cover w-full h-full" />
          </div>
          <div className="md:w-1/2 md:pl-10 md:pr-6 mt-6 md:mt-0">
            <h2 className="text-[#F5F5DC] text-3xl md:text-4xl font-semibold mb-4">Plateforme de Gestion des Indicateurs de Quipux Afrique</h2>
            <p className="text-[#F5F5DC] text-lg mb-6"></p>
            <NavLink
              to="/login"
              className="bg-[#FFB000] text-[#004225] py-3 px-8 rounded-full text-lg font-semibold hover:bg-[#FFB000] transition duration-300 ease-in-out"
            >
              Connexion
            </NavLink>
          </div>
        </div>
      </div>
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFB000] py-2">
          <div className="container mx-auto text-[#F5F5DC] text-center">
            <NavLink to="/" className="block py-2 hover:text-gray-300">Accueil</NavLink>
            <NavLink to="/about" className="block py-2 hover:text-gray-300">À Propos</NavLink>
            <NavLink to="/contact" className="block py-2 hover:text-gray-300">Contact</NavLink>
          </div>
        </div>
      )}
    </div>
  )
}
