import React from 'react';

const DepartmentStatisticsCard = ({ departmentName, services }) => {
  return (
    <div className="  bg-teal-500 rounded-lg shadow-md p-6 m-4 border-b">
      
      <h3 className="text-xl text-white font-semibold mb-4">{departmentName}</h3>
      <div className=" flex flex-wrap">
        {services.map((service, index) => (
            <div className=' flex-auto p-4 bg-white rounded-lg shadow-md  m-4 '>
          <div key={index} className=" flex flex-wrap">
                 <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
      <h5 className="text-blueGray-400 uppercase font-bold text-xs">{service.name}</h5>
      <span className="font-semibold text-xl text-blueGray-700">{service.totalEmployees}</span>
    </div>
            {/* <p className="font-bold ">{service.name}</p>
            <div className="ml-4 flex flex-wrap">
      <p className="text-gray-600 flex items-center justify-center text-xl m-4">Monyenne</p>
      <p className="w-16 h-16 bg-[#121127] text-white rounded-full flex items-center justify-center text-3xl font-bold">{service.totalEmployees}</p>
    </div> */}
      <div className="relative w-auto pl-4 flex-initial">
      <div
        className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500"
      >
        <i className="far fa-chart-bar"></i>
      </div>
    </div>
               </div>
           <p className="text-sm text-blueGray-400 mt-4">
           <span className="text-emerald-500 mr-2"
             ><i className="fas fa-arrow-up"></i> 3.48%</span
           ><span className="whitespace-nowrap">Since last month</span>
         </p>
             </div> 
        ))}
      </div>
    </div>
  );
};

export default DepartmentStatisticsCard;
