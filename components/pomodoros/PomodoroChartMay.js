import React from 'react'
import { Bar } from 'react-chartjs-2'

const data = {
  labels: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  datasets: [
    {
      label: 'Pomodoros',
      backgroundColor: 'rgba(255,99,132,0.2)',
      borderColor: 'rgba(255,99,132,1)',
      borderWidth: 1,
      hoverBackgroundColor: 'rgba(255,99,132,0.4)',
      hoverBorderColor: 'rgba(255,99,132,1)',
      data: [8, 6, 10, 4, 8, 16, 8],
    },
    {
      label: 'Average Pomodoros',
      type: 'line',
      data: [2, 1.5, 2.5, 1, 2, 4, 2],
      fill: false,
      borderColor: 'rgba(126, 189, 180, 0.7)',
      backgroundColor: 'rgba(126, 189, 180, 0.7)',
      pointBorderColor: 'rgba(126, 189, 180, 0.2)',
      pointBackgroundColor: '#7ebdb4',
      pointHoverBackgroundColor: '#7ebdb4',
      pointHoverBorderColor: '#7ebdb4',
    },
  ],
}

export default function BarChart() {
  return (
    <div>
      <h2 className="text-center">May Pomodoro Data</h2>
      <div className="relative">
        <Bar data={data} width={100} height={200} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  )
}
