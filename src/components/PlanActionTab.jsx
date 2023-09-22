import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userPlan } from '../features/planSlice';
import { CalculIndicateurData } from '../features/CalculByIndicateurSlice';
const PlanActionTab = () => {
  const showUserPlanAction = useSelector((state)=>state.userPlans)
  console.log("plan d'action :", showUserPlanAction);

  
  const showUserData = useSelector((state) => state.calculIndicateurData);

 

  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch1 = useDispatch();
  useEffect(() => {
    dispatch1(CalculIndicateurData(user.id));
  }, []);

  console.log("laclac",showUserData);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userPlan(user.id));
  }, []);

  return (
    <div className="mt-6 flex flex-col break-words w-full">
    <div className="flex justify-center">
      <div className="block py-2 rounded-lg border shadow-lg bg-white w-full">
        <h1 className="text-xl ">Suivi des plans d’actions</h1>
        <div className=" px-6 border-b text-gray-900 border-gray-300"></div>
        <div className="flex flex-col overflow-x-auto">
          <table className="min-w-full">
            <thead className="border-b bg-[#121127]">
              <tr>
                <th className="text-xs  text-white px-6 py-2 text-left">
                  Periode 
                </th>
                <th className="text-xs  text-white px-6 py-2 text-left">
                  Plan d'action
                </th>
                <th className="text-xs  text-white px-6 py-2 text-left">
                  Responsable du plan d'action
                </th>
                <th className="text-xs  text-white px-6 py-2 text-left">
                  Statut
                </th>
                <th className="text-xs  text-white px-6 py-2 text-left">
                  Date de Livraison du Plan d'action
                </th>
                <th className="text-xs  text-white px-6 py-2 text-left">
                  Suivi
                </th>
              </tr>
            </thead>
            {!showUserData.loading && showUserData.datas.length ? (
              <tbody className="">
                {showUserData.datas.map((data,index) => (
                  <tr className={`${index%2===0?'bg-gray-100':'bg-white'} border-b`} key={data.id}>
                    <td className="px-6 py-2 whitespace-nowrap text-left text-xs  text-gray-900">
                      <div className="text-xs text-gray-900 ">
                        {data.periode} {data.anneeCalcul}
                      </div>
                    </td>
                    <td className="text-xs text-gray-900  px-6 py-2 whitespace-nowrap">
                      {data.planAction && data.planAction.length > 0 ? (
                        data.planAction.map((planAction) => (
                          <div key={planAction.id}>
                            {planAction.action} 
                          </div>
                        ))
                      ) : (
                        "-"
                      )}
                    </td>
                    <td className="text-xs text-gray-900  px-6 py-2 whitespace-nowrap">
                      {data.planAction && data.planAction.length >  0 ?(
                        data.planAction.map((planAction)=>(
                          <div key={planAction.id}>

                            {planAction.responsableAction}
                          </div>
                        ))
                        ): "-"}
                    </td>
                    <td className="text-xs text-gray-900  px-6 py-2 whitespace-nowrap">
                      {data.planAction && data.planAction.length >  0 ?(
                        data.planAction.map((planAction)=>(
                          <div key={planAction.id}>

                            {planAction.etat}
                          </div>
                        ))
                        ): "-"}
                    </td>
                    <td className="text-xs text-gray-900  px-6 py-2 whitespace-nowrap">
                      {data.planAction && data.planAction.length > 0 ?(
                       data.planAction.map((planAction)=>(
                        <div key={planAction.id}>

                          {planAction.dateLivraisonPlanAction}
                        </div>
                      ))
                      ): "-"}
                    </td>
                    <td className="text-xs text-gray-900  px-6 py-2 whitespace-nowrap">
                      {data.planAction && data.planAction.length > 0 ?(
                       data.planAction.map((planAction)=>(
                        <div key={planAction.id}>

                          {planAction.suivi}
                        </div>
                      ))
                      ): "-"}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap flex items-center justify-between">
                      {}
                      </td>
                  </tr>
                ))}
              </tbody>
            ) : null}
          </table>
        </div>
      </div>
    </div>
  </div>
  

  )
}

export default memo(PlanActionTab)
