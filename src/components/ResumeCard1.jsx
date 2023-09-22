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

const ResumeCard1 = () => {

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
    <div className='mt-6  '>

      <div className="block p-6 rounded-lg border  shadow-lg bg-white ">
        <div className='py-3 px-6 border-b text-gray-900 border-gray-300'>
          <h1 className='text-2xl font-semibold mb-2 pb-2' >Derniers Resultats Obtenu</h1>
        </div>
        <div className="flex flex-col">
          <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
              <div className="overflow-hidden">
                {showCalParAn.loading && <div> loading... </div>}
                {!showCalParAn.loading && showCalParAn.error ? <div>Error:{showCalParAn.error} </div> : null}
                <dl className="grid grid-cols-2 p-4 border rounded-lg shadow-lg ">
                {!showCalParAn.loading && showCalParAn.datas.length ? (
                  <div>
                  {showCalParAn.datas.map((currentCalcul) => (
                    <div key={currentCalcul.id} className='grid grid-cols-2'>
                  <dt>
                    <div className=" bg-[#121127] text-white"> periode</div>
                    <dd className="mr-4">{currentCalcul.periode}  </dd>
                  </dt>
                  <dt>
                  <div className=" bg-[#121127] text-white"> resultat {annee} </div>
                  <dd> {currentCalcul.resultatObtenu} %
                            <Item accompli={currentCalcul.resultatObtenu} />
                   </dd>
                  </dt>
                  </div>                                    
                    ))}
                    </div>
                    ):null}
                       {!showCalParAnPre.loading && showCalParAnPre.datas.length ? (
                  <div>
                  {showCalParAnPre.datas.map((currentCalcul) => (
                    <div key={currentCalcul.id} className='grid grid-cols-2'>
                  <dt>
                  <div className=" bg-[#121127] text-white"> resultat {anneePre}</div>
                  <dd> {currentCalcul.resultatObtenu} %
                            <Item accompli={currentCalcul.resultatObtenu} />
                   </dd>
                  </dt>
                  </div>                                    
                    ))}
                    </div>
                    ):null}
                </dl>
               
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ResumeCard1