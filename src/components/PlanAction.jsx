import React from 'react'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import {  useNavigate, useParams } from 'react-router-dom'
import PlanActionService from '../services/PlanActionService'
const PlanAction = () => {

  const showUserPlanAction = useSelector((state) => state.userPlanActions)
    let {id} = useParams();

    const showUserData = useSelector((state) => state.userDatas);
    const idCalcul =showUserData.users[0].id
    const [inputFields, setInputFields]= useState([
        {
          id:'',
          Action:'',
         responsableAction:'',
         dateLivraisonPlanAction:'',
         idCalcul:{
          id:idCalcul
         },
         userId:{
          id:id
         }
        }
    ])

    const addFields = (e) => {
       
        let newfield = {
           Action: '',
            responsableAction: '',
            dateLivraisonPlanAction:''
           }
    setInputFields([...inputFields, newfield])
    
    }
    const navigate = useNavigate();

    const submit = (e)=>{
        e.preventDefault();
        console.log(inputFields);
          PlanActionService.savePlanAction(inputFields)
              .then((response) => {
                  console.log(response)
                  navigate("/dashInnovation")
              }).catch((error) => {
                  console.log(error)
              })
    }

    const handleFormChange =(index,event)=>{
        let data = [...inputFields];
        data[index][event.target.name] = event.target.value;
        setInputFields(data)
    }

    const removeFields = (index) => {
        let data = [...inputFields];
        data.splice(index, 1)
        setInputFields(data)
    }
  return (
    <div>
      <form onSubmit={submit}>
            {inputFields.map((input,index)=>{
                return(

         <div key={index}>
          <input  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5"
            name='Action'
            placeholder='Action'
            value={input.Action}
            onChange={event => handleFormChange(index, event)}
            />
          <input  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5"
            name='responsableAction'
            placeholder='Responsable du  plan d Action'
            value={input.responsableAction}
            onChange={event => handleFormChange(index, event)}
            />
            <div className="relative max-w-sm">
             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
    <svg aria-hidden="true" className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
  </div>
          <input datepicker  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full pl-10 p-2.5"
            name='dateLivraisonPlanAction'
            placeholder='date de Livraison du PlanAction'
            value={input.dateLivraisonPlanAction}
            onChange={event => handleFormChange(index, event)}
            />
            </div>
            <button onClick={()=>removeFields(index)}>Remove</button>
        </div>
            )
        })}
        <button onClick={addFields}>Add More..</button>
        <button onClick={submit}>Submit</button>
      </form>
    </div>
  )
}

export default PlanAction
