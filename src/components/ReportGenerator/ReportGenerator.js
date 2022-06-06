import { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import ChartManipulation from "../ChartManipulation/ChartManipulation";
import Charts from "../Charts/Charts";
import "./ReportGenerator.css";
import Operations from "../Operations/Operations";
import 'antd/dist/antd.css';
import ModalHandler from "../ModalHandler/ModalHandler";

function ReportGenerator() {
  const [charts, setCharts] = useState([]);
  const [id, setId] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [whichModal, setWhichModal] = useState({save: false, preview: false, reports: false, json: false});
  const [reportName, setReportName] = useState('');

  const handleAddData = (name, value) => {
    let newCharts = [];
    let newList;

    charts.forEach(item => {
      if (item.id === id) {
        newList = [...item.data, {type: name, value: parseInt(value)}]
        item = {...item, data: [...newList]};
        newCharts.push(item);
      }
      else {
        newCharts.push(item);
      }
    })
    setCharts(newCharts);
  }
    
  const handleReportSave = (name) => {
    setReportName(name);
  }
  
  return (
    <div className="ReportGenerator">
      <Operations
        setIsModalVisible={setIsModalVisible}
        setWhichModal={setWhichModal}
      />
      <div className="container">
        <Charts charts={charts} setCharts={setCharts} />
        <Dashboard charts={charts} id={id} setId={setId} />
        <ChartManipulation
          charts={charts}
          setCharts={setCharts}
          handleAddData={handleAddData}
          id={id}
        />
      </div>
      <ModalHandler
        isModalVisible={isModalVisible}
        setIsModalVisible={setIsModalVisible}
        whichModal={whichModal}
        setWhichModal={setWhichModal}
        handleReportSave={handleReportSave}
        reportName={reportName}
        setReportName={setReportName}
        charts={charts}
      />
    </div>
  );
}

export default ReportGenerator;
