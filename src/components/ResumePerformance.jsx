import React, { useEffect } from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IndicateurData } from '../features/IndicateurSlice ';
const ResumePerformance = () => {
    const [calcul, setCalcul]= useState([]);
    const [currentPage, setCurrentPage]= useState(1);
    const [calculPerPage, setCalculPerpage]= useState(3);
    const [loading, setLoading]= useState(true);
  
    const showIndicateur=useSelector((state)=>state.indicateurData)
    console.log("les indicateur calcul.... :", showIndicateur);

    if (showIndicateur && showIndicateur.datas) {
    for (let index = 0; index < showIndicateur.datas.length; index++) {
      const calcul = showIndicateur.datas[index];
      for (let i = 0; i < calcul.calculs.length; i++) {
        console.log("les periodes....", calcul.calculs[i].periode);
      }
      }
}

    
  
  

    const allindic= JSON.parse( localStorage.getItem('indicateur'))

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(IndicateurData(allindic))
   }, [])
  return (
    <div>
       <div className='mt-6 '>
      
      <div className="block p-6 rounded-lg border mb-2 shadow-lg bg-white ">
        <div className='py-3 px-6 border-b text-gray-900 border-gray-300'>
      <h1 className='text-2xl font-semibold mb-2 pb-2' > Resumé de la Performance des indicateurs</h1>
      </div>
      <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
          <div className="overflow-hidden">
          {showIndicateur.loading && <div> loading... </div>}
          {!showIndicateur.loading && showIndicateur.error ? <div>Error:{showIndicateur.error} </div> :null}
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
                  <th scope="col" className="  text-sm font-semibold text-white  px-6 py-2 text-left">
                    Periode
                  </th>
                  <th scope="col" className="  text-sm font-semibold text-white  px-6 py-2 text-left">
                    Resultat Obtenu
                  </th>
                </tr>
              </thead>
              {!showIndicateur.loading && showIndicateur.datas.length ? (
            
                <tbody className=''>
                { showIndicateur.datas.map((currentCalcul)=>( 
                <tr className="border-b" key={currentCalcul.id}>
                  <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
                    {currentCalcul.nomMesure}
                    </td>
                  <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
                {currentCalcul.norme}
                  </td>
                  <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
                {currentCalcul.typeNorme}
                  </td>
                  <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
                {currentCalcul.calculs.periode}
                  </td>
                  <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
                {currentCalcul.calculs.resultatObtenu}
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
    </div>
  )
}

export default ResumePerformance
