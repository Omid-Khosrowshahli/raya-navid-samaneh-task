import { Pie } from "@ant-design/plots";

const PieChart = ({ chartData }) => {
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
    appendPadding: 10,
    data: dataProvider(),
    angleField: "value",
    colorField: "type",
    radius: 0.9,
    label: {
      type: "inner",
      offset: "-30%",
      content: ({ percent }) => `${(percent * 100).toFixed(0)}%`,
      style: {
        fontSize: 12,
        textAlign: "center",
        cursor: "pointer"
      },
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };
  return <Pie {...config} />;
};

export default PieChart;
