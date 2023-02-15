import React from 'react'
import {MdEdit, MdDelete} from 'react-icons/md'

const ExpenseItem = ({expenses}) => {
  const {id, po,  invoiced, due,  pay,  payment} = expenses
  return (
    <li className='item'>
      <div className="info">
        <span className='expense'>{po}</span>
        <span className='amount'>{invoiced} </span>
        <span className='amount'>{due} </span>
        <span className='amount'>${pay} </span>
        <span className='amount'>${payment} </span>
      </div>
      <div>
        <button className="edit-btn" aria-label='edit button' >
          <MdEdit/>
        </button>
        <button className="clear-btn" aria-label='delete button' >
          <MdDelete/>
        </button>
      </div>
    </li>
  )
}

export default ExpenseItem