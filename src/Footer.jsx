import React, { useState } from "react";
import HeaderComuns from "./HeaderComuns";
import SideBar from "./SideBar";

const ResumeIndicateurs = () => {
  const [tabsState, setTabsState] = useState(1);

  const changeTabs = (index) => {
    setTabsState(index);
  };
  return (
    <div>
      <div className="w-[30%] mr-10">

      <SideBar />
      </div>
      <HeaderComuns />
      <h1 className="w-full bg-teal-900 flex justify-center text-white">
        RESUME DU SUIVI DE MES INDICATEURS
      </h1>
      <div className="max-w-2xl  border border-gray-200 rounded-lg shadow bg-white mx-auto p-6 mt-6"> 
     
      
      <ul className="flex flex-wrap justify-center pt-4 text-sm font-medium text-center text-gray-500 border-b border-gray-200">
        <li className="mr-2 cursor-pointer">
          <div
            className={
              tabsState === 1
                ? "inline-block p-4 uppercase  text-blue-600 bg-gray-100 rounded-t-lg active"
                : "inline-block p-4 uppercase   bg-gray-100 rounded-t-lg"
            }
            onClick={() => changeTabs(1)}
          >
            Annuel
          </div>
        </li>
        <li className="mr-2 cursor-pointer">
          <div
            href="#"
            className={
              tabsState === 2
                ? "inline-block p-4 uppercase  text-blue-600 bg-gray-100 rounded-t-lg active"
                : "inline-block p-4 uppercase   bg-gray-100 rounded-t-lg"
            }
            onClick={() => changeTabs(2)}
          >
            semestriel
          </div>
        </li>
        <li className="mr-2 cursor-pointer">
          <div
            href="#"
            className={
              tabsState === 3
                ? "inline-block p-4 uppercase  text-blue-600 bg-gray-100 rounded-t-lg active"
                : "inline-block p-4 uppercase   bg-gray-100 rounded-t-lg"
            }
            onClick={() => changeTabs(3)}
          >
            quadrimestriel
          </div>
        </li>
        <li className="mr-2 cursor-pointer">
          <div
            className={
              tabsState === 4
                ? "inline-block p-4 uppercase  text-blue-600 bg-gray-100 rounded-t-lg active"
                : "inline-block p-4 uppercase   bg-gray-100 rounded-t-lg"
            }
            onClick={() => changeTabs(4)}
          >
            Trimestriel
          </div>
        </li>
        <li className="mr-2 cursor-pointer">
          <div
            href="#"
            className={
              tabsState === 5
                ? "inline-block p-4 uppercase  text-blue-600 bg-gray-100 rounded-t-lg active"
                : "inline-block p-4 uppercase   bg-gray-100 rounded-t-lg"
            }
            onClick={() => changeTabs(5)}
          >
            bimensuel
          </div>
        </li>
        <li className="mr-2 cursor-pointer">
          <div
            href="#"
            className={
              tabsState === 6
                ? "inline-block p-4 uppercase  text-blue-600 bg-gray-100 rounded-t-lg active"
                : "inline-block p-4 uppercase   bg-gray-100 rounded-t-lg"
            }
            onClick={() => changeTabs(6)}
          >
            Mensuel
          </div>
        </li>
      </ul>
      <div id="myTabContent">
        <div
          className={
            tabsState === 1
              ? " flex flex-wrap justify-center text-sm font-medium text-center text-gray-500  bg-gray-50 "
              : "hidden"
          }
        >
          <div className=" flex shadow border-b overflow-x-auto md:overflow-x-auto xl:overflow-x-auto">
            <table className=" min-w-full  break-words  ">
              <thead className="text-xs text-white uppercase bg-[#121127] ">
                <tr>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    Code de la mesure
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    Nom de la mesure
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    Norme
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    Resultat
                  </th>
                </tr>
              </thead>
              <tbody className=" bg-white ">
                <tr>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      GH_M01
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      efficacité des formations
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      M&#60;=70
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                      100%
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      GH_M01
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      efficacité des formations
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      M&#60;=70
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold  flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                      100%
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      GH_M01
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      efficacité des formations
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      M&#60;=70
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2 animate-ping "></div>{" "}
                      30%
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      GH_M01
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      efficacité des formations
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      M&#60;=70
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2 animate-ping "></div>{" "}
                      40%
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          className={
            tabsState === 2
              ? " flex flex-wrap justify-center text-sm font-medium text-center text-gray-500  bg-gray-50 "
              : "hidden"
          }
        >
          <div className=" flex shadow border-b overflow-x-auto md:overflow-x-auto xl:overflow-x-auto">
            <table className=" min-w-full  break-words  ">
              <thead className="text-xs text-white uppercase bg-[#121127] ">
                <tr>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    Code de la mesure
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    Nom de la mesure
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    Norme
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    1er semestre
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    2eme semestre
                  </th>
                </tr>
              </thead>
              <tbody className=" bg-white ">
                <tr>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      GH_M01
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      efficacité des formations
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      M&#60;=70
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                      100%
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                      100%
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      GH_M01
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      efficacité des formations
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      M&#60;=70
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold  flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                      100%
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold  flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                      100%
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      GH_M01
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      efficacité des formations
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      M&#60;=70
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2 animate-ping "></div>{" "}
                      30%
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2 animate-ping "></div>{" "}
                      30%
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      GH_M01
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      efficacité des formations
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      M&#60;=70
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2 animate-ping "></div>{" "}
                      40%
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2 animate-ping "></div>{" "}
                      40%
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          className={
            tabsState === 3
              ? " flex flex-wrap justify-center text-sm font-medium text-center text-gray-500  bg-gray-50 "
              : "hidden"
          }
        >
          <div className=" flex shadow border-b overflow-x-auto md:overflow-x-auto xl:overflow-x-auto">
            <table className=" min-w-full  break-words  ">
              <thead className="text-xs text-white uppercase bg-[#121127] ">
                <tr>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    Code de la mesure
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    Nom de la mesure
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    Norme
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    1er quadrimestre
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    2eme quadrimestre
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    3eme quadrimestre
                  </th>
                </tr>
              </thead>
              <tbody className=" bg-white ">
                <tr>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      GH_M01
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      efficacité des formations
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      M&#60;=70
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                      100%
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                      100%
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                      100%
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      GH_M01
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      efficacité des formations
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      M&#60;=70
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold  flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                      100%
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold  flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                      100%
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold  flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>{" "}
                      100%
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      GH_M01
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      efficacité des formations
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      M&#60;=70
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2 animate-ping "></div>{" "}
                      30%
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2 animate-ping "></div>{" "}
                      30%
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2 animate-ping "></div>{" "}
                      30%
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      GH_M01
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      efficacité des formations
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      M&#60;=70
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2 animate-ping "></div>{" "}
                      40%
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2 animate-ping "></div>{" "}
                      40%
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2 animate-ping "></div>{" "}
                      40%
                    </div>
                  </td>   
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          className={
            tabsState === 4
              ? " flex flex-wrap justify-center text-sm font-medium text-center text-gray-500 bg-gray-50 "
              : "hidden"
          }
        >
          <div className=" flex shadow border-b overflow-x-auto md:overflow-x-auto xl:overflow-x-auto">
            <table className=" min-w-full  break-words  ">
              <thead className="text-xs text-white uppercase bg-[#121127] ">
                <tr>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    Code de la mesure
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    Nom de la mesure
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    Norme
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    1er Trimestre
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    2eme Trimestre
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    3eme Trimestre
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    4eme Trimestre
                  </th>
                </tr>
              </thead>
              <tbody className=" bg-white ">
                <tr>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      GH_M01
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      efficacité des formations
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      M&#60;=70
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2 animate-ping "></div>{" "}
                      60%
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2 "></div>{" "}
                      100%
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2 animate-ping "></div>{" "}
                      40%
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2 "></div>{" "}
                      80%
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      GH_M01
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      efficacité des formations
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      M&#60;=70
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2 animate-ping "></div>{" "}
                      60%
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2 "></div>{" "}
                      100%
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2 animate-ping "></div>{" "}
                      40%
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2 "></div>{" "}
                      80%
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      GH_M01
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      efficacité des formations
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      M&#60;=70
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2 animate-ping "></div>{" "}
                      60%
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2 "></div>{" "}
                      100%
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2 animate-ping "></div>{" "}
                      40%
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2 "></div>{" "}
                      80%
                    </div>
                  </td>
                </tr>
                <tr>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      GH_M01
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      efficacité des formations
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold">
                      M&#60;=70
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2 animate-ping "></div>{" "}
                      60%
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2 "></div>{" "}
                      100%
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2 animate-ping "></div>{" "}
                      40%
                    </div>
                  </td>
                  <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                    <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                      <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2 "></div>{" "}
                      80%
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div
          className={
            tabsState === 5
              ? " flex flex-wrap justify-center text-sm font-medium text-center text-gray-500 bg-gray-50 "
              : "hidden"
          }
        >
          <div className=" flex shadow border-b overflow-x-auto md:overflow-x-auto xl:overflow-x-auto">
            <table className=" min-w-full  break-words  ">
              <thead className="text-xs text-white uppercase bg-[#121127] ">
                <tr>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    Code de la mesure
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    Nom de la mesure
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    Norme
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    janvier-fevrier
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    mars-avril
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    mai-juin
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    juiellet-aout
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    Septembre-octobre
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    novembre-decembre
                  </th>
                </tr>
              </thead>
            </table>
          </div>
          </div>
        <div
          className={
            tabsState === 6
              ? " flex flex-wrap justify-center text-sm font-medium text-center text-gray-500 bg-gray-50 "
              : "hidden"
          }
        >
          <div className=" flex shadow border-b overflow-x-auto md:overflow-x-auto xl:overflow-x-auto">
            <table className=" min-w-full  break-words  ">
              <thead className="text-xs text-white uppercase bg-[#121127] ">
                <tr>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    Code de la mesure
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    Nom de la mesure
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    Norme
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    janvier
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    fevrier
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                  mars
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    avril
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    mai
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    juin
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    juiellet
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    Aout
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    septembre
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    octobre
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    novembre
                  </th>
                  <th
                    scope="col"
                    className="text-left font-medium   tracking-wider py-3 px-6"
                  >
                    decembre
                  </th>
                </tr>
              </thead>
            </table>
          </div>
          </div>
        </div>
      </div>
      </div>
  );
};

export default ResumeIndicateurs;
