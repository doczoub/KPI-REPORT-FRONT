import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userData } from "../features/authSlice";
import { useAuth } from "./Auth";
import HeaderComuns from "./HeaderComuns";
import SideBar from "./SideBar";

const ResumeIndicateurs = () => {
  const [tabsState, setTabsState] = useState(1);

  const changeTabs = (index) => {
    setTabsState(index);
  };

  const [calcul, setCalcul] = useState([]);
  const [loading, setLoading] = useState(true);
  const auth = useAuth();
  const showUserData = useSelector((state) => state.userDatas);
  console.log("the user datas", showUserData);

  const user = JSON.parse(localStorage.getItem("user"));

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(userData(user.id));
    // setCalcul(calcul.id);
  }, []);
  return (
    <div>
      <div className="w-[30%] mr-10">
        <SideBar />
      </div>
      <HeaderComuns />
      <h1 className="w-full bg-teal-900 flex justify-center text-white">
        RESUME DU SUIVI DE MES INDICATEURS
      </h1>
      <div className="mt-8" >
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
                      Periode
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
                {!showUserData.loading && showUserData.users.length ? (
                  <tbody className=" bg-white ">
                    {showUserData.users.map((calcul) => (
                      <tr key={calcul.id}>
                        <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                          <div className="text-sm  text-gray-900 font-semibold">
                            {calcul.codeMesure}
                          </div>
                        </td>
                        <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                          <div className="text-sm  text-gray-900 font-semibold">
                            {calcul.nomMesure}
                          </div>
                        </td>
                        <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                          <div className="text-sm  text-gray-900 font-semibold">
                            {calcul.periode}
                          </div>
                        </td>
                        <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                          <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                            {calcul.norme}
                          </div>
                        </td>
                        <td className="  text-left py-4 px-6 whitespace-nowrap font-medium text-sm">
                          <div className="text-sm  text-gray-900 font-semibold flex flex-wrap items-center">
                            {calcul.resultatObtenu >= 90  ? <div className="h-2.5 w-2.5 rounded-full bg-green-500 mr-2"></div>:
                            <div className="h-2.5 w-2.5 rounded-full bg-red-500 mr-2 animate-ping"></div> 
                            }{calcul.resultatObtenu }
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                ) : null}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeIndicateurs;
