import logo from './logo.svg';
import './App.css';
import AreaChartApp from './AreaChart.js'
import ChartApp from './Chart.js'
import BarChartApp from './BarChart.js'
import PieChartApp from './PieChart.js';


function App() {
  return (
    <div className="App">
      <div className="header">
        <a href="#default" className="logo"></a>
        <div className="header-right">
          <a className="active" href="#home">Home</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      </div>

      <h1>Consumption Dashboard</h1>
      <div className="container">

        <div className="chart">
            <AreaChartApp/>
        </div>
        
        <div className="chart">
          <BarChartApp/>
        </div>
        <div className="chart">
          <PieChartApp/>
        </div>      
        <div className="chart">
        </div>
      </div>
    </div>
  );
}

export default App;
