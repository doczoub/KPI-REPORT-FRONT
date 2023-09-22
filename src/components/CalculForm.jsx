import React from 'react'
import CalculService from '../services/CalculService';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import { useState,useEffect  } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Footer from './Footer';
import PlanAction from './PlanAction';
import { IndicateurByIdData } from '../features/indicateurByIdSlice';

const CalculForm = () => {

    const showUserData = useSelector((state) => state.userDatas)
    
    const param = useParams();

    const user = JSON.parse(localStorage.getItem("user"));

const id =param.id
console.log(id);

   console.log("le vrai user", user.nom );
    console.log(id);
    
    const responsableCalcul1=user.nom +" "+ user.prenom
    const responsableAnalyse1=user.nom +" "+ user.prenom
   
    const id2 = user.id
    
    const [calcul, setCalcul] = useState({
        id: "",
        periode: "",
        resultatObtenu: "",
        responsableAnalyse: responsableAnalyse1,
        responsableCalcul: responsableCalcul1,
        cause: "",
        analyseCause: "",
        typeAction: "",
        etat: "",
        anneeCalcul:"",
        userId:{
            id:id2
        },
        indicateur:{
            id:id
        }
    });


    const navigate = useNavigate();

    const handleChange = (e) => {
        const value = e.target.value;
        setCalcul({ ...calcul, [e.target.name]: value });
        console.log(setCalcul);
    }

    const handleReturn = () => {
        navigate(-1); // Navigates back to the previous page or route
      };
    
console.log("hdjdh********",id2);

    function saveCalcul(e) {
        e.preventDefault()
        CalculService.saveCalcul(calcul)
            .then((response) => {
                console.log(response)
                navigate(`/dashInnovation/${id}`)
            }).catch((error) => {
                console.log(error)
            })
    }
    

    // if(!showUserData.loading && showUserData.users.length ? (
    //     id=showUserData.users[0].userId.id,
    //     responsableCalcul,
    //     responsableAnalyse
    //     ):null)

    return (
        <>
            {/* <NavBar /> */}
            {/* <header className=" bg-[#ff9900] shadow flex justify-cente">
                <div className="max-w-7xl mx-auto py-6 ">
                    {showUserData.loading && <div> loading... </div>}
      {!showUserData.loading && showUserData.error ? <div>Error:{showUserData.error} </div> :null}
      {!showUserData.loading && showUserData.users.length ? ( 
                    <h1 className="text-3xl font-bold text-white ">Dashboard du service &nbsp;
                       { showUserData.users[0].userId.userService.serviceName}
            </h1>
            ):null}
                </div>
            </header> */}
                <div className=' border border-gray-900/10 p-12  '>
                            <h5 className='text-center text-xl font-semibold leading-7 text-gray-900'> fiche de Calcul </h5>
                        <div className=' mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                            <div className="sm:col-span-2 sm:col-start-1">
                                <label className=' block text-sm font-medium leading-6 text-gray-900'>PERIODE </label>
                                <div className='mt-2'>
                                <input
                                    name='periode'
                                    value={calcul.periode}
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>
                                </input>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label className=' block text-sm font-medium leading-6 text-gray-900'> RESULTAT OBTENU</label>
                                <div className='mt-2'>
                                <input
                                    name='resultatObtenu'
                                    value={calcul.resultatObtenu}
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    className=' block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>

                                </input>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label className=' block text-sm font-medium leading-6 text-gray-900'> RESPONSABLE DE L'ANALYSE</label>
                                <div className='mt-2'>
                                <input
                                    name='responsableAnalyse'
                                    value={calcul.responsableAnalyse}
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    className='block w-full rounded-md border-0 p-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 ' >
                                </input>
                                </div>
                            </div>
                            <div className="sm:col-span-2 sm:col-start-1">
                                <label className=' block text-sm font-medium leading-6 text-gray-900'> RESPONSABLE DU CALCUL</label>
                                <div className='mt-2'>
                                <input
                                    name='responsableCalcul'
                                    value={calcul.responsableCalcul}
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    className='block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 '>
                                </input>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label className=' block text-sm font-medium leading-6 text-gray-900'> CAUSE</label>
                                <div className='mt-2'>
                                <input
                                    name='cause'
                                    value={calcul.cause}
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    className=' block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>

                                </input>
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label className=' block text-sm font-medium leading-6 text-gray-900'> ANALYSE DE CAUSE</label>
                                <div className='mt-2'>
                                <input
                                    name='analyseCause'
                                    value={calcul.analyseCause}
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>

                                </input>
                                </div>
                            </div>
                            <div className="sm:col-span-3">
                                <label className=' block text-sm font-medium leading-6 text-gray-900'> TYPE D'ACTION</label>
                                <select id="small" className=" block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    name='typeAction'
                                    value={calcul.typeAction}
                                    onChange={(e) => handleChange(e)}>
                                    <option value="choix">choisir</option>
                                    <option value="Corrective">Corrective</option>
                                    <option value="Preventive">Preventive</option>
                                    <option value="Non Requis">Non Requis</option>
                                </select>
                            </div>
                            <div className="sm:col-span-3">
                                <label className=' block text-sm font-medium leading-6 text-gray-900'> ANNEE</label>
                                <input id="small" className=" block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                 type="number"
                                   name='anneeCalcul'
                                    value={calcul.anneeCalcul}
                                    onChange={(e) => handleChange(e)}>
                                </input>
                            </div>
                            <div className="sm:col-span-3">
                                <label className=' block text-sm font-medium leading-6 text-gray-900'> ETAT </label>
                                <select id="small" className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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

                            {/* <div className="item-center justify-center h-14 w-full my-4 col-span-6 sm:col-span-3">
                                <label className=' block text-gray-600 text-sm font-normal'> SUIVI</label>
                                <input
                                    name='suivi'
                                    value={calcul.suivi}
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    className=' h-10 w-96 border mt-2 px-2 py-2'>

                                </input>
                            </div> */}
                            {/* <div className="item-center justify-center h-14 w-full my-4 col-span-6 sm:col-span-3">
                                <label className=' block text-gray-600 text-sm font-normal'> EFFICACITE </label>
                                <select id="small" className="w-96 p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    name='efficacite'
                                    value={calcul.efficacite}
                                    onChange={(e) => handleChange(e)}>
                                    <option value="choix">choisir</option>
                                    <option value="Oui">Oui</option>
                                    <option value="non">non</option>
                                </select>
                            </div> */}
                            {/* <div className="item-center justify-center h-14 w-full my-4 col-span-6 sm:col-span-3">
                                <label className=' block text-gray-600 text-sm font-normal'> JUSTIFICATION EFFICACITE</label>
                                <input
                                    name='justificationEfficacite'
                                    value={calcul.justificationEfficacite}
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    className=' h-10 w-96 border mt-2 px-2 py-2'>

                                </input>
                            </div> */}
                            {/* <div className="item-center justify-center h-14 w-full my-4 col-span-6 sm:col-span-3">
                                <label className=' block text-gray-600 text-sm font-normal'> GENERE UN IDEE D'AMELIORATION</label>
                                <select id="small"
                                    className="w-96 p-2 mb-6 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    name='genereIdeeAmelioration'
                                    value={calcul.genereIdeeAmelioration}
                                    onChange={(e) => handleChange(e)}>
                                    <option value="choix">choisir</option>
                                    <option value="Oui">Oui</option>
                                    <option value="non">non</option>
                                </select>
                            </div> */}
                            {/* <div className="item-center justify-center h-14 w-full my-4 col-span-6 sm:col-span-3">
                                <label className=' block text-gray-600 text-sm font-normal'> IDENTIFIANT DE D'IDEE D'AMELIORATION</label>
                                <input
                                    name='identifiantIdeeAmelioration'
                                    value={calcul.identifiantIdeeAmelioration}
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    className=' h-10 w-96 border mt-2 px-2 py-2'>
                                </input>
                            </div> */}
                        </div>
                        {/* <div className="item-center justify-center h-14 w-full mt-4 mb-8 col-span-6 sm:col-span-3">
                                <label className=' block text-gray-600 text-sm font-normal'> PLAN D'ACTION</label>
                                <textarea
                                    name='planAction'
                                    value={calcul.planAction}
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    className='block p-2.5 h-20 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  mt-2 px-2 py-2'>

                                </textarea>
                            </div>
                            <div className="item-center justify-center h-14 w-full my-4 col-span-6 sm:col-span-3">
                                <label className=' block text-gray-600 text-sm font-normal mt-16'>  RESPONSABLE DE L'ACTION</label>
                                <input
                                    name='responsableAction'
                                    value={calcul.responsableAction}
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    className=' h-10 w-full border mt-2 px-2 py-2 rounded-lg ' >
                                </input>
                            </div>
                            <div className="item-center justify-center h-14 w-full my-4 col-span-6 sm:col-span-3">
                                <label className=' block text-gray-600 text-sm font-normal'>  DATE DE LIVRAISONDU PLAN D'ACTION</label>
                                <input
                                    name='dateLivraisonPlanAction'
                                    value={calcul.dateLivraisonPlanAction}
                                    onChange={(e) => handleChange(e)}
                                    type="text"
                                    className=' h-10 w-full border mt-2 px-2 py-2 rounded-lg'>

                                </input>
                            </div>
                           <PlanAction /> */}
                        <div className="item-center justify-center h-14 w-full my-4 space-x-4 pt-4">
                            <button
                                onClick={saveCalcul}
                                className=' rounded text-white font-semibold bg-cyan-600 px-6 hover:bg-cyan-700 py-2'>
                                Enregistrer
                            </button>
                            <button
                            onClick={handleReturn}
                                className=' rounded text-white font-semibold bg-orange-400 px-6 hover:bg-orange-700 py-2'>
                                Annuler
                            </button>
                        </div>
                    </div>
            <Footer />
        </>
    )
}

export default CalculForm
