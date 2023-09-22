import React, { useState } from 'react'
import DepartmentStatisticsCard from './DepartmentStatisticsCard';


const Statistiques = () => {

  const departmentData = [
    {
      departmentName: 'DTD',
      services: [
        {
          name: 'Temps de livraison des etats statistiques',
          totalEmployees: 20,
          averageSalary: 55000,
        },
        {
          name: 'Delai de livraison des Applicatif',
          totalEmployees: 10,
          averageSalary: 60000,
        },
        {
          name: '% de Résolution des Cas',
          totalEmployees: 10,
          averageSalary: 60000,
        },
        {
          name: 'suivi de la disponibilité de l application Qits',
          totalEmployees: 10,
          averageSalary: 60000,
        },
      ],
    },
    {
      departmentName: 'DQGR',
      services: [
        {
          name: 'Exactitude du stockage et de la nomenclature',
          totalEmployees: 20,
          averageSalary: 55000,
        },
      ],
    },
    // Add more department data as needed
  ];

  const [selectedDepartment, setSelectedDepartment] = useState(departmentData[0]);

  // Handle department selection
  const handleDepartmentChange = (event) => {
    const selectedDepartmentName = event.target.value;
    const selectedDepartmentInfo = departmentData.find(
      (department) => department.departmentName === selectedDepartmentName
    );
    setSelectedDepartment(selectedDepartmentInfo);
  };

  return (
    <div>
       {/* < div className="relative mx-4 my-4 flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
        <div className="flex-auto p-2">
          <div className="flex flex-wrap">
            <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
              <h5 className="text-gray-400 uppercase font-bold text-xl">
                DTD
              </h5>
              <div className=" flex flex-wrap">
              <div className=" flex flex-wrap">
              <p className="text-sm text-gray-400 ">
            <span className=  "text-red-500  mr-2">
              <i
                className={
                    "fas fa-arrow-up "
                }
              ></i>{" "}
              100%
            </span>
          </p>
              <span className="font-semibold text-xs text-gray-700 mr-2">
                DTD_M55
              </span>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}


 <h3 className="text-xl font-semibold m-4">Performance Par direction</h3>

      {/* Dropdown button to select department */}
      <div className="m-4">
        <label htmlFor="departmentSelect" className="mr-2 font-semibold">
          Choisir La direction:
        </label>
        <select
          id="departmentSelect"
          onChange={handleDepartmentChange}
          value={selectedDepartment.departmentName}
          className="border rounded-md py-1 px-2"
        >
          {departmentData.map((department) => (
            <option key={department.departmentName} value={department.departmentName}>
              {department.departmentName}
            </option>
          ))}
        </select>
      </div>

      {/* Display department statistics based on selection */}
      <DepartmentStatisticsCard
        departmentName={selectedDepartment.departmentName}
        services={selectedDepartment.services}
      />  
    </div>
  )
}

export default Statistiques
