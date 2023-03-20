import React from 'react'
import Item from './ExpenseItem'
import { MdDelete } from 'react-icons/md';

const ExpenseList = ({expense, early }) => {
  const combinedArray = [...expense, ...early];

  const uniqueArray = combinedArray.reduce((accumulator, currentValue) => {
    if (!accumulator.some(item => item.id === currentValue.id)) {
      accumulator.push(currentValue);
    }
    return accumulator;
  }, []);
  
  return (
    <>
      <ul className="list">
        {uniqueArray.map(expenses => {
          return <Item key={expenses.id} expenses={expenses} />;
        })}

      </ul>
      {expense.length > 0 && early.length > 0 && <button className='btn'> clear expense <MdDelete className="btn-icon" /> </button> }
    </>
  )
}

export default ExpenseList