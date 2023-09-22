/* eslint-disable no-template-curly-in-string */
import React, { memo } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Calcultb from "../Calcultb";
import NavBar from "../NavBar";
import SideBar from "../SideBar";
import CalculService from "../../services/CalculService";
import SearchByPeriod from "../SearchByPeriod";
import ResumeCard from "../ResumeCard";
import { useAuth } from "../Auth";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../../features/authSlice";
import ResumeChart from "./ResumeChart";
import Footer from "../Footer";
import HeaderComuns from "../HeaderComuns";
import RecapIndicateur from "../RecapIndicateur";
import TabSuivi from "../TabSuivi";
import PlanActionTab from "../PlanActionTab";
import { CalculIndicateurData } from "../../features/CalculByIndicateurSlice";
import ChartCalcul from "../ChartCalcul";
import ResumeCard1 from "../ResumeCard1";
import ResumeCard2 from "../ResumeCard2";
import { saveAs } from "file-saver";
import ExcelJS from "exceljs";

const DashInnovation = () => {
  const [calcul, setCalcul] = useState([]);
  const [loading, setLoading] = useState(false);
  const auth = useAuth();

  const params = useParams();

  const id1 = params.id;

  console.log("...me", id1);
  const showUserData = useSelector((state) => state.calculIndicateurData);
  console.log(showUserData);
  const user = JSON.parse(localStorage.getItem("user"));
  // console.log("the user datas", showUserData);

  const indiccal = JSON.parse(localStorage.getItem("dirIndicateur"));
  console.log("indiccal", id1);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(CalculIndicateurData(id1));
  },[dispatch, id1]);

  const deleteCalcul = (e, id) => {
    e.preventDefault();
    CalculService.deleteCalcul(id).then((res) => {
      if (calcul) {
        setCalcul((preventElement) => {
          return preventElement.filter((calcul) => calcul.id !== id);
        });
      }
    });
  };

  const navigate = useNavigate();

  let id = 0;

  const exportToExcel = () => {
    const data = showUserData.datas; // Data to export
  
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet("Sheet1");
  
    // Add header row
    const headers = ["Période",
     "Résultat Obtenu",
      "responsable Analyse", 
      "responsable Calcul",
      "cause",
      "analyse Cause",
      "type Action",
      "etat"];
    worksheet.addRow(headers);
  
    // Add data rows
    data.forEach((item) => {
      const rowData = [item.periode,
         item.resultatObtenu,
          item.responsableAnalyse,
          item.responsableCalcul,
          item.cause,
          item.analyseCause,
          item.typeAction,
          item.etat];
      worksheet.addRow(rowData);
    });
  
    // Create a blob from the Excel data and trigger download
    workbook.xlsx.writeBuffer().then((buffer) => {
      const blob = new Blob([buffer], { type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet" });
      saveAs(blob, "exported_data.xlsx");
    });
  };
  
  // if (
  //   !showUserData.loading && showUserData.users.length
  //     ? (id = showUserData.users[0].userId.id)
  //     : null
  // )
  return (
    <div>
       <div className="sticky top-0">
        <HeaderComuns />
      </div>
      <div className="flex bg-[#f2f1f1] overflow-x-hidden">
        <div>
          <SideBar />
        </div>
        <div className="flex flex-col flex-4 overflow-x-hidden  justify-start ml-56">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 auto-cols-auto overflow-x-hidden mx-4">
            <div>
              <ResumeCard />
            </div>
            <div>
              <ChartCalcul />
            </div>
          </div>
        <div className="block rounded-lg border mt-2  shadow-lg bg-white w-full mx-2">
          <div className="py-2 px-6 border-b text-gray-900 border-gray-300">
            <h1 className="text-lg font-semibold">
              Tableau des Calculs
            </h1>
          </div>
          <div className="container flex flex-col flex-2 px-6 overflow-x-hidden">
          <div className="flex justify-end mb-1">
        <button
          onClick={exportToExcel}
          className="bg-transparent hover:bg-cyan-600 text-cyan-700 font-semibold hover:text-white py-2 px-4 border border-cyan-600 hover:border-transparent rounded"
        >
          Exporter en Excel
        </button>
      </div>
            <div className="flex shadow border-b overflow-x-auto">
              <table className="min-w-full break-words">
                <thead className="text-xs text-white  bg-[#121127]">
                  <tr>
                    <th className="text-left font-medium tracking-wider py-3 px-6">
                      Période
                    </th>
                    <th className="text-left font-medium tracking-wider py-3 px-6">
                      Résultat Obtenu
                    </th>
                    <th className="text-left font-medium tracking-wider py-3 px-6">
                      Responsable de l'Analyse
                    </th>
                    <th className="text-left font-medium tracking-wider py-3 px-6">
                      Responsable du Calcul
                    </th>
                    <th className="text-left font-medium tracking-wider py-3 px-6">
                      Cause
                    </th>
                    <th className="text-left font-medium tracking-wider py-3 px-6">
                      Analyse de Cause
                    </th>
                    <th className="text-left font-medium tracking-wider py-3 px-6">
                      Type d'action
                    </th>
                    <th className="text-left font-medium tracking-wider py-3 px-6">
                      Plan d'Action
                    </th>
                    <th className="text-left font-medium tracking-wider py-3 px-6">
                      
                    </th>
                  </tr>
                </thead>

                {!showUserData.loading && showUserData.datas?.length ? (
                 <tbody className="bg-white">
                 {loading ? (
                   <tr>
                     <td colSpan="9">Loading...</td>
                   </tr>
                 ) : showUserData.datas?.length ? (
                   showUserData.datas.map((calcul, index) => (
                     <Calcultb
                       deleteCalcul={deleteCalcul}
                       calcul={calcul}
                       index={index}
                       key={calcul.id}
                     />
                   ))
                 ) : (
                   <tr>
                     <td colSpan="9">No data available</td>
                   </tr>
                 )}
               </tbody>
                  ) : null}
              </table>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 auto-cols-auto overflow-x-hidden mx-4">
        <div>
            <PlanActionTab />
          </div>
          <div>
            <TabSuivi />
          </div>
        </div>
      </div>
    </div>
    <Footer />
  </div>
  );
};

export default memo(DashInnovation);
