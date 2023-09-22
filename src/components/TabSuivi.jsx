import React, { memo, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { SuiviData } from '../features/suiviSlice';

const TabSuivi = () => {

  const showSuivi=useSelector((state)=>state.CalculSuiviData)
  console.log("suiviiiiii....",showSuivi);

  const user = JSON.parse(localStorage.getItem("user"));
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(SuiviData(user.id));
  }, []);
  return (
    <>
      <div className='mt-6 flex flex-col  break-words w-full '>
        <div className="flex justify-center">
  <div className="block rounded-lg border mb-2 shadow-lg bg-white w-full">
    <div className=' py-2 px-2 border-b text-gray-900 border-gray-300'>
  <h1 className='text-lg  mb-2 pb-2' > Evaluation de l’efficacité</h1>
  </div>
  <div className="flex flex-col">
  <div className="overflow-x-auto">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
      {showSuivi.loading && <div> loading... </div>}
        <table className="min-w-full">
          <thead className="border-b bg-[#121127] ">
            <tr>
              <th scope="col" className="text-xs    text-white  tracking-wider px-6 py-2 text-left">
                Periode
              </th>
              <th scope="col" className="  text-xs  text-white  px-6 py-2 text-left">
                efficacite
              </th>
              <th scope="col" className="  text-xs  text-white  px-6 py-2 text-left">
              JUSTIFICATION EFFICACITE
              </th>
              {/* <th scope="col" className="  text-xs  text-white  px-6 py-2 text-left">
              GENERE UN IDEE D'AMELIORATION
              </th>
              <th scope="col" className="  text-xs  text-white  px-6 py-2 text-left">
              IDENTIFIANT DE D'IDEE D'AMELIORATION
              </th> */}
            </tr>
          </thead>
          {!showSuivi.loading && showSuivi.datas.length ? (
        
            <tbody className=''>
            { showSuivi.datas.map((currentSuivi,index)=>( 
            <tr className={`${index%2===0?'bg-gray-100':'bg-white'} border-b`}  key={currentSuivi.id}>
              <td className="px-6 py-2 whitespace-nowrap text-left text-xs  text-gray-900">
              <div className="text-xs text-gray-900 ">{currentSuivi.dateAction}  {currentSuivi.action}  </div>
                
                </td>
              <td className="text-xs text-gray-900  px-6 py-2 whitespace-nowrap">
            {currentSuivi.efficacite}
              </td>
              <td className="text-xs text-gray-900  px-6 py-2 whitespace-nowrap">
            {currentSuivi.justificationEfficacite}
              </td>
              {/* <td className="text-xs text-gray-900  px-6 py-2 whitespace-nowrap">
            {currentSuivi.genereIdeeAmelioration}
              </td>
              <td className="text-xs text-gray-900  px-6 py-2 whitespace-nowrap">
            {currentSuivi.identifiantIdeeAmelioration}
              </td> */}
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
    </>
  )
}

export default memo(TabSuivi)
