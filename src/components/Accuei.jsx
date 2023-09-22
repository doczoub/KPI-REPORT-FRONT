import React from 'react';
import pho from '../Assets/images/Removal-999.png';
import logo from '../Assets/images/Logo-QUIPUX.png'

function Accueil() {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-500 h-screen flex flex-col">
            <nav className=" bg-emerald-400">
        <div className="container mx-auto flex items-center justify-between py-4">
          <a href="#" className="text-white text-2xl font-semibold">
            <img src={logo} alt="" className="h-16 w-auto"/>
          </a>
          <ul className="flex space-x-6">
            <li><a href="#" className="text-white hover:text-gray-300">Home</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">About</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Services</a></li>
            <li><a href="#" className="text-white hover:text-gray-300">Contact</a></li>
          </ul>
        </div>
      </nav>
      <div className="container mx-auto text-center md:text-left px-6 flex-grow">
        <h1 className="text-white text-4xl md:text-6xl text-center font-bold mt-10 mb-6">KPI Report</h1>
        <div className="md:flex items-center">
          <div className="md:w-1/2">
            <img src={pho} alt="Hero" className="object-cover w-full h-full rounded-lg shadow-md" />
          </div>
          <div className="md:w-1/2 md:pl-10 md:pr-6 mt-6 md:mt-0">
            <h2 className="text-white text-3xl md:text-4xl font-semibold mb-4">Plateforme de Gestion des Indicateurs de Quipux Afrique</h2>
            <p className="text-white text-lg mb-6">Transforming data into meaningful insights for a brighter future.</p>
            <a href="#" className="bg-purple-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-purple-600 transition duration-300 ease-in-out">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Accueil;
