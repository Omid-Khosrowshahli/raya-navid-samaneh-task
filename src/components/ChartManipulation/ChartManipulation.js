import { useState } from 'react';
import './ChartManipulation.css';

const ChartManipulation = ({ charts, setCharts, handleAddData, id }) => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const deleteChart = () => {
    const newCharts = charts.filter((item) => id !== item.id)

    setCharts(newCharts);
  }

  return (
    <div className='chart-manipulation'>
      <h2>Data Entry</h2>
      <div className='label-input-container'>
        <div>
          <label>Name: </label>
          <input type='text' onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <label>Value: </label>
          <input type='number' onChange={(event) => setValue(event.target.value)} />
        </div>
        <div className='btn-and-icon'>
          <button onClick={() => handleAddData(name, value)}>Add</button>
          <div class="material-icons" onClick={deleteChart}>
            delete
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChartManipulation;