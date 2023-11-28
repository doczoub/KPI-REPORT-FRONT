import React from "react";
import Footer from "./Footer";
import { NavLink, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import indicateurServic from "../services/indicateurServic";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const CreationIndicateur = () => {
  const [listIndicateur, setListIndicateur] = useState([]);

  const [listDirection, setListDirection] = useState([]);

  const [listUser, setListUser] = useState([]);

  const navigate = useNavigate();

  const [indicateur, SetIndicateur] = useState({
    periodicite: "",
    user: "",
    direction: "",
    norme: "",
    nomMesure: "",
    typeNorme: "",
    codeMesure: "",
    nomProcesus: "",
    typeProcessus: "",
    objectifQualite: "",
    objectifMesure: "",
  });

  const handleChange = (e) => {
    const value = e.target.value;
    SetIndicateur({ ...indicateur, [e.target.name]: value });
    console.log(SetIndicateur);
  };

  const saveCalcul = async (e) => {
    e.preventDefault();

    const formattedPayload = {
      periodicite: indicateur.periodicite,
      norme: indicateur.norme,
      nomMesure: indicateur.nomMesure,
      typeNorme: indicateur.typeNorme,
      codeMesure: indicateur.codeMesure,
      direction: {
        id: indicateur.direction,
      },
      user: {
        id: indicateur.user,
      },
      nomProcesus: indicateur.nomProcesus,
      typeProcessus: indicateur.typeProcessus,
      objectifQualite: indicateur.objectifQualite,
      objectifMesure: indicateur.objectifMesure,
    };
    try {
      const response = await axios.post(
        "http://172.16.2.17:8080/api/v1/indicateur",
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
    axios
      .get("http://172.16.2.17:8080/api/v1/user")
      .then((response) => {
        setListUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://172.16.2.17:8080/api/v1/indicateur")
      .then((response) => {
        setListIndicateur(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://172.16.2.17:8080/api/v1/direction")
      .then((response) => {
        setListDirection(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(listIndicateur);

  return (
    <div>
      <div className=" border border-gray-900/10 p-12  ">
        <h5 className="text-center text-xl font-semibold leading-7 text-gray-900">
          {" "}
          creer un nouvel indicateur{" "}
        </h5>
        <div className=" mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
            <label className=" block text-sm font-medium leading-6 text-gray-900">
              {" "}
              Direction{" "}
            </label>
            <select
              id="small"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="direction"
              value={indicateur.direction ? indicateur.direction.id : ""}
              onChange={(e) => handleChange(e)}
            >
              {listDirection.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.nom}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-3">
            <label className=" block text-sm font-medium leading-6 text-gray-900">
              {" "}
              Utilisateur{" "}
            </label>
            <select
              id="small"
              className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="user"
              value={indicateur.user ? indicateur.user.id : ""}
              onChange={(e) => handleChange(e)}
            >
              {listUser.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.nom} {item.prenom}
                </option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2 sm:col-start-1">
            <label className=" block text-sm font-medium leading-6 text-gray-900">
              Nom de la mesure{" "}
            </label>
            <div className="mt-2">
              <input
                name="nomMesure"
                value={indicateur.nomMesure}
                onChange={(e) => handleChange(e)}
                type="text"
                className="block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className=" block text-sm font-medium leading-6 text-gray-900">
              {" "}
              Cible
            </label>
            <div className="mt-2">
              <input
                name="norme"
                value={indicateur.norme}
                onChange={(e) => handleChange(e)}
                type="text"
                className=" block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              ></input>
            </div>
          </div>
          <div className="sm:col-span-2">
            <label className=" block text-sm font-medium leading-6 text-gray-900">
              {" "}
              Code de la mesure
            </label>
            <div className="mt-2">
              <input
                name="codeMesure"
                value={indicateur.codeMesure}
                onChange={(e) => handleChange(e)}
                type="text"
                className="block w-full rounded-md border-0 p-1.5 px-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
              ></input>
            </div>
          </div>
          <div className="sm:col-span-3 sm:col-start-1">
            <label className=" block text-sm font-medium leading-6 text-gray-900">
              {" "}
              Periodicité
            </label>
            <div className="mt-2">
              <input
                name="periodicite"
                value={indicateur.periodicite}
                onChange={(e) => handleChange(e)}
                type="text"
                className="block w-full rounded-md border-0 p-1.5  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 "
              ></input>
            </div>
          </div>
          <div className="sm:col-span-3">
            <label className=" block text-sm font-medium leading-6 text-gray-900">
              {" "}
              Symbole
            </label>
            <select
              id="small"
              className=" block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              name="typeNorme"
              value={indicateur.typeNorme}
              onChange={(e) => handleChange(e)}
            >
              {listIndicateur.map((item) => (
                <option key={item.id} value={item.typeNorme}>
                  {item.typeNorme}
                </option>
              ))}
            </select>
          </div>
  
          <div className='sm:col-span-2 sm:col-start-1'>
            <label className=' block text-sm font-medium leading-6 text-gray-900'>
              Nom du processus
            </label>
            <div className='mt-2'>
              <input
                name='nomProcesus'
                value={indicateur.nomProcesus}
                onChange={(e) => handleChange(e)}
                type='text'
                className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              ></input>
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label className=' block text-sm font-medium leading-6 text-gray-900'>
              Type de processus
            </label>
            <div className='mt-2'>
              <input
                name='typeProcessus'
                value={indicateur.typeProcessus}
                onChange={(e) => handleChange(e)}
                type='text'
                className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              ></input>
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label className=' block text-sm font-medium leading-6 text-gray-900'>
              Objectif de qualité
            </label>
            <div className='mt-2'>
              <input
                name='objectifQualite'
                value={indicateur.objectifQualite}
                onChange={(e) => handleChange(e)}
                type='text'
                className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              ></input>
            </div>
          </div>
          <div className='sm:col-span-2'>
            <label className=' block text-sm font-medium leading-6 text-gray-900'>
              Objectif de mesure
            </label>
            <div className='mt-2'>
              <input
                name='objectifMesure'
                value={indicateur.objectifMesure}
                onChange={(e) => handleChange(e)}
                type='text'
                className='block w-full rounded-md border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
              ></input>
            </div>
          </div>
        </div>
        <div className="item-center justify-center h-14 w-full my-4 space-x-4 pt-4">
          <button
            className=" rounded text-white font-semibold bg-cyan-600 px-6 hover:bg-cyan-700 py-2"
            onClick={saveCalcul}
          >
            Enregistrer
          </button>
          <NavLink to="/dashInnovation">
            <button className=" rounded text-white font-semibold bg-orange-400 px-6 hover:bg-orange-700 py-2">
              Annuler
            </button>
          </NavLink>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CreationIndicateur;
