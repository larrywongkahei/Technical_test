import './App.css';
import PieChart from './Components/PieChart';
import { useEffect, useState } from 'react';
import React from 'react';

function App() {
  const [chartData, setChartData] = useState({})
  const [Data, setData] = useState({})
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


  return (
    <div className="App">

    </div>
  );
}

export default App;
