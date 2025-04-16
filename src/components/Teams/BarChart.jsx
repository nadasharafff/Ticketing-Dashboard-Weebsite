import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const StackedBarChart = () => {
  // Data for the chart
  const data = {
    labels: [
      'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ], // Labels for 11 bars
    datasets: [
      {
        label: 'AS400',
        data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10 ], // Values for the first segment of each bar
        backgroundColor: 'rgba(208, 208, 208, 1)', // Purple
      },
      {
        label: 'AS400',
        data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,10], // Values for the second segment of each bar
        backgroundColor: 'rgba(121, 102, 167, 1)', // Lavander
      },
      {
        label: 'AS400',
        data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,10], // Values for the third segment of each bar
        backgroundColor: 'rgba(0, 160, 153, 1)', // Navy blue
      },
      {
        label: 'AS400',
        data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,10], // Values for the fourth segment of each bar
        backgroundColor: 'rgba(180, 50, 50, 1)', // Burgundy
      },
      {
        label: 'AS400',
        data: [10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10,10], // Values for the fifth segment of each bar
        backgroundColor: 'rgba(29, 35, 163, 1)', // blue
      },
      {
        label: 'AS400',
        data: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,30], // Values for the sixth segment of each bar
        backgroundColor: 'rgba(255, 0, 0, 1)', // red
      },
      {
        label: 'AS400',
        data: [30, 30, 30, 30, 30, 30, 30, 30, 30, 30,30,30], // Values for the seventh segment of each bar
        backgroundColor: 'rgba(102, 190, 121, 1)', // Mint green
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
      title: {
        display: true,
      },
    },
    scales: {
      x: {
        stacked: true, // Enable stacking for the x-axis
        grid: {
          display: false, // Hide grid lines for the x-axis
        },
        // Adjust bar width
        categoryPercentage: 0.5, // Controls the percentage of the available width for each category (0 to 1)
        barPercentage: 0.8, // Controls the percentage of the category width for each bar (0 to 1)
      },
      y: {
        stacked: true, // Enable stacking for the y-axis
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default StackedBarChart;