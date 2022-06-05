import "./Charts.css";
import { v4 as uuidv4 } from "uuid";

const Charts = ({ charts, setCharts }) => {
  const addPieChart = () => {
    let pie = {
      chart: "pie",
      id: uuidv4(),
      data: []
    };

    setCharts([...charts, pie]);
  };

  const addBarChart = () => {
    let pie = {
      chart: "bar",
      id: uuidv4(),
      data: []
    };

    setCharts([...charts, pie]);
  }
  
  return (
    <div className="charts">
      <div className="item" onClick={addPieChart}>
        <span class="material-icons">
          pie_chart
        </span>
        <p style={{opacity: '0.5'}}>Add Pie chart</p>
      </div>
      <div className="item" onClick={addBarChart}>
        <span class="material-icons">
        bar_chart
        </span>
        <p style={{opacity: '0.5'}}>Add Bar chart</p>
      </div>
    </div>
  );
};

export default Charts;
