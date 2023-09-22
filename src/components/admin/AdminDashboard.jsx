import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { AllData } from "../../features/AllDatasSlice";
import { userData } from "../../features/authSlice";
import CalculService from "../../services/CalculService";
import { useAuth } from "../Auth";
import Calcultb from "../Calcultb";
import Footer from "../Footer";
import NavBar from "../NavBar";
import LesResume from "./LesResume";
import SidebarAdmin from "./SidebarAdmin";
import Statistiques from "./Statistiques";
import SuiviComplet from "./SuiviComplet";
import Consolide from "./Consolide";
import {MdOutlineComment} from "react-icons/md"
import Modal from "react-modal"

const AdminDashboard = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const showForm = ()=>{
toggleModal();
  }

  return (
    <>
      {/* <NavBar /> */}
      <header className=" bg-[#ff9900] shadow sticky">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-white ">Dashboard </h1>
        </div>
      </header>
      <div className="flex bg-neutral-200  flex-wrap ml-64">
        <div className=" ">
          <SidebarAdmin />
        </div>
        <div className="flex-auto">

        <Statistiques />
        </div>
        <div className="flex-auto">
        <Consolide />
        </div>
      </div>
       
      <Footer />
      <div className="fixed bottom-4 right-4 z-10">
        <button
        onClick={showForm}
         className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full">
          <MdOutlineComment /> {/* Icon */}
        </button>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        className="modal fixed top-1/4 right-4 w-1/2 bg-white rounded-lg shadow-lg p-4"
        overlay ClassName="overlay text-black fixed inset-0 bg-black opacity-50"
        contentLabel="Comment Modal"
      >
        <div className="modal-content">
          <h2 className="text-lg font-semibold">Comment Form</h2>
          {/* Add your comment form JSX here */}
          <div className=' mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6'>
                            <div className="sm:col-span-2 sm:col-start-1">
                                <label className=' block text-sm font-medium leading-6 text-gray-900'>PERIODE </label>
                                <div className='mt-2'>
                                <input
                                    name='periode'
                                   
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
                                    
                                    type="text"
                                    className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'>

                                </input>
                                </div>
                            </div>
                            </div>
          <button
            onClick={toggleModal}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
          >
            Close
          </button>
        </div>
      </Modal>
    </>
  );
};

export default AdminDashboard;
