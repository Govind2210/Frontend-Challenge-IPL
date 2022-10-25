import React from 'react'
import Headers from './Components/Headers'
import BarChats from './Components/BarChats'
import LineCharts from './Components/LineCharts'
import ScatterPlot from './Components/ScatterPlot'


function App() {
  return (
    <div className='App'>
      <Headers/>
      <BarChats/>
      <LineCharts/>
      <ScatterPlot/>
    </div>
  )
}

export default App