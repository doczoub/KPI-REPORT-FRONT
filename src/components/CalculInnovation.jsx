import React from 'react'
import { useState } from 'react'
import NavBar from './NavBar'
import Input from './Input'

const CalculInnovation = () => {

  const [count, setCount] = useState(null);
  const [count2, setCount2] = useState(null);

  const handleaddNumber = (e) => {
    setCount(e.target.value);
    console.log(count);
  };

  const handleaddNumber2 = (e) => {
    setCount2(e.target.value);
    console.log(count2);
  };
  return (
    <div>
            {/* <NavBar /> */}
      <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-600">Dashboard</h1>
            </div>
      </header>
      <div className='bg-slate-300 h-screen'>
      <div className='flex items-center gap-6 mx-auto max-w-4xl '>
        <form className='bg-white shadow-md rounded-3xl p-8 w-96 h-96 mt-40'>
          <h1 className='text-center text-xl font-medium '>Indice</h1>
          <label className="block mb-2 text-sm font-medium text-gray-900 ">Periode</label>
          <select id="small" className="block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500">
            <option selected>choisir une periode</option>
            <option value="US">jan-mars</option>
            <option value="CA">avr-juin</option>
            <option value="FR">juil-sept</option>
            <option value="DE">nov-dec</option>
          </select>

          <label className="block mb-2 text-sm font-medium text-gray-900 ">Cible</label>
          <select id="small" className="block p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500">
            <option selected>Choisir la cible</option>
            <option value="US">100</option>
            <option value="CA">90</option>
            <option value="FR">85</option>
          </select>

          <div>
            <label  className="block mb-2 text-sm font-medium text-gray-900">Resultat</label>
            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required />
          </div>
        </form>

        <form className='bg-white shadow-md rounded-3xl p-8 w-96 h-96 mt-40 '>
          <h1 className='text-center text-xl font-medium '>Formule</h1>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900">Total Projets</label>
            <input
              onChange={(e) => handleaddNumber(e)}
              value={count ? count : ""}
              type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required />
          </div>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">Projets Realisés</label>
            <input 
                onChange={(e) => handleaddNumber2(e)}
                value={count2 ? count2 : ""}
                type="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required />
          </div>
          <div>
            <Input values={count ? count : ""} values2={count2 ? count2 : ""} />
          </div>
        </form>
      </div>
      </div>
    </div>
  )
}

export default CalculInnovation