import React, { memo } from 'react'
import { act } from 'react-dom/test-utils';
import { useNavigate, useParams } from 'react-router-dom';

const Calcultb = ({calcul,deleteCalcul,index}) => {
  console.log("les calculs",calcul);
const navigate =useNavigate()
  
const param =useParams()
const id1 = param.id;

  const edithCalcul = (e, id)=>{
    id = calcul.id
    e.preventDefault();
    navigate(`updateCalcul/${id}`);
 }
  const suiviCalcul = (e, id)=>{
    id = calcul.id
    e.preventDefault();
    navigate(`${id}`);
 }

  return (
    <tr className= {`${index%2===0?'bg-gray-100':'bg-white'} border-b`}  key={calcul.id}>
               
                <td  className="  text-left py-4 px-6 whitespace-nowrap  text-xs">
                <div className="text-xs  text-gray-900 ">{calcul.periode}</div>
                </td>
                <td className="text-left py-4 px-6 whitespace-nowrap  text-xs">
                <div className="text-xs text-gray-900 ">{calcul.resultatObtenu}%</div>
                </td>
                <td className="text-left py-4 px-6 whitespace-nowrap  text-xs">
                <div className="text-xs text-gray-900 "> {calcul.responsableAnalyse}</div>
                </td>
                <td className="text-left py-4 px-6 whitespace-nowrap  text-xs">
                <div className="text-xs text-gray-900 "> {calcul.responsableCalcul}</div>
                </td>
                <td className="text-left py-4 px-6 whitespace-nowrap  text-xs">
                <div className="text-xs text-gray-900 ">{calcul.cause}</div>
                </td>
                <td className="text-left py-4 px-6 whitespace-nowrap  text-xs">
                <div className="text-xs text-gray-900 ">{calcul.analyseCause}</div>
                </td>
                <td className="text-left py-4 px-6 whitespace-nowrap  text-xs">
                <div className="text-xs text-gray-900 ">{calcul.typeAction}</div>
                </td>
                  <td className=" text-left py-4 px-6 whitespace-nowrap  text-xs ">
                  {calcul.planAction?.length > 0 ? (
        calcul.planAction?.map(actionItem => (
          <div key={actionItem.id} className="text-xs text-gray-900 ">
            - {actionItem.action}
          </div>
        ))
      ) : (
        <div className="text-xs text-gray-500 "> Aucun plan d'action defini</div>
      )}
                    </td>
                {/* <td className=" text-left py-4 px-6 whitespace-nowrap  text-xs ">
                <div className="text-xs text-gray-900 ">{calcul.etat}</div>
                </td> */}
                {/* <td className=" text-left py-4 px-6 whitespace-nowrap  text-xs ">
                <div className="text-xs text-gray-900 ">{calcul.suivi}</div>
                </td> */}
                {/* <td className=" text-left py-4 px-6 whitespace-nowrap  text-xs ">
                <div className="text-xs text-gray-900 ">{calcul.efficacite}</div>
                </td> */}
                {/* <td className=" text-left py-4 px-6 whitespace-nowrap  text-xs ">
                <div className="text-xs text-gray-900 ">{calcul.justificationEfficacite}</div>
                </td> */}
                {/* <td className=" text-left py-4 px-6 whitespace-nowrap  text-xs ">
                <div className="text-xs text-gray-900 ">{calcul.genereIdeeAmelioration}</div>
                </td> */}
                {/* <td className=" text-left py-4 px-6 whitespace-nowrap  text-xs">
                <div className="text-xs  text-gray-900 ">{calcul.identifiantIdeeAmelioration}</div>
                </td> */}
                <td className=' text-left py-4 px-6 whitespace-nowrap  text-xs'> 
                       <a onClick={edithCalcul}
                        className=' text-indigo-600 hover:text-indigo-800  px-2 hover:cursor-pointer'>
                          modifier</a>
                       <a onClick={suiviCalcul}
                        className=' text-red-600 hover:text-red-800 hover:cursor-pointer '>
                          faire un suivie</a>
                       </td>
            </tr>
        //     {/* <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-1600">
        //    </tr> */}
           
  )
}

export default memo(Calcultb)
