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
      data: [0, 2, 2, 4, 5, 0, 1],
    },
    {
      label: 'Average Pomodoros',
      type: 'line',
      data: [0, 0.5, 0.5, 1, 1.25, 0, 0.25],
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
      <h2 className="text-center">August Pomodoro Data</h2>
      <div className="text-center">
        <Bar data={data} width={100} height={350} options={{ maintainAspectRatio: false }} />
      </div>
    </div>
  )
}
