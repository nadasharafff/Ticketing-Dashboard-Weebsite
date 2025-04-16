import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = () => {
  // Data for the chart
  const data = {
    labels: ['AWS', 'AWS', 'AWS', 'AWS', 'AWS', 'AWS', 'AWS','AWS'],
    datasets: [
      {
        label: 'My Dataset',
        data: [13, 6, 10, 6, 3, 5, 8,6], // Values for each segment
        backgroundColor: [
          'rgba(121, 102, 167, 1)', // Purple
          'rgba(29, 35, 163, 1)', // Blue
          'rgba(0, 160, 153, 1)', // Mint green
          'rgba(180, 50, 50, 1)', // Burgundy
          'rgba(255, 0, 0, 1)', // Red
          'rgba(40, 199, 111, 1)', // Green
          'rgba(208, 208, 208, 1)', // Lavander
          'rgba(227, 222, 86, 1)', // yellow
        ],
        borderColor: [
          'rgba(121, 102, 167, 1)', // White border for all segments
          'rgba(29, 35, 163, 1)',
          'rgba(0, 160, 153, 1)',
          'rgba(180, 50, 50, 1)',
          'rgba(255, 0, 0, 1',
          'rgba(40, 199, 111, 1)',
          'rgba(208, 208, 208, 1)',
          'rgba(227, 222, 86, 1)',
        ],
        borderWidth: 1, // Border width
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom', // Position of the legend
      },
     
    },
  };

  return <Doughnut data={data} options={options} />;
};

export default DoughnutChart;