import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const SuiviComplet = () => {
    const [calcul, setCalcul] = useState([]);
    const [loading, setLoading] = useState(true);
    const showAllData = useSelector((state) => state.AllDatas)
    console.log("the user suivi", showAllData);
    
   const alldata= JSON.parse( localStorage.getItem('AllCalcul'))

  //  pagination
const [currentPage,setCurrentPage]=useState(1)
const recordsPerPage=5;
const lastIndex= currentPage* recordsPerPage;
const firstIndex= lastIndex- recordsPerPage;
const records = showAllData.datas.slice(firstIndex,lastIndex);
const npage= Math.ceil(showAllData.datas.length / recordsPerPage)
const numbers = [...Array(npage + 1).keys()].slice(1)
  

  return (
    <>
      <div className='mt-6 flex flex-col  break-words w-full mx-8 '>
        <div className="flex justify-center">
  <div className="block p-6 rounded-lg border mb-2 shadow-lg bg-white w-full">
    <div className='py-3 px-6 border-b text-gray-900 border-gray-300'>
  <h1 className='text-2xl font-semibold mb-2 pb-2' > Suivi des indicateurs</h1>
  </div>
  <div className="flex flex-col">
  <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div className="overflow-hidden">
      {showAllData.loading && <div> loading... </div>}
      {!showAllData.loading && showAllData.error ? <div>Error:{showAllData.error} </div> :null}
        <table className="min-w-full">
          <thead className="border-b bg-[#121127] ">
            <tr>
              <th scope="col" className="text-sm   font-semibold text-white  px-6 py-2 text-left">
                suivi
              </th>
              <th scope="col" className="  text-sm font-semibold text-white  px-6 py-2 text-left">
                efficacite
              </th>
              <th scope="col" className="  text-sm font-semibold text-white  px-6 py-2 text-left">
              JUSTIFICATION EFFICACITE
              </th>
              <th scope="col" className="  text-sm font-semibold text-white  px-6 py-2 text-left">
              GENERE UN IDEE D'AMELIORATION
              </th>
              <th scope="col" className="  text-sm font-semibold text-white  px-6 py-2 text-left">
              IDENTIFIANT DE D'IDEE D'AMELIORATION
              </th>
            </tr>
          </thead>
          {!showAllData.loading && showAllData.datas.length ? (
        
            <tbody className=''>
            { records.map((currentCalcul)=>( 
            <tr className="border-b" key={currentCalcul.id}>
              <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
                {currentCalcul.suivi}
                </td>
              <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
            {currentCalcul.efficacite}
              </td>
              <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
            {currentCalcul.justificationEfficacite}
              </td>
              <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
            {currentCalcul.genereIdeeAmelioration}
              </td>
              <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
            {currentCalcul.identifiantIdeeAmelioration}
              </td>
            </tr>
            ))}
          </tbody>
          ):null}
        </table>
        <nav className=' mt-8'>
            <ul className='inline-flex -space-x-px'>
                <li>
                    <a className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 " onClick={prePage}>
                        prev
                    </a>
                </li>
                {
                numbers.map((n,i)=>(
                    <li className={`${currentPage=== n ? 'active' : ''}`} key={i}>
                        <a href="#" className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700" onClick={()=>changeCPage(n)}>{n}</a>
                    </li>
                ))    
                }
                    <li>
                    <a href="#" className="px-3 py-2 ml-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700" onClick={nextPage}>
                        Next
                    </a>
                </li>
            </ul>
        </nav>
      </div>
    </div>
  </div>
</div>
  </div>
</div>
    </div>
    </>
  )

  function prePage(){
    if(currentPage !==1){
        setCurrentPage(currentPage-1)
    }
  }
  function changeCPage(id){
    setCurrentPage(id)

  }
  function nextPage(){
    if(currentPage !== npage){
        setCurrentPage(currentPage+1)
    }

  }
}

export default SuiviComplet
