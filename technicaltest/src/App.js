import './App.css';
import PieChart from './Components/PieChart';
import { useEffect, useState } from 'react';
import React from 'react';

function App() {
  const [chartData, setChartData] = useState({})
  const [chartView, setChartView] = useState(0)

  useEffect(() => {
    const getdata = async () =>{
      const fetchdata = await fetch('http://substantiveresearch.pythonanywhere.com')
      const dataToJson = await fetchdata.json()
      // console.log(dataToJson)
      const dataForChart = {}
      dataToJson.forEach(each => {
        if (each.name in dataForChart){
          dataForChart[each.name] += 1
        }else{
          dataForChart[each.name] = 0
        }
      Promise.all(dataToJson)
      .then(setChartData(dataForChart))
      })
    }
    getdata()
    // console.log(chartData)
  })

  const handleClick = () => {
    
  }

  const namesForChart = Object.keys(chartData)
  const valuesForChart = Object.values(chartData)
  const totalValues = valuesForChart.reduce((a, b) => a + b, 0)
  const percentageData = valuesForChart.map(value => ((value/totalValues)*100).toFixed(2))
  // console.log(percentageData)
  // console.log(totalValues)

  const Data = {
    labels:namesForChart,
    datasets:[{
      label:'Percentage',
      data:percentageData,
      backgroundColor: ["#25CCF7","#FD7272","#54a0ff","#00d2d3",
      "#1abc9c","#2ecc71","#3498db","#9b59b6","#34495e",
      "#16a085","#27ae60"]
    }]
  }



  return (
    <div className="App">
      {chartView === 0?
        <button onClick={handleClick}>Show Chart</button> :
        <button onClick={handleClick}>Change Chart</button>
      }
      <div style={{width:500}}>
        <PieChart Data={Data} />
      </div>
    </div>
  );
}

export default App;
