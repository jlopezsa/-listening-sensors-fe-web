import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
// import { Line } from 'react-chartjs-2';
import { LineGraphic, ContainerLine } from '../atomns/LineGraphic';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Accelerometer',
    },
  },
  scales: {
    yAxis: {
      min: -2,
      max: 2,
    },
  },
};

const labels = [0.000, 1.001];
// const labels = labelsInt.toFixed(2);

function XYZgraphic(props) {
  const { sensor } = props;
  const xyzValues = useSelector((state) => (
    sensor === 1 ? state.dataAccelerometer : state.dataGyroscope));
  const { dataX, dataY, dataZ } = xyzValues;
  const data = {
    labels,
    datasets: [
      {
        label: 'x',
        data: [dataX, dataX],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'y',
        data: [dataY, dataY],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
      {
        label: 'z',
        data: [dataZ, dataZ],
        borderColor: 'rgb(53, 162, 2)',
        backgroundColor: 'rgba(53, 162, 235, 0.1)',
      },
    ],
  };
  return (
    <ContainerLine>
      <LineGraphic options={options} data={data} />
    </ContainerLine>
  );
}

XYZgraphic.propTypes = {
  sensor: PropTypes.number.isRequired,
};

export default XYZgraphic;
