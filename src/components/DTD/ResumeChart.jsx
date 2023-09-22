import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2'
import { useSelector } from 'react-redux';
import { number } from 'yup';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const ResumeChart = () => {
    const showUserData = useSelector((state) => state.userDatas)
    
    console.log("the user datas", showUserData);

    
   const data ={
    
    labels:!showUserData.loading && showUserData.users.length ? (
    showUserData.users.map((calcul) => (
        calcul.periode
    ))):null,
    datasets:[
        {
            label:'Resultat obtenu',
            data:!showUserData.loading && showUserData.users.length ? (
              showUserData.users.map((calcul) => (
                calcul.resultatObtenu
              ))):null,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
        }
    ]
   }
   const options= {
    responsive: true,
    plugins: {
      legend: {
        align: "end",
        position: "bottom", 
      },
      title: {
        display: true,
        text: 'Graphique des Indicateurs de Calcul',
      },
    },
    scales:{
        y:
            {
                    min:0,
                    max:100,
                    stepSize:1
            }
    }
   } 

      return (
        <>
          <div className=" mt-6 flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-white">
          <div className="rounded-t mb-0 px-4 py-3 bg-transparent">
          <div className="flex flex-wrap items-center">
            <div className=" w-full max-w-full flex-grow flex-1">
              <h6 className="uppercase text-blueGray-100 mb-1 text-xs font-semibold">
                Overview
              </h6>
              <h2 className=" text-xl font-semibold"> Délai de livraison des applicatifs </h2>
            </div>
          </div>
        </div>
            <div className=" pl-4 flex-auto ">
              {/* Chart */}
             <div className=" h-350-px">

                <Line data={data} options={options}/>
             </div>
              </div>
            </div>
          
        </>
  )
}

export default ResumeChart
