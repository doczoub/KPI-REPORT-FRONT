import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userData } from '../features/authSlice';
import { DirIndicateurData } from '../features/directIndicateurSlice';

const HeaderComuns = () => {

  //   const showUserData = useSelector((state) => state.userDatas)
    
  //  const user = JSON.parse( localStorage.getItem('user'))

  //   const dispatch = useDispatch();

  //   useEffect(() => {
  //     dispatch(userData(user.id))
  //   }, [])



     
    const showdirIndicateur=useSelector((state)=>state.dirIndicateurData)
    console.log("les indicateur des users head :", showdirIndicateur);
    
  
    const user = JSON.parse(localStorage.getItem("user"));

    console.log("la direction head :",user.direction.id);

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(DirIndicateurData(user.direction.id))
   }, [])
    
  return (
    <div>
               <header className=" bg-[#ff9900] shadow sticky">
                <div className=" flex max-w-7xl py-6 justify-center ">
                    {/* {showdirIndicateur.loading && <div> loading... </div>}
      {!showdirIndicateur.loading && showdirIndicateur.error ? <div>Error:{showdirIndicateur.error} </div> :null}
      {!showdirIndicateur.loading && showdirIndicateur.datas.length ? (
          <h1 className="text-3xl font-bold text-white ml-4  ">Dashboard du Processus &nbsp;
          {showdirIndicateur.datas[0].direction.nom}
            </h1>
            ):null} */}
                </div>
            </header>
    </div>
  )
}

export default HeaderComuns
