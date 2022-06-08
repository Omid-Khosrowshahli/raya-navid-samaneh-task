import { useState } from 'react';
import './ChartManipulation.css';

const ChartManipulation = ({ charts, setCharts, handleAddData, id }) => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');

  const deleteChart = () => {
    const newCharts = charts.filter((item) => id !== item.id)

    setCharts(newCharts);
  }
  
  const handleClearData = (item, theId) => {
    const result = item.data.filter((eachItem) => eachItem.id !== theId);
    const newItem = {...item, data: [...result]};
    
    let newCharts = [];
    charts.map((anyItem) => {
      if (anyItem.id === id) {
        newCharts.push({...anyItem, data: [...newItem.data]})
      }
      else {
        newCharts.push(anyItem);
      }
    })
    
    setCharts(newCharts);
  }

  return (
    <div className='chart-manipulation'>
      <h2>Data Entry</h2>
      <div className='label-input-container'>
        <div>
          <label>Name: </label>
          <input type='text' value={name} onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <label>Value: </label>
          <input type='number' value={value} onChange={(event) => setValue(event.target.value)} />
        </div>
        <div className='btn-and-icon'>
          <button onClick={() => handleAddData(name, value, setName, setValue)}>Add</button>
          <div class="material-icons" onClick={deleteChart}>
            delete
          </div>
        </div>
      </div>
      
      <div>
        {charts.map((item) => {
          if (item.id === id) {
            return (
            <ul className='ulist'>
              <li className='list'><span>Action</span><span>Name</span><span>Value</span></li>
              {item.data.map((eachItem) => {
                return (
                  <li className='list'>
                    <span class="material-icons" onClick={() => handleClearData(item, eachItem.id)}>
                      highlight_off
                    </span>
                    <span>{eachItem.type}</span>
                    <span>{eachItem.value}</span>
                  </li>
                );
              }
              )}
            </ul>
            );
          }
        })}
      </div>
    </div>
  );
}

export default ChartManipulation;