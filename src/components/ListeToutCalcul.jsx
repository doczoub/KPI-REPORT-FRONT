import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { IndicateurData } from '../features/IndicateurSlice ';
import { useNavigate } from 'react-router-dom';
import { userData } from '../features/authSlice';
import { DirIndicateurData } from '../features/directIndicateurSlice';

const ListeToutCalcul = () => {

    const [calcul, setCalcul]= useState([]);
    const [currentPage, setCurrentPage]= useState(1);
    const [calculPerPage, setCalculPerpage]= useState(3);
    const [loading, setLoading]= useState(true);
    const navigate =useNavigate()
  
    const showdirIndicateur=useSelector((state)=>state.dirIndicateurData)
    console.log("les indicateur des users :", showdirIndicateur);
    
  
    const user = JSON.parse(localStorage.getItem("user"));
    console.log("la direction :",user.direction.id);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(DirIndicateurData(user.direction.id))
   }, [])


   const handleTable = async(e,id)=>{
      e.preventDefault();
      // id=indiccal[0].id
      navigate(`/dashInnovation/${id}`)
    };

  return (
    <div className=' '>
      
    <div className="block  rounded-lg border mb-2 shadow-lg bg-white ">
      <div className='pt-2 px-6 border-b text-gray-900 border-gray-300'>
    <h1 className='text-xl  mb-1' > Liste des indicateurs</h1>
    </div>
    <div className="flex flex-col">
    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8 p-4">
      <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div className="overflow-hidden">
        {showdirIndicateur.loading && <div> loading... </div>}
        {!showdirIndicateur.loading && showdirIndicateur.error ? <div>Error:{showdirIndicateur.error} </div> :null}
          <table className="min-w-full">
            <thead className="border-b bg-[#121127] ">
              <tr>
                <th scope="col" className="text-xs    text-white  px-6 py-2 text-left">
                  Nom de la mesure
                </th>
                <th scope="col" className="  text-xs  text-white  px-6 py-2 text-left">
                  Cible
                </th>
                <th scope="col" className="  text-xs  text-white  px-6 py-2 text-left">
                  Frequence de Calcul
                </th>
              </tr>
            </thead>
            {!showdirIndicateur.loading && showdirIndicateur.datas.length ? (
          
              <tbody className=''>
              { showdirIndicateur.datas.map((indicateurItem,index)=>( 
              <tr className={`${index%2===0?'bg-gray-100':'bg-white'} border-b`}  key={indicateurItem.id} >
                <td className="px-6 py-2 whitespace-nowrap text-xs  text-gray-900">
                  <a href="" onClick={(e)=>handleTable(e,indicateurItem.id)}>

                  {indicateurItem.nomMesure}
                  </a>
                  </td>
                <td className="text-xs text-gray-900  px-6 py-2 whitespace-nowrap">
              {indicateurItem.norme} {indicateurItem.typeNorme}
                </td>
                <td className="text-xs text-gray-900  px-6 py-2 whitespace-nowrap">
              {indicateurItem.periodicite}
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

export default ListeToutCalcul
