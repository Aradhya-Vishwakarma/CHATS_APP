import React from "react";
import { black } from "../../constants/color";
import { Line, Doughnut } from "react-chartjs-2";
import {
  CategoryScale,
  Chart as ChartJS,
  Tooltip,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend,
} from "chart.js";
import { getLast7Dyas } from "../../libs/features";

ChartJS.register(
  CategoryScale,
  Tooltip,
  Filler,
  LinearScale,
  PointElement,
  LineElement,
  ArcElement,
  Legend
);

const labels = getLast7Dyas();

const lineChartOptions = {
  responsive: true, // Fixed typo
  plugins: {
    legend: {
      position: "top",
      display: false,
    },
    title: {
      display: false,
      text: "Chart.js Line Chart",
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
    },
    y: {
      grid: {
        display: false,
      },
    },
  },
};

export const LineChart = ({value=[]}) => {
  const data = {
    labels,
    datasets: [
      {
        label: "Revenue",
        data: value,
        borderColor: "#36A2EB",
        backgroundColor: "rgba(54, 162, 235, 0.2)",
        fill: true,
        tension: 0.1,
      },
    ],
  };

  return <Line data={data} options={lineChartOptions} />;
};

const doughnutChartOptions = {
  responsive: true,
  plugins: {
    legend: {
      // position: "top",
      display: false,
    },
    title: {
      display: false,
      // text: "Chart.js Doughnut Chart",
    },
  },
  cutout: 120,
};

export const DoughnutChart = ({value=[] ,labels=[]}) => {
  const data = {
    labels,
    datasets: [
      {
        data: value,
       
        fill: true,
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
        ],
        hoverBackgroundColor: [
          "rgba(20, 125, 231, 0.66)",
          "rgba(255, 99, 132, 0.2)",
        ],
borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        offset: 40,
        tension: 0.4,
      },
    ],
  };

  return <Doughnut  
  style={{ zIndex:10 }}
  data={data} options={doughnutChartOptions} />;

  // export {DoughnutChart};
};
