import React from 'react'
import { useState,useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../features/authSlice';
import CalculService from '../services/CalculService';

const SearchByPeriod = () => {

  const [calcul, setCalcul]= useState([]);
  const [loading, setLoading]= useState(true);


  const showUserData = useSelector((state) => state.userDatas)


//   useEffect(() => {
//     const fetchData = async ()=>{
//         setLoading(true);
//         try {
//             const response = await CalculService.getCalcul();
//             setCalcul(response.data);
//             console.log(response.data);
//         } catch (error) {
//             console.log(error);
//         }
//         setLoading(false);
//     }
//     fetchData();
// }, []);
  return (
    <div  className="h-6 mt-6 flex-auto ">
         <label className="block mb-2 text-sm font-medium text-gray-900 ">Recherche</label>
      <div className='flex'>
      {showUserData.loading && <div> loading... </div>}
      {!showUserData.loading && showUserData.error ? <div>Error:{showUserData.error} </div> :null}
      {!showUserData.loading && showUserData.users.length ? (
<select id="small" className="block p-2 mb-6 w-auto text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500">
    <option defaultValue>Choisir la periode</option>
    { showUserData.users.map((calcul)=>(
              <option value={calcul.periode} key={calcul.id}>
                 {calcul.periode}
              </option>
            ))}
    </select>
      ):null}
    <button className='block bg-cyan-600 w-auto h-10 p-2 border mx-4 font-semibold text-white shadow-zinc-500
     rounded-lg'> Rechercher </button>
    </div>
    </div>
  )
}

export default SearchByPeriod