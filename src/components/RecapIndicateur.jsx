import React from 'react'
import { useState } from 'react';
import { useSelector } from 'react-redux';

const RecapIndicateur = () => {

  const [calcul, setCalcul]= useState([]);
  const [currentPage, setCurrentPage]= useState(1);
  const [calculPerPage, setCalculPerpage]= useState(3);
  const [loading, setLoading]= useState(true);

  const showUserData=useSelector((state)=>state.userDatas)
  return (
    <div className='mt-6 '>
      
  <div className="block p-6 rounded-lg border mb-2 shadow-lg bg-white ">
    <div className='py-3 px-6 border-b text-gray-900 border-gray-300'>
  <h1 className='text-2xl font-semibold mb-2 pb-2' > Liste des indicateurs</h1>
  </div>
  <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
      {showUserData.loading && <div> loading... </div>}
      {!showUserData.loading && showUserData.error ? <div>Error:{showUserData.error} </div> :null}
        <table className="min-w-full">
          <thead className="border-b bg-[#121127] ">
            <tr>
              <th scope="col" className="text-sm   font-semibold text-white  px-6 py-2 text-left">
                Nom de la mesure
              </th>
              <th scope="col" className="  text-sm font-semibold text-white  px-6 py-2 text-left">
                Cible
              </th>
              <th scope="col" className="  text-sm font-semibold text-white  px-6 py-2 text-left">
                Frequence de Calcul
              </th>
            </tr>
          </thead>
          {!showUserData.loading && showUserData.users.length ? (
        
            <tbody className=''>
            { showUserData.users.map((currentCalcul)=>( 
            <tr className="border-b" key={currentCalcul.id}>
              <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
                {currentCalcul.codeMesure}
                </td>
              <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
            {currentCalcul.nomMesure}
              </td>
            </tr>
            ))}
          </tbody>
          ):null}
        </table>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
    
  )
}

export default RecapIndicateur
