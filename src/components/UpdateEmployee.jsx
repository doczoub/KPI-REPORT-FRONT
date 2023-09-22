import React from 'react'
import { useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import { useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import NavBar from './NavBar';

function UpdateEmployee() {

    const {id}= useParams();
const navigate =useNavigate();
   

    const [employee, setEmployee]=useState({
        id :id,
        firstName :"",
        lastName :"",
        email :"",
        service :"",
    });

    const handleChange = (e)=>{
        const defaultValue = e.target.defaultValue;
        setEmployee({...employee, [e.target.name]:defaultValue});
    }
    useEffect(() => {
        const fetchData = async ()=>{
            try {
                const response = await EmployeeService.getEmployeeById(id);
                setEmployee(response.data);
                console.log("updates :",response.data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, []);
    
    const updateEmployee = (e,id)=>{
        e.preventDefault();
        EmployeeService.updateEmployee(id,employee)
        .then((response)=>{
            console.log(response);
            navigate("/employeeList");
        })
        .catch((error)=>{
            console.log(error);
        },[])
        
        
    }
  return (
    <> <NavBar />
    <div className='flex max-w-2xl mx-auto shadow border-b'>
        <div className='px-8 py-8  '>
            <div className=' font-thin text-2xl tracking-wider'>
            <h1> Modifier un employer</h1>
            </div>
            <div className="item-center justify-center h-14 w-full my-4">
                <label className=' block text-gray-600 text-sm font-normal'> Prenom</label>
                <input 
                name='firstName'
                defaultValue={employee.firstName}
                onChange ={(e)=>handleChange(e)}
                type= "text" 
                className=' h-10 w-96 border mt-2 px-2 py-2'>

                </input>
            </div>
            <div className="item-center justify-center h-14 w-full my-4">
                <label className=' block text-gray-600 text-sm font-normal'> Nom</label>
                <input 
                 name='lastName'
                 defaultValue={employee.lastName}
                 onChange ={(e)=>handleChange(e)}
                type= "text" 
                className=' h-10 w-96 border mt-2 px-2 py-2'>

                </input>
            </div>
            <div className="item-center justify-center h-14 w-full my-4">
                <label className=' block text-gray-600 text-sm font-normal'> Email</label>
                <input 
                 name='email'
                 defaultValue={employee.email}
                 onChange ={(e)=>handleChange(e)}
                type= "text" 
                className=' h-10 w-96 border mt-2 px-2 py-2'>

                </input>
            </div>

            <div className="item-center justify-center h-14 w-full my-4">
                <label className=' block text-gray-600 text-sm font-normal'> Service</label>
                <input 
                 name='service'
                 defaultValue={employee.service}
                 onChange ={(e)=>handleChange(e)}
                type= "text" 
                className=' h-10 w-96 border mt-2 px-2 py-2'>

                </input>
            </div>

            <div className="item-center justify-center h-14 w-full my-4 space-x-4 pt-4">
            <button 
            onClick={updateEmployee} 
            className=' rounded text-white font-semibold bg-green-400 px-6 hover:bg-green-700 py-2'> 
            modifier
            </button>
            <button 
            onClick={()=>navigate("/")}
            className=' rounded text-white font-semibold bg-orange-400 px-6 hover:bg-orange-600 py-2'> 
            Annuler
            </button>
            </div>
        </div>
 
       </div>
       </>
  )
}

export default UpdateEmployee