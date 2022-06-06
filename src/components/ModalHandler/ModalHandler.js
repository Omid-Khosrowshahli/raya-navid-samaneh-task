import { Modal } from 'antd';
import PieChart from "../PieChart/PieChart";
import BarChart from "../BarChart/BarChart";

const ModalHandler = (props) => {
  const { isModalVisible, setIsModalVisible, handleReportSave, whichModal, setWhichModal, reportName, setReportName, charts } = props;

  const handleCancel = () => {
    setIsModalVisible(false);
  }

  const handleOk = () => {
    setIsModalVisible(false);

    if (whichModal.save && reportName) {
      localStorage.setItem(reportName, JSON.stringify(charts));
      setReportName('');
    }
  }

  const reports = () => {
    let arr = [];
    for (let i = 0; i < localStorage.length; i++) {
      arr.push(localStorage.key(i));
    }
    return arr;
  }

  return (
    <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
      {whichModal.save &&
        <div>
          <label>Enter report name:</label><br />
          <input type="text" onChange={(event) => handleReportSave(event.target.value)} />
        </div>
      }
      {whichModal.preview &&
        <div>
          {charts.map((item) => {
            if (item.chart === "pie") {
            return (
                <div className="each-chart">
                <PieChart chartData={item.data} />
                </div>
            )
            }

            if (item.chart === "bar") {
            return (
                <div className="each-chart">
                <BarChart chartData={item.data} />
                </div>
            )
            }
          })}
        </div> 
      }
      {whichModal.reports &&
        <div>
          <ul>
          {reports().map((item) => (
            <li>{item}</li>
          ))}
          </ul>
        </div>
      }
      {whichModal.json &&
        <p>{JSON.stringify(charts)}</p>
      }
    </Modal>
  );
}

export default ModalHandler;