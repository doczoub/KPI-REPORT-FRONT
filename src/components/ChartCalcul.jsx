import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ReactApexChart from 'react-apexcharts';
import { ByYearData } from '../features/ByYearSlice';
import { ByPreYearData } from '../features/ByPreYearSlice';

const ChartCalcul = () => {
  const [calculind, setCalculind] = useState(null);
  const [loading, setLoading] = useState(true);

  const params = useParams();
  const id = params.id;

  const showUserData = useSelector((state) => state.parAn);
  const showUserData1 = useSelector((state) => state.parAnPre);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(ByYearData(id));
    dispatch(ByPreYearData(id));
  }, [dispatch, id]);

  useEffect(() => {
    const getIndicateurData = async () => {
      try {
        const response = await axios.get(`http://localhost:8080/api/v1/indicateur/${id}`);
        setCalculind(response);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    getIndicateurData();
  }, [id]);

  if (showUserData.loading || showUserData1.loading) {
    return <div>Loading...</div>;
  }

  const donnee = showUserData.datas.map((calcul) => calcul.resultatObtenu);
  const donneex = showUserData.datas.map((calcul) => calcul.periode);
  const donnee1 = showUserData1.datas.map((calcul) => calcul.resultatObtenu);
  const donneex1 = calculind?.data?.norme || null;

  const calculSeries = [
    {
      name: 'Resultat 2023',
      type: 'column',
      width: '80%',
      label: 'Resultat obtenu',
      data: donnee,
    },
    {
      name: 'Resultat 2022',
      type: 'column',
      width: '80%',
      label: 'Resultat obtenu',
      data: donnee1,
    },
    {
      name: 'Cible',
      type: 'line',
      width: '100%',
      label: 'Cible',
      data: Array(donneex.length).fill(donneex1),
    },
  ];

  const calculOptions = {
    chart: {
      type: 'bar',
      height: 350,
      toolbar: {
        show: true,
      },
    },
    plotOptions: {
      bar: {
        columnWidth: '20%',
        borderRadius: 3,
        endingShape: 'rounded',
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 3,
      colors: ['#4285F4', '#FF9900', '#FF0800'],
    },
    colors: ['#4285F4', '#FF9900', '#FF0800'],
    xaxis: {
      categories: donneex,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
      },
    },
    yaxis: {
      min: 0,
      axisTicks: {
        show: true,
      },
      axisBorder: {
        show: true,
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: 'top',
      horizontalAlign: 'left',
      offsetX: 40,
    },
  };

  return (
    <div className="p-4">
      <div className="bg-white rounded-lg shadow-md p-4">
        <ReactApexChart series={calculSeries} options={calculOptions} className="w-full" />
      </div>
    </div>
  );
};

export default ChartCalcul;
