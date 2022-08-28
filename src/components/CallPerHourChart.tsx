import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  //import faker from 'faker';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Call Per Hour',
      },
    },
  };
  
  const labels = ['7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Total Calls Completed',
        data: [3, 5,4,7,6,3,3,8,5,3,4, 6],
        backgroundColor: '#FFC03D',
      },
      {
        label: 'Total Calls Abandoned',
        data: [1,2,0,0,0,2,1,0,3,0,0,1],
        backgroundColor: '#100CED',
      },
    ],
};

function CallPerHourChart() {
  return (
    <div>
        <Bar options={options} data={data} />;
    </div>
  )
}

export default CallPerHourChart


