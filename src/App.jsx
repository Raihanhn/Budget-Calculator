import './App.css'
import Alert from './components/Alert'
import ExpenseForm from './components/ExpenseForm'
import ExpenseList from './components/ExpenseList'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';

function App() {

  const see = [
    {id:uuidv4(), po: "po1212", invoiced: "12/12/20", due: "12/23/23", pay: 120, payment: 1200  },
    {id:uuidv4(), po: "po1212", invoiced: "12/12/20", due: "12/23/23", pay: 220, payment: 100  }
  ];

  const [expense, setExpense] = useState(see);
  const [early, setEarly] = useState(see);

  return (
    <div className='main' >
      <Alert/>
      <h1>Budget Calculator</h1>
      <main className="App">
      <ExpenseForm/>
      <ExpenseList expense={expense} easrly={early} />
      </main>

      <div className="header">

      <h1>Early Pay Total: <span className='totall' >
         $ {early.reduce((acc, curr)=>{
          return (acc += curr.pay);
         },0)}
        </span> </h1>


      <h1> Invoice Total: <span className='total' >
         $ {expense.reduce((acc, curr) =>{
          return (acc += curr.payment);
         },0)}
        </span> </h1>
        </div>

    </div>
  )
}

export default App
