import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../features/authSlice';
import CalculService from '../services/CalculService';
import { DirIndicateurData } from '../features/directIndicateurSlice';
import { useParams } from 'react-router-dom';
import { ByYearData } from '../features/ByYearSlice';
import { ByPreYearData } from '../features/ByPreYearSlice';

const ResumeCard2 = () => {

  const [calcul, setCalcul] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [calculPerPage, setCalculPerpage] = useState(3);
  const [loading, setLoading] = useState(true);

  const showCalParAn=useSelector((state)=>state.parAn)
  const showCalParAnPre=useSelector((state)=>state.parAnPre)
  const showCalCible=useSelector((state)=>state.dirIndicateurData)
  
const param =useParams();
const id = param.id

  const user = JSON.parse(localStorage.getItem("user"));
  console.log("la direction :",user.direction.id);

  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(ByYearData(id))
 }, [])


  const dispatch1 = useDispatch();
  useEffect(() => {
      dispatch1(ByPreYearData(id))
 }, [])

  const dispatch2 = useDispatch();
  useEffect(() => {
      dispatch2(DirIndicateurData(id))
 }, [])

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

  const indexOfLastCalcul = currentPage * calculPerPage;
  const indexOfFirstCalcul = indexOfLastCalcul - calculPerPage;
  const revCalcul = calcul.reverse();
  const currentCalcul = revCalcul.slice(indexOfFirstCalcul, indexOfLastCalcul);


  //determiner les année
  const an = new Date();
  const annee= an.getFullYear();

  const anneePre = annee -1;

  return (
    <div className="block p-6 rounded-lg border shadow-lg bg-white">
      <div className="py-3 px-6 border-b text-gray-900 border-gray-300">
        <h1 className="text-2xl font-semibold mb-2 pb-2">Derniers Resultats Obtenu</h1>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">
              {showCalParAn.loading && <div>loading...</div>}
              {!showCalParAn.loading && showCalParAn.error ? <div>Error: {showCalParAn.error}</div> : null}
              <table className="table-auto">
                <thead>
                  <tr>
                    <th className="bg-[#121127] text-white px-4 py-2">Periode</th>
                    <th className="bg-[#121127] text-white px-4 py-2">Resultat {annee}</th>
                    <th className="bg-[#121127] text-white px-4 py-2">Resultat {anneePre}</th>
                  </tr>
                </thead>
                <tbody>
                  {!showCalParAn.loading && showCalParAn.datas.length ? (
                    showCalParAn.datas.map((currentCalcul) => (
                      <tr key={currentCalcul.id}>
                        <td className="border px-4 py-2">{currentCalcul.periode}</td>
                        <td className="border px-4 py-2">
                          {currentCalcul.resultatObtenu} %
                          <Item accompli={currentCalcul.resultatObtenu} />
                        </td>
                        {/* Placeholder for the data from showCalParAnPre.datas */}
                        <td className="border px-4 py-2">
                          {!showCalParAnPre.loading && showCalParAnPre.datas.length ? (
                            showCalParAnPre.datas.map((currentPreCalcul) => (
                              <div key={currentPreCalcul.id}>
                                {currentPreCalcul.resultatObtenu} %
                                <Item accompli={currentPreCalcul.resultatObtenu} />
                              </div>
                            ))
                          ) : (
                            <tr>
                              <td className="border px-4 py-2" colSpan="3">No data available.</td>
                            </tr>
                          )}
                        </td>
                        
                      </tr>
                    ))
                  ) : null}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ResumeCard2