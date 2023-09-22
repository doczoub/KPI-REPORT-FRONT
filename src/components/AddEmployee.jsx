import React from 'react'
import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import EmployeeService from '../services/EmployeeService'
import NavBar from './NavBar';

function AddEmployee() {

    
    const [employee, setEmployee]=useState({
        id :"",
        firstName :"",
        lastName :"",
        email :"",
        service :"",
    });

    const navigate = useNavigate();

    const handleChange = (e)=>{
        const value = e.target.value;
        setEmployee({...employee, [e.target.name]:value});
    }

    const saveEmployee = (e)=>{
        e.preventDefault();
        EmployeeService.saveEmployee(employee)
        .then((response) =>{
            console.log(response);
            navigate("/")
        }).catch((error)=>{
            console.log(error);
        })
    };

    const reset = (e)=>{
        e.preventDefault();
        setEmployee({
        id :"",
        firstName :"",
        lastName :"",
        email :"",
        service:"",
    });
    }
  return (
    <>
    <NavBar />
    <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8  '>
            <div className=' font-thin text-2xl tracking-wider'>
            <h1> Ajouter un employer</h1>
            </div>
            <div className="item-center justify-center h-14 w-full my-4">
                <label className=' block text-gray-600 text-sm font-normal'> Prenom</label>
                <input 
                name='firstName'
                value={employee.firstName}
                onChange ={(e)=>handleChange(e)}
                type= "text" 
                className=' h-10 w-96 border mt-2 px-2 py-2'>

                </input>
            </div>
            <div className="item-center justify-center h-14 w-full my-4">
                <label className=' block text-gray-600 text-sm font-normal'> Nom</label>
                <input 
                 name='lastName'
                 value={employee.lastName}
                 onChange ={(e)=>handleChange(e)}
                type= "text" 
                className=' h-10 w-96 border mt-2 px-2 py-2'>

                </input>
            </div>
            <div className="item-center justify-center h-14 w-full my-4">
                <label className=' block text-gray-600 text-sm font-normal'> Email</label>
                <input 
                 name='email'
                 value={employee.email}
                 onChange ={(e)=>handleChange(e)}
                type= "text" 
                className=' h-10 w-96 border mt-2 px-2 py-2'>

                </input>
            </div>
            <div className="item-center justify-center h-14 w-full my-4">
                <label className=' block text-gray-600 text-sm font-normal'> Service</label>
                <input 
                 name='service'
                 value={employee.service}
                 onChange ={(e)=>handleChange(e)}
                type= "text" 
                className=' h-10 w-96 border mt-2 px-2 py-2'>

                </input>
            </div>

            <div className="item-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <button 
            onClick={saveEmployee} 
            className=' rounded text-white font-semibold bg-green-400 px-6 hover:bg-green-700 py-2'> 
            Save
            </button>
            <button 
                onClick ={reset}
            className=' rounded text-white font-semibold bg-orange-400 px-6 hover:bg-orange-700 py-2'> 
        
            Annuler
            </button>
            </div>
        </div>
 
       </div>
 </>
  )
}

export default AddEmployee