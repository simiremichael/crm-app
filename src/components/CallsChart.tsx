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



  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  export const options = {
    plugins: {
      title: {
        display: true,
        text: 'Calls',
      },
    },
    responsive: true,
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
  };
  
  const labels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  
  export const data = {
    labels,
    datasets: [
      {
        label: 'Total Calls Received',
        data: [10,5,20,10, 5, 6, 10,15, 22, 4, 12 ],
        backgroundColor: '#432344'
      },
      {
        label: 'Repeated Calls',
        data: [-4, -5, -10, -15, -2,-8,-20,-22,-19,-12,-7,-11],
        backgroundColor: '#D9D9D9',
      },
    ],
  };
  

function CallsChart() {
  return (
    <div>
   <Bar options={options} data={data} />;
    </div>
  )
}

export default CallsChart