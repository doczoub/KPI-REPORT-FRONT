import axios from "axios";
import React, { useState,useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import UserService from "../services/UserService";
import signUpServic from "../services/signUpServic";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreationUser = () => {

  const navigate =useNavigate()

  const [listService,setListService]=useState([])

  const [listDirection,setListDirection]=useState([])
  const [user, setUser] = useState({
    nom: "",
    prenom: "",
    nomuser: "",
    email: "",
    motpass: "",
    role: "",
    userDirection: "",
  });

const handleChange = (e) => {
  const { name, value } = e.target;
  setUser((prevUser) => ({ ...prevUser, [name]: value }));
  console.log(user); // Log the updated state
}

const handleRoleChange = (event) => {
  const role = event.target.value;
  setUser((prevUser) => ({
    ...prevUser,
    role: role,
  }));
};


const handleSubmit = async (e) => {
  e.preventDefault();

  const formattedPayload = {
    nom: user.nom,
    prenom: user.prenom,
    nomuser: user.nomuser,
    email: user.email,
    motpass: user.motpass,
    role: user.role,
    userDirection: {
      id: user.userDirection
    }
  };

  try {
    const response = await axios.post(
      "http://172.16.2.17:8080/api/auth/signup",
      formattedPayload
    );

    if (response.status === 200) {
      toast.success("User data saved successfully", {
        // ... Toast configuration ...
      });
      navigate(`/dashboardAcceuil`);
    } else {
      toast.error("Failed to store data.", {
        // ... Toast configuration ...
      });
    }
  } catch (error) {
    console.error("An error occurred:", error);
    toast.error("An error occurred while saving user data", {
      // ... Toast configuration ...
    });
  }
};


 useEffect(() => {
   
  axios.get('http://172.16.2.17:8080/api/v1/direction')
  .then((response) =>{
    setListDirection(response.data)
 }).catch(error =>{
  console.log(error);
 })
}, [])

 useEffect(() => {
   
  axios.get('http://172.16.2.17:8080/api/v1/service')
  .then((response) =>{
   setListService(response.data)
 }).catch(error =>{
  console.log(error);
 })
}, [])



 
  return (
    <div>
      <div className="mt-10  ">
        <div className="max-w-xl mx-auto bg-white rounded-lg border border-gray-200 shadow-md sm:p-6 md:p-8 ">
          <form className="space-y-6 p-6">
            <h5 className="text-xl font-medium text-gray-900 text-center ">
              {" "}
              Creer un Compte{" "}
            </h5>
            <div className=" grid grid-cols-6 gap-6 ">
              <div className="col-span-6 sm:col-span-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Nom{" "}
                </label>
                <input
                  type="text"
                  name="nom"
                  value={user.nom}
                  onChange={(e)=>handleChange(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Prenom{" "}
                </label>
                <input
                  type="text"
                  name="prenom"
                  value={user.prenom}
                  onChange={(e)=>handleChange(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Email{" "}
                </label>
                <input
                  type="email"
                  name="email"
                  value={user.email}
                  onChange={(e)=>handleChange(e)}
                  placeholder="exemple@gmail.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Nom Utilisateur{" "}
                </label>
                <input
                  type="text"
                  name="nomuser"
                  value={user.nomuser}
                  onChange={(e)=>handleChange(e)}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "
                />
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="block mb-2 text-sm font-medium text-gray-900 ">
                  Mot de Passe{" "}
                </label>
                <input
                  type="password"
                  name="motpass"
                  value={user.motpass}
                  onChange={(e)=>handleChange(e)}
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full p-2.5 "
                />
              </div>
              <div className="sm:col-span-3">
                <label className=" block text-sm font-medium leading-6 text-gray-900">
                  {" "}
                  Direction{" "}
                </label>
                <select
                  id="small"
                  className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="userDirection"
                  value={user.userDirection?user.userDirection.id:''}
                  onChange={(e) => handleChange(e)}
                >
                  {listDirection.map((lesdirectionItem)=>(
                  <option key={lesdirectionItem.id} value={lesdirectionItem.id}> {lesdirectionItem.nom}</option>
                ))}
                </select>
              </div>
              {/* <div className="sm:col-span-3">
                <label className=" block text-sm font-medium leading-6 text-gray-900">
                  {" "}
                  Service{" "}
                </label>
                <select
                  id="small"
                  className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  name="userService"
                  value={user.userService?user.userService.id:''}
                  onChange={(e) => handleChange(e)}
                >
                 {listService.map((lesserviceItem)=>(
                  <option key={lesserviceItem.id} value={lesserviceItem.id}> {lesserviceItem.serviceName}</option>
                ))}
                </select>
              </div> */}
              <div className="sm:col-span-3">
                                <label className=' block text-sm font-medium leading-6 text-gray-900'> Role </label>
                                <select id="small"
                  className="block w-full rounded-md border-0 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    name='role'
                                    value={user.role}
                                    onChange={handleRoleChange}>
                                    <option value="">choisir</option>
                                    <option value="admin">administrateur</option>
                                    <option value="user">utilisateur</option>
                                    <option value="manager">manager de processus</option>
                                    <option value="pilote">pilote de processus</option>
                                    <option value="sousPilote">sous pilote de processus</option>
                                </select>
                            </div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-green-500 hover:bg-green-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
              onClick={handleSubmit}
            >
              {" "}
              Envoyer
            </button>
            <div className="text-sm font-medium text-gray-500 ">
              Vous avez deja un compte?
              <NavLink to="/login">
                <div className="text-orange-600 hover:underline">
                  Connectez vous
                </div>
              </NavLink>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreationUser;
