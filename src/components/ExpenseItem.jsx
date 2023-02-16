import React from 'react'
import {MdEdit, MdDelete} from 'react-icons/md'

const ExpenseItem = ({expenses}) => {
  const {id, po,  invoiced, due,  pay,  payment} = expenses
  return (
    <li className='item'>
      <div className="info">
        <span className='expense'>{po}</span>
        <span className='invoiced'>{invoiced} </span>
        <span className='due'>{due} </span>
        <span className='pay'>${pay} </span>
        <span className='payment'>${payment} </span>
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