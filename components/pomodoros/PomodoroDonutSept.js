import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const data = {
  labels: ['Async Actions Redux Thunk', 'Redux Store Design'],
  datasets: [
    {
      data: [5, 2],
      backgroundColor: ['#01a9b4', '#e7305b'],
      hoverBackgroundColor: ['#01a9b4', '#e7305b'],
    },
  ],
}

const option = {
  tooltips: {
    callbacks: {
      label: function (tooltipItem, data) {
        var dataset = data.datasets[tooltipItem.datasetIndex]
        var meta = dataset._meta[Object.keys(dataset._meta)[0]]
        var total = meta.total
        var currentValue = dataset.data[tooltipItem.index]
        var percentage = parseFloat(((currentValue / total) * 100).toFixed(1))
        return percentage + '%'
      },
      title: function (tooltipItem, data) {
        return data.labels[tooltipItem[0].index]
      },
    },
  },
}

export default function PomodoroDonut() {
  return (
    <div>
      <h2 className="text-center">September Overview</h2>
      <Doughnut data={data} options={option} />
    </div>
  )
}
