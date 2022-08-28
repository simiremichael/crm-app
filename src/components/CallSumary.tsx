import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Calls Summary',
      },
    },
  };

export const data = {
  labels: ['Inbound', 'Outbound', ],
  datasets: [
    {
      label: '# of Votes',
      data: [124, 114,],
      backgroundColor: [
        '#1982AF',
        '#31980D',
      ],
      borderColor: [
        '#1982AF',
        '#31980D',
        
      ],
      borderWidth: 1,
      ResizeObserverSize,
    },
  ],
};
function CallSumary() {
  return (
    <div>
        <Doughnut options={options} data={data} />;
    </div>
  )
}

export default CallSumary