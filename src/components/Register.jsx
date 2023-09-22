import React from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import NavBar from './NavBar'
import UserService from '../services/UserService'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [user,setUser]=useState({
        id :"",
        nom :"",
        prenom :"",
        email :"",
        nomUser :"",
        motPass :""
    });


    const navigate = useNavigate();

    const handleChange = (e)=>{
        const value = e.target.value;
        setUser({...user, [e.target.name]:value});
        console.log(setUser);
    }

    function saveUser(e) {
        e.preventDefault()
        UserService.saveUser(user)
            .then((response) => {
                console.log(response)
                navigate("/login")
            }).catch((error) => {
                console.log(error)
            })
    }


  return (
    <>
    <NavBar />
   <div className="mt-10  " >
     <div className="max-w-xl mx-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 ">
   <form className="space-y-6 p-6" >
       <h5 className="text-xl font-medium text-gray-900 text-center "> Creer un Compte </h5>
       <div className=' grid grid-cols-6 gap-6 '>
       <div className='col-span-6 sm:col-span-3'>
           <label className="block mb-2 text-sm font-medium text-gray-900 ">Nom  </label>
           <input type="text" 
           name='nom'
           value={user.nom}
           onChange ={(e)=>handleChange(e)}
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "  /> 
       </div>
       <div className='col-span-6 sm:col-span-3'>
           <label className="block mb-2 text-sm font-medium text-gray-900 ">Prenom </label>
           <input type="text"
           name='prenom'
           value={user.prenom}
           onChange ={(e)=>handleChange(e)}
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " />
       </div>
       <div className='col-span-6 sm:col-span-3'>
           <label className="block mb-2 text-sm font-medium text-gray-900 ">Email </label>
           <input type="email"
           name='email'
           onChange ={(e)=>handleChange(e)}
            placeholder="exemple@gmail.com"
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " 
        />
       </div>
       <div className='col-span-6 sm:col-span-3'>
           <label className="block mb-2 text-sm font-medium text-gray-900 ">Nom Utilisateur </label>
           <input type="text" 
           name='nomUser'
           value={user.nomUser}
           onChange ={(e)=>handleChange(e)}
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " 
            /> 
       </div>
       <div className='col-span-6 sm:col-span-3'>
           <label className="block mb-2 text-sm font-medium text-gray-900 ">Mot de Passe </label>
           <input type="password"
             name="motPass"
           value={user.motPass}
           onChange ={(e)=>handleChange(e)}
            placeholder="••••••••" 
           className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 " 
        />
       </div>
       </div>
       <button type="submit"
        className="w-full text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
       onClick={saveUser}> Envoyer 
       </button>
       <div className="text-sm font-medium text-gray-500 ">Vous avez deja un compte? 
       <NavLink to="/login"> 
       <div className="text-orange-600 hover:underline">Connectez vous 
       </div>
       </NavLink>
       </div>
   </form>
</div>
</div>
</>
  )
}

export default Register
