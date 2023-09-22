import React from 'react'
import {useNavigate} from 'react-router-dom'

function Employee({employee, deleteEmployee}) {
     const navigate = useNavigate();

     const editeEmployee = (e, id)=>{
        e.preventDefault();
        navigate(`updateEmployee/${id}`);

     }
     console.log(employee.planAction);
  return (

<tr key ={employee.id}>
                        <td className=' text-left py-4 px-6 whitespace-nowrap'> 
                       <div className="text-sm text-gray-500"> {employee.periode} </div>
                       </td>
                       <td>
                       
                          <td className="text-left py-4 px-6  font-medium text-sm ">
                    <div className="text-sm text-gray-900 font-semibold"></div>
                  </td>
            
                          </td>
                        <td className=' text-left py-4 px-6 whitespace-nowrap'> 
                       <div className="text-sm text-gray-500"> {employee.cause}</div>
                       </td>
                       <td className=' text-left py-4 px-6 whitespace-nowrap'> 
                       <div className="text-sm text-gray-500"> {employee.service}</div>
                       </td>
                        <td className=' text-left py-4 px-6 whitespace-nowrap font-medium text-sm'> 
                       <a  onClick={(e,id)=> editeEmployee(e,employee.id)}
                        className=' text-indigo-600 hover:text-indigo-800  px-2 hover:cursor-pointer'>Edit</a>
                       <a 
                       onClick={(e,id)=> deleteEmployee(e,employee.id)}
                        className=' text-red-600 hover:text-red-800 hover:cursor-pointer '>Delete</a>
                       </td>
                    </tr>
  )
}

export default Employee