import React from 'react'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
  } from 'chart.js';
  import { Line } from 'react-chartjs-2';
  //import faker from 'faker';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
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
        text: 'Ticket Per Hour',
      },
    },
  };
  
  const labels = ['7:00','8:00','9:00','10:00','11:00','12:00','13:00','14:00','15:00','16:00','17:00','18:00'];
  
  export const data = {
    labels,
    datasets: [
      {
        fill: true,
        label: 'Tickets Solved',
        data: [150, 450,0,180,200,300,320,100,50,80,180, 60],
        borderColor: 'rgba(100, 71, 170, 1)',
        backgroundColor: 'rgba(100, 71, 170, 0.5)',
      },
      {
        fill: true,
        label: 'Unresolved Tickets',
        data: [50, 20,0,200,120,50,20,80,10,5,100, 50],
        borderColor: 'rgba(246, 82, 52, 1)',
        backgroundColor: 'rgba(246, 82, 52, 0.5)',
      },
    ],
  };

function TicketChart() {
  return (
    <div>
     <Line options={options} data={data} />;
    </div>
  )
}

export default TicketChart