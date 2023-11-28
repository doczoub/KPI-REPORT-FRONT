import React, { useEffect } from "react";
import CalculService from "../services/CalculService";
import {useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import Footer from "./Footer";
import axios from "axios";
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

const SuiviCalcul = () => {
  const showUserData = useSelector((state) => state.userDatas);

  const param = useParams();
  const id = param.id
  
  const user = JSON.parse(localStorage.getItem("user"));
  const iduser = user.id;



  const [suivi, setSuivi] = useState({
    action: "",
    efficacite:"",
    dateAction: "",
    idCalcul: {
      id: id
    },
    userId: {
      id: iduser
    },
  });

  const navigate = useNavigate();


  const handleChange = (e) => {
    const value = e.target.value;
    setSuivi({ ...suivi, [e.target.name]: value });
  };

  const handleReturn = () => {
    navigate(-1); // Navigates back to the previous page or route
  };
  const saveCalcul=async(e)=>{

    e.preventDefault();

    try {
      const response = await axios.post("http://172.16.2.17:8080/api/v1/suivi",suivi)
      console.log(response.data);
      if (response.status === 200) {
        toast.success("User data saved successfully", {
          // ... Toast configuration ...
        });
        navigate(-1)
      } else {
        toast.error("Failed to store data.", {
          // ... Toast configuration ...
        });
      }
    } catch (error) {
      console.log("an error occured :",error);
      toast.error("An error occurred while saving user data", {
        // ... Toast configuration ...
      });
    }
  
  }

  return (
    <>
      <div className="mt-6 border  bg-[#f7f7f7]">
          <div className=" text-xl tracking-wider">
            <h5 className="text-center font-semibold"> formulaire de suivi </h5>
          </div>
          <div className="  mt-10 mx-auto grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 ">
            <div className=" sm:col-span-3">
              <label className=" block text-gray-600 text-sm font-normal">
                {" "}
                EFFICACITE{" "}
              </label>
              <select
                id="small"
                className="w-96 p-2 mb-6  text-sm text-gray-900 bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                name="efficacite"
                value={suivi.efficacite}
                onChange={(e) => handleChange(e)}
              >
                <option value="choix">choisir</option>
                <option value="Oui">Oui</option>
                <option value="non">non</option>
              </select>
            </div>
          </div>
          <div className="sm:col-span-3">
            <label className=" block text-gray-600 text-sm font-normal">
              {" "}
              Date
            </label>
            <input
              name="dateAction"
              value={suivi.dateAction}
              onChange={(e) => handleChange(e)}
              type="date"
              className=" block p-2.5  w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  mt-2 mb-20 px-2 py-2"
            ></input>
          </div>
          <div className="sm:col-span-3">
            <label className=" block text-gray-600 text-sm font-normal">
              {" "}
              SUIVI
            </label>
            <input
              name="action"
              value={suivi.action}
              onChange={(e) => handleChange(e)}
              type="text"
              className=" block p-2.5  w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500  mt-2 mb-20 px-2 py-2"
            ></input>
          </div>
          <div className="item-center justify-center h-14 w-full mb-4 mt-12 space-x-4 pt-4">
            <button
              onClick={saveCalcul}
              className=" rounded text-white font-semibold bg-cyan-600 px-6 hover:bg-cyan-700 py-2"
            >
              Enregistrer
            </button>
              <button 
              onClick={handleReturn}
              className=" rounded text-white font-semibold bg-orange-400 px-6 hover:bg-orange-700 py-2">
                Annuler
              </button>
          </div>
        </div>
      <Footer />
    </>
  );
};

export default SuiviCalcul;
