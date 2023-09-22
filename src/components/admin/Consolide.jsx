import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const Consolide = () => {
  return (
    <div className='bg-white rounded-lg shadow-md p-6 m-4 border-b '>
      <div className="py-3 px-6 border-b text-gray-900 border-gray-300">
        <h1 className="text-2xl font-semibold mb-2 pb-2">
          Resumé de la performance des indicateurs
        </h1>
      </div>
        <Tabs  className=''>
    <TabList className=''>
      <Tab className='inline-block cursor-pointer  p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'>Annuel</Tab>
      <Tab className='inline-block cursor-pointer p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'>Semestriel</Tab>
      <Tab className='inline-block cursor-pointer p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'>quadrimestriel</Tab>
      <Tab className='inline-block cursor-pointer p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'>trimestriel</Tab>
      <Tab className='inline-block cursor-pointer p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300'>mensuiel</Tab>
    </TabList>

    <TabPanel className=''>
    <div className="mt-6 ">
        <div className="block p-6 rounded-lg border mb-2 shadow-lg bg-white ">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  {/* {showperformance.loading && <div>Loading...</div>}
                  {!showperformance.loading &&
                    showperformance.data.length === 0 && (
                      <div>No data available.</div>
                    )} */}

                  <table className="min-w-full">
                    <thead className="border-b bg-[#121127] ">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm   font-semibold text-white  px-6 py-2 text-left"
                        >
                          Code de la Mesure
                        </th>
                        <th
                          scope="col"
                          className="  text-sm font-semibold text-white  px-6 py-2 text-left"
                        >
                          Nom de la Mesure
                        </th>
                        <th
                          scope="col"
                          className="  text-sm font-semibold text-white  px-6 py-2 text-left"
                        >
                          Periodicité
                        </th>
                        <th
                          scope="col"
                          className="  text-sm font-semibold text-white  px-6 py-2 text-left"
                        >
                          Norme
                        </th>
                        <th
                          scope="col"
                          className="  text-sm font-semibold text-white  px-6 py-2 text-left"
                        >
                          Periode
                        </th>
                        <th
                          scope="col"
                          className="  text-sm font-semibold text-white  px-6 py-2 text-left"
                        >
                          Resultat 
                        </th>
                      </tr>
                    </thead>
                    
                      <tbody className="">
                        
                          <tr className="border-b">
                            <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
                              {}
                            </td>
                            <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
                              {}
                            </td>
                            <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
                              {}
                            </td>
                            <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
                              {}
                            </td>
                            <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
                             
                              <div className="w-full mb-2">
                                <div className="overflow-hidden h-2 text-xs flex rounded bg-green-200">
                                  <div
                                   
                                    
                                     
                                 
                                  ></div>
                                </div>
                              </div>
                            </td>
                          </tr>
                      </tbody>
                   
                    <tfoot>
                      <tr className="border-b">
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-gray-900"></td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-gray-900"></td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-gray-900"></td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
                          Moyenne:
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-orange-500">
                          {}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TabPanel>
    <TabPanel className=''>
    <div className="mt-6 ">
        <div className="block p-6 rounded-lg border mb-2 shadow-lg bg-white ">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  {/* {showperformance.loading && <div>Loading...</div>}
                  {!showperformance.loading &&
                    showperformance.data.length === 0 && (
                      <div>No data available.</div>
                    )} */}

                  <table className="min-w-full">
                    <thead className="border-b bg-[#121127] ">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm   font-semibold text-white  px-6 py-2 text-left"
                        >
                          Code de la Mesure
                        </th>
                        <th
                          scope="col"
                          className="  text-sm font-semibold text-white  px-6 py-2 text-left"
                        >
                          Nom de la Mesure
                        </th>
                        <th
                          scope="col"
                          className="  text-sm font-semibold text-white  px-6 py-2 text-left"
                        >
                          Periodicité
                        </th>
                        <th
                          scope="col"
                          className="  text-sm font-semibold text-white  px-6 py-2 text-left"
                        >
                          Norme
                        </th>
                        <th
                          scope="col"
                          className="  text-sm font-semibold text-white  px-6 py-2 text-left"
                        >
                          Periode
                        </th>
                        <th
                          scope="col"
                          className="  text-sm font-semibold text-white  px-6 py-2 text-left"
                        >
                          Resultat 
                        </th>
                      </tr>
                    </thead>
                    
                      <tbody className="">
                        
                          <tr className="border-b">
                            <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
                              {}
                            </td>
                            <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
                              {}
                            </td>
                            <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
                              {}
                            </td>
                            <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
                              {}
                            </td>
                            <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
                             
                              <div className="w-full mb-2">
                                <div className="overflow-hidden h-2 text-xs flex rounded bg-green-200">
                                  <div
                                   
                                    
                                     
                                 
                                  ></div>
                                </div>
                              </div>
                            </td>
                          </tr>
                      </tbody>
                   
                    <tfoot>
                      <tr className="border-b">
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-gray-900"></td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-gray-900"></td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-gray-900"></td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
                          Moyenne:
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-orange-500">
                          {}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TabPanel>
    <TabPanel className=''>
    <div className="mt-6 ">
        <div className="block p-6 rounded-lg border mb-2 shadow-lg bg-white ">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  {/* {showperformance.loading && <div>Loading...</div>}
                  {!showperformance.loading &&
                    showperformance.data.length === 0 && (
                      <div>No data available.</div>
                    )} */}

                  <table className="min-w-full">
                    <thead className="border-b bg-[#121127] ">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm   font-semibold text-white  px-6 py-2 text-left"
                        >
                          Code de la Mesure
                        </th>
                        <th
                          scope="col"
                          className="  text-sm font-semibold text-white  px-6 py-2 text-left"
                        >
                          Nom de la Mesure
                        </th>
                        <th
                          scope="col"
                          className="  text-sm font-semibold text-white  px-6 py-2 text-left"
                        >
                          Periodicité
                        </th>
                        <th
                          scope="col"
                          className="  text-sm font-semibold text-white  px-6 py-2 text-left"
                        >
                          Norme
                        </th>
                        <th
                          scope="col"
                          className="  text-sm font-semibold text-white  px-6 py-2 text-left"
                        >
                          Periode
                        </th>
                        <th
                          scope="col"
                          className="  text-sm font-semibold text-white  px-6 py-2 text-left"
                        >
                          Resultat 
                        </th>
                      </tr>
                    </thead>
                    
                      <tbody className="">
                        
                          <tr className="border-b">
                            <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
                              {}
                            </td>
                            <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
                              {}
                            </td>
                            <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
                              {}
                            </td>
                            <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
                              {}
                            </td>
                            <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
                             
                              <div className="w-full mb-2">
                                <div className="overflow-hidden h-2 text-xs flex rounded bg-green-200">
                                  <div
                                   
                                    
                                     
                                 
                                  ></div>
                                </div>
                              </div>
                            </td>
                          </tr>
                      </tbody>
                   
                    <tfoot>
                      <tr className="border-b">
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-gray-900"></td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-gray-900"></td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-gray-900"></td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
                          Moyenne:
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-orange-500">
                          {}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TabPanel>
    <TabPanel className=''>
    <div className="mt-6 ">
        <div className="block p-6 rounded-lg border mb-2 shadow-lg bg-white ">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  {/* {showperformance.loading && <div>Loading...</div>}
                  {!showperformance.loading &&
                    showperformance.data.length === 0 && (
                      <div>No data available.</div>
                    )} */}

                  <table className="min-w-full">
                    <thead className="border-b bg-[#121127] ">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm   font-semibold text-white  px-6 py-2 text-left"
                        >
                          Code de la Mesure
                        </th>
                        <th
                          scope="col"
                          className="  text-sm font-semibold text-white  px-6 py-2 text-left"
                        >
                          Nom de la Mesure
                        </th>
                        <th
                          scope="col"
                          className="  text-sm font-semibold text-white  px-6 py-2 text-left"
                        >
                          Periodicité
                        </th>
                        <th
                          scope="col"
                          className="  text-sm font-semibold text-white  px-6 py-2 text-left"
                        >
                          Norme
                        </th>
                        <th
                          scope="col"
                          className="  text-sm font-semibold text-white  px-6 py-2 text-left"
                        >
                          Periode
                        </th>
                        <th
                          scope="col"
                          className="  text-sm font-semibold text-white  px-6 py-2 text-left"
                        >
                          Resultat 
                        </th>
                      </tr>
                    </thead>
                    
                      <tbody className="">
                        
                          <tr className="border-b">
                            <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
                              {}
                            </td>
                            <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
                              {}
                            </td>
                            <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
                              {}
                            </td>
                            <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
                              {}
                            </td>
                            <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
                             
                              <div className="w-full mb-2">
                                <div className="overflow-hidden h-2 text-xs flex rounded bg-green-200">
                                  <div
                                   
                                    
                                     
                                 
                                  ></div>
                                </div>
                              </div>
                            </td>
                          </tr>
                      </tbody>
                   
                    <tfoot>
                      <tr className="border-b">
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-gray-900"></td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-gray-900"></td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-gray-900"></td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
                          Moyenne:
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-orange-500">
                          {}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TabPanel>
    <TabPanel className=''>
    <div className="mt-6 ">
        <div className="block p-6 rounded-lg border mb-2 shadow-lg bg-white ">
          <div className="flex flex-col">
            <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden">
                  {/* {showperformance.loading && <div>Loading...</div>}
                  {!showperformance.loading &&
                    showperformance.data.length === 0 && (
                      <div>No data available.</div>
                    )} */}

                  <table className="min-w-full">
                    <thead className="border-b bg-[#121127] ">
                      <tr>
                        <th
                          scope="col"
                          className="text-sm   font-semibold text-white  px-6 py-2 text-left"
                        >
                          Code de la Mesure
                        </th>
                        <th
                          scope="col"
                          className="  text-sm font-semibold text-white  px-6 py-2 text-left"
                        >
                          Nom de la Mesure
                        </th>
                        <th
                          scope="col"
                          className="  text-sm font-semibold text-white  px-6 py-2 text-left"
                        >
                          Periodicité
                        </th>
                        <th
                          scope="col"
                          className="  text-sm font-semibold text-white  px-6 py-2 text-left"
                        >
                          Norme
                        </th>
                        <th
                          scope="col"
                          className="  text-sm font-semibold text-white  px-6 py-2 text-left"
                        >
                          Periode
                        </th>
                        <th
                          scope="col"
                          className="  text-sm font-semibold text-white  px-6 py-2 text-left"
                        >
                          Resultat 
                        </th>
                      </tr>
                    </thead>
                    
                      <tbody className="">
                        
                          <tr className="border-b">
                            <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
                              {}
                            </td>
                            <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
                              {}
                            </td>
                            <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
                              {}
                            </td>
                            <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
                              {}
                            </td>
                            <td className="text-sm text-gray-900 font-semibold px-6 py-2 whitespace-nowrap">
                             
                              <div className="w-full mb-2">
                                <div className="overflow-hidden h-2 text-xs flex rounded bg-green-200">
                                  <div
                                   
                                    
                                     
                                 
                                  ></div>
                                </div>
                              </div>
                            </td>
                          </tr>
                      </tbody>
                   
                    <tfoot>
                      <tr className="border-b">
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-gray-900"></td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-gray-900"></td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-gray-900"></td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-gray-900">
                          Moyenne:
                        </td>
                        <td className="px-6 py-2 whitespace-nowrap text-sm font-semibold text-orange-500">
                          {}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </TabPanel>
  </Tabs>
  
    </div>
  )
}

export default Consolide
