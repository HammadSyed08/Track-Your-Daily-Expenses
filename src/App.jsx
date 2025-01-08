import { useState } from 'react'
import './App.css'
import ExpenseForm from '../Components/ExpenseForm.jsx'
import ExpenseTable from '../Components/ExpenseTable.jsx'
import ExpenseData from '../Components/ExpenseData.js'
import { useLocalStorage } from '../hooks/useLocalStorage.js'

function App() {
  const [expense, setExpense] = useLocalStorage('expense',{
      title: '',
      category: '',
      amount: '',
      // email: ''
    })
  const [expenses, setExpenses] = useLocalStorage('expenses' ,ExpenseData)
  const [editRowId, setEditRowId] = useLocalStorage('editRowId','')

  return (
    <>
      <main>
      <h1>Track Your Expense</h1>
      <div className="expense-tracker">
       <ExpenseForm 
       setExpenses={setExpenses} 
       expense={expense} 
       setExpense={setExpense}
       editRowId={editRowId}
       setEditRowId={setEditRowId}
       />

        <ExpenseTable 
        setExpense={setExpense} 
        expenses={expenses} 
        setExpenses={setExpenses}
        setEditRowId={setEditRowId}
        />
      </div>
    </main>
    </>
  )
}

export default App
