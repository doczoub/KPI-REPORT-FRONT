import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../features/authSlice';
import CalculService from '../services/CalculService';
import { DirIndicateurData } from '../features/directIndicateurSlice';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ResumeCard = () => {

  const [calculind, setCalculind] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const [calculPerPage, setCalculPerpage] = useState(3);
  const [loading, setLoading] = useState(true);

  

  // const showdirIndicateur=useSelector((state)=>state.dirIndicateurData)
  // console.log("les indicateur des users :", showdirIndicateur.datas);

  const param =useParams();
  const id = param.id

  useEffect(() => {
    const getdirIndicateur = async () => {
      try {
        const response = await axios.get(`http://172.16.2.17:8080/api/v1/indicateur/${id}`);
        console.log("API response:", response); // Log the response data
        setCalculind(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };
  
    getdirIndicateur();
  }, [id]);
  
// console.log(calculind.data.id);
  const user = JSON.parse(localStorage.getItem("user"));
  console.log("la direction :",user.direction.id);

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(DirIndicateurData(id))
 }, [dispatch, id])


  // const showUserData = useSelector((state) => state.userDatas)

  //   const dispatch=useDispatch()
  // useEffect(() => {
  //   dispatch(userData())
  //    }, [dispatch])

  function Item({ accompli, enAttente, annule, abandone }) {
    if (accompli !== "100" && accompli <= "60") {
      return <div className=" w-full">
        <div className="overflow-hidden h-2 text-xs flex rounded bg-red-200">
          <div
            style={{ width: "60%" }}
            className="shadow-none flex flex-col text-center animate-ping whitespace-nowrap text-white justify-center bg-red-500"
          ></div>
        </div>
      </div>
    }
    else if (accompli !== "100" && accompli >= "70") {
      return <div className=" w-full">
        <div className="overflow-hidden h-2 text-xs flex rounded bg-orange-200">
          <div
            style={{ width: "60%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-orange-500"
          ></div>
        </div>
      </div>
    }
    else if (accompli === "100") {
      return <div className=" w-full">
        <div className="overflow-hidden h-2 text-xs flex rounded bg-green-200">
          <div
            style={{ width: "100%" }}
            className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-green-500"
          ></div>
        </div>
      </div>
    }
  }

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

  // const indexOfLastCalcul = currentPage * calculPerPage;
  // const indexOfFirstCalcul = indexOfLastCalcul - calculPerPage;
  // const revCalcul = calculind.reverse();
  // const currentCalcul = revCalcul.slice(indexOfFirstCalcul, indexOfLastCalcul);

    //determiner les année
    const an = new Date();
    const annee= an.getFullYear();
  
    const anneePre = annee -1;

    
 let sum2022 = 0;
 let count2022 = 0;
 let sum2023 = 0;
 let count2023 = 0;
 
 // Loop through calculs and calculate sum and count for each year
 if (calculind && calculind.data && calculind.data.calculs) {
 Object.values(calculind.data.calculs).forEach((calItem) => {
   if (calItem.anneeCalcul === anneePre) {
     sum2022 += parseFloat(calItem.resultatObtenu);
     count2022++;
   }
   if (calItem.anneeCalcul === annee) {
     sum2023 += parseFloat(calItem.resultatObtenu);
     count2023++;
   }
 });
}
 
 // Calculate averages
 const average2022 = count2022 > 0 ? sum2022 / count2022 : 0;
 const average2023 = count2023 > 0 ? sum2023 / count2023 : 0;

  return (
    <div className='mt-4  '>

      <div className="block  rounded-lg border  shadow-lg bg-white ">
        <div className=' px-6 border-b text-gray-900 border-gray-300'>
          <h1 className=' text-lg  mb-2 py-2' >Derniers Resultats Obtenu</h1>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto ">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                {/* {showdirIndicateur.loading && <div> loading... </div>}
                {!showdirIndicateur.loading && showdirIndicateur.error ? <div>Error:{showdirIndicateur.error} </div> : null} */}
                <table className="min-w-full">
  <thead className="border-b bg-[#121127] ">
    <tr>
      <th scope="col" className="text-xs  text-white px-6 py-2 text-left">
        Periode
      </th>
      <th scope="col" className="text-xs  text-white px-6 py-2 text-left">
        Cible
      </th>
      <th scope="col" className="text-xs  text-white px-6 py-2 text-left">
        Resultat {anneePre}
      </th>
      <th scope="col" className="text-xs  text-white px-6 py-2 text-left">
        Resultat {annee}
      </th>
    </tr>
  </thead>
  <tbody>
  {!loading && !calculind.error ? (
   Object.values(calculind.data.calculs).map((calItem) => (
    <tr className="border-b" key={calItem.id}>
      <td className="px-6 py-2 whitespace-nowrap text-xs  text-gray-900">
        {calItem.periode}
      </td>
      <td className="px-6 py-2 whitespace-nowrap text-xs  text-gray-900">
        {calculind.data.norme}
      </td>
      <td className="px-6 py-2 whitespace-nowrap text-xs  text-gray-900">
        {calItem.anneeCalcul === anneePre ? (
          <>
            {calItem.resultatObtenu} <Item accompli={calItem.resultatObtenu} />
          </>
        ) : "-"} 
      </td>
      <td className="px-6 py-2 whitespace-nowrap text-xs  text-gray-900">
        {calItem.anneeCalcul === annee ? (
          <>
            {calItem.resultatObtenu} <Item accompli={calItem.resultatObtenu} />
          </>
        ) : "-"}
      </td>
    </tr>
  ))
  
  ): (
    <tr>
      <td colSpan="4">Loading or Error...</td>
    </tr>
  )}
  <tr className="border-b">
    <td className="px-6 py-2 whitespace-nowrap text-xs  text-gray-900"></td>
    <td className="px-6 py-2 whitespace-nowrap text-xs  text-gray-900"></td>
    <td className="px-6 py-2 whitespace-nowrap text-xs  text-gray-900">
      <span className="text-gray-900"> Moyenne {anneePre}:<span className="text-orange-500 font-bold"> {average2022.toFixed(2)}</span> </span>
    </td>
    <td className="px-6 py-2 whitespace-nowrap text-xs  text-gray-900">
    <span className="text-gray-900">Moyenne {annee}:<span className="text-orange-500 font-bold"> {average2023.toFixed(2)}</span> </span>
    </td>
  </tr>
</tbody>
</table>
</div>
{/* Add the average rows to the table */}
             
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ResumeCard