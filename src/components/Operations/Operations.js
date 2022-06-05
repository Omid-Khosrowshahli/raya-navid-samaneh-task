import './Operations.css';

const Operations = ({ setIsModalVisible, setWhichModal }) => {
  const handleSave = () => {
    setIsModalVisible(true);
    setWhichModal({save: true, preview: false, reports: false, json: false});
  }

  const handlePreview = () => {
    setIsModalVisible(true);
    setWhichModal({save: false, preview: true, reports: false, json: false});
  }

  const handleReports = () => {
    setIsModalVisible(true);
    setWhichModal({save: false, preview: false, reports: true, json: false});
  }

  const handleJson = () => {
    setIsModalVisible(true);
    setWhichModal({save: false, preview: false, reports: false, json: true});
  }

  return (
    <div className='operations'>
      <span class="material-icons" onClick={handleSave}>save</span>
      <span class="material-icons" onClick={handlePreview}>preview</span>
      <button onClick={handleReports}>Reports</button>
      <button onClick={handleJson}>JSON</button>
    </div>
  );
}

export default Operations;