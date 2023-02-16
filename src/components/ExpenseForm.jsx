import React from 'react'
import {MdSend} from 'react-icons/md'

const ExpenseForm = () => {
  return (
    <form>
      <div className="form-center">

      <div className="form-group">
          <label htmlFor="po">PO</label>
          <input type="text" className='form-control' id='po' name='po' placeholder='e.g. po' />
        </div>

        <div className="form-group">
          <label htmlFor="invoiced">Invoice Date</label>
          <input type="text" className='form-control' id='invoiced' name='invoiced' placeholder='e.g. Invoice Date' />
        </div>

        <div className="form-group">
          <label htmlFor="due">Due Date</label>
          <input type="text" className='form-control' id='due' name='due' placeholder='e.g. Due Date' />
        </div>

        <div className="form-group">
          <label htmlFor="pay">Early Pay Deduction</label>
          <input type="text" className='form-control' id='pay' name='pay' placeholder='e.g. Early Pay' />
        </div>

        <div className="form-group">
          <label htmlFor="payment">Invoice Amount</label>
          <input type="text" className='form-control' id='payment' name='payment' placeholder='e.g. Amount' />
        </div>

      </div>
    </form>
  )
}

export default ExpenseForm