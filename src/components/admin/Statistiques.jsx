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
