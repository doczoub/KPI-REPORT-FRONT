import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import CalculService from '../services/CalculService';
import Footer from './Footer';
import NavBar from './NavBar';

const UpdateCalcul = () => {

    const navigate =useNavigate();
       
    const showUserData = useSelector((state) => state.userDatas)
    const {id} = useParams();
    const iduser=showUserData.users[0].userId.id
    
    const [calcul, setCalcul] = useState({
        id: id,
        periode: "",
        resultatObtenu: "",
        responsableAnalyse: "",
        responsableCalcul: "",
        cause: "",
        analyseCause: "",
        typeAction: "",
        planAction: "",
        responsableAction: "",
        dateLivraisonPlanAction: "",
        etat: "",
        suivi: "",
        efficacite: "",
        justificationEfficacite: "",
        genereIdeeAmelioration: "",
        identifiantIdeeAmelioration:"",
        userId:{
            id:iduser
        }
    });
    
        const handleChange = (e)=>{
            const value = e.target.value
            setCalcul({...calcul, [e.target.name]:value});
        }
        useEffect(() => {
            const fetchData = async ()=>{
                try {
                    const response = await CalculService.getCalculById(id);
                    setCalcul(response.data);
                    console.log("updates :",response.data);
                } catch (error) {
                    console.log(error);
                }
            }
            fetchData();
        }, []);
        

        const updateCalcul = (e,id)=>{
            id=calcul.id
            console.log(id);
            e.preventDefault();
            CalculService.updateCalcul(id,calcul)
            .then((response)=>{
                setCalcul(response.data);
                console.log("updates jouuurr:",response.data);
                navigate("/dashInnovation");
            })
            .catch((error)=>{
                console.log(error);
            },[])
            
            
        }

 
  return (
    
    <>
     {/* <NavBar /> */}
            {/* <header className=" bg-[#ff9900] shadow flex justify-center">
                <div className="max-w-7xl py-6 ">
                    {showUserData.loading && <div> loading... </div>}
      {!showUserData.loading && showUserData.error ? <div>Error:{showUserData.error} </div> :null}
      {!showUserData.loading && showUserData.users.length ? ( 
                    <h1 className="text-3xl font-bold text-white  ">Dashboard du service &nbsp;
                       { showUserData.users[0].userId.userService.serviceName}
            </h1>
            ):null}
                </div>
            </header> */}
            <div className='bg-slate-300'>
                <div className=' mx-auto max-w-5xl   border bg-white'>
                    <div className='p-8'>
                        <div className=' text-2xl tracking-wider'>
                            <h1 className='text-center font-semibold mb-6'>Formulaire de Calcul </h1>
                        </div>
                        <div className='  mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                            <div className="sm:col-span-2 sm:col-start-1">
                                <label className=' block text-gray-600 text-sm font-normal'>PERIODE </label>
                                <input
                                    name='periode'
                                    value={calcul.periode}
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    className='block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                                </input>
                            </div>
                            <div className=" sm:col-span-2">
                                <label className=' block text-gray-600 text-sm font-normal'> RESULTAT OBTENU</label>
                                <input
                                    name='resultatObtenu'
                                    value={calcul.resultatObtenu}
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    className='block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>

                                </input>
                            </div>
                            <div className="sm:col-span-2">
                                <label className=' block text-gray-600 text-sm font-normal'> RESPONSABLE DE L'ANALYSE</label>
                                <input
                                    name='responsableAnalyse'
                                    value={calcul.responsableAnalyse}
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    className='block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' >
                                </input>
                            </div>
                            <div className="sm:col-span-2">
                                <label className=' block text-gray-600 text-sm font-normal'> RESPONSABLE DU CALCUL</label>
                                <input
                                    name='responsableCalcul'
                                    value={calcul.responsableCalcul}
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    className='block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6' >
                                </input>
                            </div>
                            <div className="sm:col-span-2">
                                <label className=' block text-gray-600 text-sm font-normal'> CAUSE</label>
                                <input
                                    name='cause'
                                    value={calcul.cause}
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    className='block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>

                                </input>
                            </div>
                            <div className="sm:col-span-2">
                                <label className=' block text-gray-600 text-sm font-normal'> ANALYSE DE CAUSE</label>
                                <input
                                    name='analyseCause'
                                    value={calcul.analyseCause}
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    className='block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>

                                </input>
                            </div>
                            <div className=" sm:col-span-2">
                                <label className=' block text-gray-600 text-sm font-normal'> TYPE D'ACTION</label>
                                <select id="small" className=" block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    name='typeAction'
                                    value={calcul.typeAction}
                                    onChange={(e) => handleChange(e)}>
                                    <option value="choix">choisir</option>
                                    <option value="Corrective">Corrective</option>
                                    <option value="Preventive">Preventive</option>
                                    <option value="Non Requis">Non Requis</option>
                                </select>
                            </div>
                            <div className=" sm:col-span-2">
                                <label className=' block text-gray-600 text-sm font-normal'> PLAN D'ACTION</label>
                                <input
                                    name='planAction'
                                    value={calcul.planAction}
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    className=' block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>

                                </input>
                            </div>
                            <div className=" sm:col-span-2">
                                <label className=' block text-gray-600 text-sm font-normal'>  RESPONSABLE DE L'ACTION</label>
                                <input
                                    name='responsableAction'
                                    value={calcul.responsableAction}
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    className=' block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ' >
                                </input>
                            </div>
                            <div className=" sm:col-span-2">
                                <label className=' block text-gray-600 text-sm font-normal'>  DATE DE LIVRAISONDU PLAN D'ACTION</label>
                                <input
                                    name='dateLivraisonPlanAction'
                                    value={calcul.dateLivraisonPlanAction}
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    className=' block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>

                                </input>
                            </div>
                            <div className=" sm:col-span-2">
                                <label className=' block text-gray-600 text-sm font-normal'> ETAT </label>
                                <select id="small" className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    name='etat'
                                    value={calcul.etat}
                                    onChange={(e) => handleChange(e)}>
                                    <option value="choix">choisir</option>
                                    <option value="En Attente">En Attente</option>
                                    <option value="Effectue">Effectue</option>
                                    <option value="Annuler">Annuler</option>
                                    <option value="Abandonner">Abandonner</option>
                                </select>
                            </div>
                            <div className=" sm:col-span-2">
                                <label className=' block text-gray-600 text-sm font-normal'> SUIVI</label>
                                <input
                                    name='suivi'
                                    value={calcul.suivi}
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    className=' block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>

                                </input>
                            </div>
                            <div className=" sm:col-span-2">
                                <label className=' block text-gray-600 text-sm font-normal'> EFFICACITE </label>
                                <select id="small" className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    name='efficacite'
                                    value={calcul.efficacite}
                                    onChange={(e) => handleChange(e)}>
                                    <option value="choix">choisir</option>
                                    <option value="Oui">Oui</option>
                                    <option value="non">non</option>
                                </select>
                            </div>
                            <div className=" sm:col-span-2">
                                <label className=' block text-gray-600 text-sm font-normal'> JUSTIFICATION EFFICACITE</label>
                                <input
                                    name='justificationEfficacite'
                                    value={calcul.justificationEfficacite}
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    className=' block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>

                                </input>
                            </div>
                            <div className=" sm:col-span-2">
                                <label className=' block text-gray-600 text-sm font-normal'> GENERE UN IDEE D'AMELIORATION</label>
                                <select id="small"
                                    className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    name='genereIdeeAmelioration'
                                    value={calcul.genereIdeeAmelioration}
                                    onChange={(e) => handleChange(e)}>
                                    <option value="choix">choisir</option>
                                    <option value="Oui">Oui</option>
                                    <option value="non">non</option>
                                </select>
                            </div>
                            <div className=" sm:col-span-2">
                                <label className=' block text-gray-600 text-sm font-normal'> IDENTIFIANT DE D'IDEE D'AMELIORATION</label>
                                <input
                                    name='identifiantIdeeAmelioration'
                                    value={calcul.identifiantIdeeAmelioration}
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    className=' block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                                </input>
                            </div>
                        </div>
                        <div className="item-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                            <button
                                onClick={updateCalcul}
                                className=' rounded text-white font-semibold bg-cyan-600 px-6 hover:bg-cyan-700 py-2'>
                                Enregistrer
                            </button>
                            <NavLink to="/dashInnovation">
                            <button
                                className=' rounded text-white font-semibold bg-orange-400 px-6 hover:bg-orange-700 py-2'>
                                Annuler
                            </button>
                                    </NavLink>
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
       </>
  )
}

export default UpdateCalcul
