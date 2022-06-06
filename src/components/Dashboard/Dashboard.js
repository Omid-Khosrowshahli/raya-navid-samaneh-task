import "./Dashboard.css";
import PieChart from "../PieChart/PieChart";
import BarChart from "../BarChart/BarChart";

const Dashboard = ({ charts, id, setId }) => {
  return (
    <div className="dashboard">
      {charts.map((item) => {
        if (item.chart === "pie") {
          return (
            <div className={item.id === id ? "selected" : "each-chart"} style={{width: '45%', height: 250}} onClick={() => setId(item.id)}>
              <PieChart chartData={item.data} />
            </div>
          )
        }

        if (item.chart === "bar") {
          return (
            <div className={item.id === id ? "selected" : "each-chart"} onClick={() => setId(item.id)}>
              <BarChart chartData={item.data} />
            </div>
          )
        }
      })}
    </div>
  );
};

export default Dashboard; 
