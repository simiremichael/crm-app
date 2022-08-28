import React from 'react'
import ReactECharts from 'echarts-for-react';

const option = {
    title: {
      text: 'Issues',
      subtext: '',
      left: 'center'
    },
    tooltip: {
      trigger: 'item'
    },
    legend: {
      orient: 'vertical',
      left: 'left'
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: '50%',
        data: [
          { value: 987, name: 'Accident' },
          { value: 909, name: 'Bills' },
          { value: 721, name: 'Riders' },
          { value: 795, name: 'Lost id' },
          { value: 181, name: 'Others' },
          { value: 737, name: 'Insurance' },
        ],
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowOffsetX: 0,
            shadowColor: 'rgba(0, 0, 0, 0.5)'
          }
        }
      }
    ]
  };
  

function IssueChart() {
  return (
    <div>
        <ReactECharts option={option} />
    </div>
  )
}

export default IssueChart