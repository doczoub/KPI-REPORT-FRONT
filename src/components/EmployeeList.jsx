import React from 'react'
import {useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react';
import EmployeeService from '../services/EmployeeService';
import Employee from './Employee';
import NavBar from './NavBar';
import CalculService from '../services/CalculService';
import { useSelector } from 'react-redux';

function EmployeeList() {


    const [employee, setEmployee]= useState(null);
    const [loading, setLoading]= useState(true);
    const navigate =useNavigate();

    const showUserData = useSelector((state) => state.AllDatas);
    console.log(".......",showUserData );
    useEffect(() => {
        const fetchData = async ()=>{
            setLoading(true);
            try {
                const response = await CalculService.getCalcul();
                setEmployee(response.data);
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        }
        fetchData();
    }, []);

    const deleteEmployee = (e, id)=>{
        e.preventDefault();
        EmployeeService.deleteEmployee(id)
        .then((res)=>{
            if (employee) {
                setEmployee((preventElement)=>{
                    return preventElement.filter((employee)=> employee.id !==id);
                });
            }
        })
    }    
  return (
    <>
    <NavBar />
    <div className='container mx-auto my-8 px-6'>
        <div className="h-12 ">
            <button
            onClick={()=> navigate("/AddEmployee")} 
            className='rounded bg-green-600 text-white py-2 px-4 font-semibold '> Ajouter un Employyer</button>
        </div>
        <div className='flex shadow border-b'>
            <table className=' min-w-full'>
                <thead className=' bg-gray-100'>
                    <tr>
                        <th
                         className=' text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                            Nom </th>
                        <th 
                        className=' text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                            Prenom</th>
                        <th 
                        className=' text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                            Email 
                            </th>
                            <th 
                        className=' text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                            Service 
                            </th>
                        <th 
                        className=' text-left font-medium text-gray-500 uppercase tracking-wider py-3 px-6'>
                            Action 
                            </th>
                    </tr>
                </thead>
                {!loading &&(
                <tbody className=' bg-white'>
                    { showUserData.datas.map((employee)=>(
                       <Employee 
                       employee ={employee} 
                       deleteEmployee= {deleteEmployee} 
                       key={employee.id}/>
                    ))}
                </tbody>
                )}
            </table>
        </div>
    </div>
    </>
  )
}

export default EmployeeList