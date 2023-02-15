import React from 'react'
import Item from './ExpenseItem'
import { MdDelete } from 'react-icons/md';

const ExpenseList = ({expense}) => {
  return (
    <>
      <ul className="list">
        {expense.map(expenses => {
          return <Item key={expenses.id} expenses={expenses} />;
        })}
      </ul>
      {expense.length > 0 && <button className='btn'> clear expense </button> }
      <MdDelete/>
    </>
  )
}

export default ExpenseList