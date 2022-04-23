import React, {useState, useEffect} from 'react';
import './App.css';
import Header from './components/Header';
import IncomeForm from './components/IncomeForm';
import IncomeList from './components/IncomeList';


function App() {
  const [income, setIncome] = useState([]);
  const [totalIncome, setTotalIncome] = useState(0);

  useEffect(() =>{
    let detail = 0;
      for(let i = 0; i < income.length; i++){
      detail += parseInt(income[i].price);
      }
      setTotalIncome(detail);
  },[income]);

  return (
    <div className="App">
      <Header totalIncome={totalIncome} />
      <IncomeForm income={income} setIncome={setIncome} />
      <IncomeList income={income} setIncome={setIncome}/>
    </div>
  );  
}

export default App;