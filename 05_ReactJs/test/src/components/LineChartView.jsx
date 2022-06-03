import React, { memo } from 'react';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title,
Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale,PointElement , LineElement, Title, Tooltip, Legend);

const LineChartView = ({ chartData: { category, date } }) => {
  console.log(category,date);

  // 그래프 옵션
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'COVID19',
      },
    },
  };

  const data = {
    labels: date,
    datasets: [
      {
        // 그래프 제목
        label: '명',
        backgroundColor: '#30bcd16e',
        borderColor: '#30bcd1f6',
        borderWidth: 2,
        data: category,
      },
    ],
  };

  return <Line data={data} options={options} />;
};

// Uncaught TypeError: Cannot read properties of undefined (reading 'category')
// 계속 오류가 났던 이유 ... 기본값을 안줬다..
LineChartView.defaultProps = {
  chartData: {
    category: [],
    date: [],
  },
};

export default memo(LineChartView);
