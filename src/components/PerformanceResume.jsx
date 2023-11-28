import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { performanceData } from "../features/performanceSlice";

const PerformanceResume = () => {
  const showperformance = useSelector((state) => state.performancereduc);

  const user = JSON.parse(localStorage.getItem("user"));
  console.log("la direction :", user.direction.id);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(performanceData(user.direction.id));
  }, []);

  // Rendu conditionnel
  function getColor(result, norm) {
    const percentage = (result / norm) * 100;

    if (percentage < 50) {
      return "bg-red-500 animate-pulse";
    } else if (percentage >= 50 && percentage < 100) {
      return "bg-orange-500";
    } else if (percentage === 100) {
      return "bg-green-500";
    } else {
      return "bg-red-500";
    }
  }

  function getEmoji(result, norm) {
    const percentage = (result / norm) * 100;

    if (percentage < 50) {
      return "😡"; // Angry emoji
    } else if (percentage >= 50 && percentage < 100) {
      return "😐"; // Neutral face emoji
    } else if (percentage === 100) {
      return "😍"; // Heart eyes emoji
    }
  }

  // Filter data to get the last entry for each indicator
  const lastEntries = {};

  if (Array.isArray(showperformance.data)) {
    showperformance.data.forEach((performanceItem) => {
      const {
        nomMesure,
        resultatObtenu,
        norme,
        periodicite,
        periode,
        id,
      } = performanceItem;

      if (!lastEntries[nomMesure]) {
        lastEntries[nomMesure] = {
          entries: [],
        };
      }

      // Add the entry to the list for the indicator
      lastEntries[nomMesure].entries.push(performanceItem);
    });

    return (
      <div>
        <div className="">
          <div className="block py-2 rounded-lg border  shadow-lg bg-white">
            <div className="px-6 border-b text-gray-900 border-gray-300">
              <h1 className="text-xl  py-2">
                {" "}
                Resumé de la performance des indicateurs
              </h1>
            </div>
            <div className="flex flex-col">
              <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                  <div className="overflow-hidden">
                    {showperformance.loading && <div>Loading...</div>}
                    {!showperformance.loading &&
                      showperformance.data.length === 0 && (
                        <div>No data available.</div>
                      )}

                    <table className="min-w-full">
                      <thead className="border-b bg-[#121127]">
                        <tr>
                          <th
                            scope="col"
                            className="text-xs  text-white px-6 py-2 text-left"
                          >
                            Nom de la mesure
                          </th>
                          <th
                            scope="col"
                            className="text-xs  text-white px-6 py-2 text-left"
                          >
                            Cible
                          </th>
                          <th
                            scope="col"
                            className="text-xs  text-white px-6 py-2 text-left"
                          >
                            Frequence de Calcul
                          </th>
                          <th
                            scope="col"
                            className="text-xs  text-white px-6 py-2 text-left"
                          >
                            Periode
                          </th>
                          <th
                            scope="col"
                            className="text-xs  text-white px-6 py-2 text-left"
                          >
                            Norme
                          </th>
                          <th
                            scope="col"
                            className="text-xs  text-white px-6 py-2 text-left"
                          >
                            Resultat Actuel
                          </th>
                          <th
                            scope="col"
                            className="text-xs  text-white px-6 py-2 text-left"
                          >
                            Moyenne
                          </th>
                        </tr>
                      </thead>
                      {!showperformance.loading && showperformance.data.length ? (
                        <tbody>
                          {Object.keys(lastEntries).map((nomMesure, index) => {
                            const {
                              norme,
                              periodicite,
                              periode,
                              entries,
                            } = lastEntries[nomMesure];

                            // Calculate the average for this indicator
                            const moyenne =
                              entries.reduce(
                                (sum, entry) =>
                                  sum + parseFloat(entry.resultatObtenu),
                                0
                              ) / entries.length;

                            // Get the last entry for this indicator
                            const lastEntry = entries[entries.length - 1];

                            return (
                              <tr
                                className={`${index % 2 === 0
                                  ? "bg-gray-100"
                                  : "bg-white"} border-b`}
                                key={lastEntry.id}
                              >
                                <td className="px-6 py-2 whitespace-nowrap text-xs  text-gray-900">
                                  {nomMesure}
                                </td>
                                <td className="text-xs text-gray-900  px-6 py-2 whitespace-nowrap">
                                  {lastEntry.norme}
                                </td>
                                <td className="text-xs text-gray-900  px-6 py-2 whitespace-nowrap">
                                  {lastEntry.periodicite}
                                </td>
                                <td className="text-xs text-gray-900  px-6 py-2 whitespace-nowrap">
                                  {lastEntry.periode}
                                </td>
                                <td className="text-xs text-gray-900  px-6 py-2 whitespace-nowrap">
                                  {lastEntry.norme}
                                </td>
                                <td className="text-xs text-gray-900  px-6 py-2 whitespace-nowrap">
                                  {lastEntry.resultatObtenu}{" "}
                                  {getEmoji(
                                    Number(lastEntry.resultatObtenu),
                                    Number(norme)
                                  )}
                                  <div className="w-full mb-2">
                                    <div className="overflow-hidden h-2 text-xs flex rounded bg-green-200">
                                      <div
                                        style={{
                                          width: `${
                                            (Number(lastEntry.resultatObtenu) /
                                              Number(norme)) *
                                            100
                                          }%`,
                                        }}
                                        className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center ${getColor(
                                          Number(lastEntry.resultatObtenu),
                                          Number(norme)
                                        )}`}
                                      ></div>
                                    </div>
                                  </div>
                                </td>
                                <td className="text-xs text-gray-900  px-6 py-2 whitespace-nowrap">
                                  {moyenne.toFixed(2)}
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      ) : null}
                      <tfoot>
                        <tr className="border-b">
                          <td className="px-6 py-2 whitespace-nowrap text-xs  text-gray-900"></td>
                          <td className="px-6 py-2 whitespace-nowrap text-xs  text-gray-900"></td>
                          <td className="px-6 py-2 whitespace-nowrap text-xs  text-gray-900"></td>
                          <td className="px-6 py-2 whitespace-nowrap text-xs  text-gray-900">
                            Moyenne:
                          </td>
                          <td className="px-6 py-2 whitespace-nowrap text-xs  text-orange-500"></td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return <div>No data available.</div>;
  }
};

export default PerformanceResume;
