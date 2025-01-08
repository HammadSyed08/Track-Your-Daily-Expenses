import React from 'react'

export default function ContextMenu({
  menuPosition,
  setMenuPosition, 
  setExpense, 
  expenses, 
  setData, 
  setEditRowId,
  TableRowId, }) {

  if (!menuPosition.left) return
  return (
    <div className="context-menu" style={ {...menuPosition}}>
            <div onClick={() => {
             const {title, category, amount} =  expenses.find((singleExpense) => 
              singleExpense.id === TableRowId)

             setEditRowId(TableRowId)
              setExpense({title, category, amount})
              setMenuPosition({})
            }}>Edit</div>
            <div onClick={() => {
              setData((prevState) => prevState.filter(expenseItem => expenseItem.id !== TableRowId
            ))
              setMenuPosition({})
            }}>Delete</div>
        </div>
  )
}
