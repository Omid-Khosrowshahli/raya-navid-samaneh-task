import { Column } from '@ant-design/plots';

const BarChart = ({ chartData }) => {
  const dataProvider = () => {
    let data = [];
    if (chartData.length > 0) {
      data = [...chartData];
    }
    else {
      data.push({
          type: "No data yet",
          value: 0
        })
    }
    return data;
  }

  const config = {
    data: dataProvider(),
    xField: 'type',
    yField: 'value',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
  };
  return <Column {...config} />;
};

export default BarChart;