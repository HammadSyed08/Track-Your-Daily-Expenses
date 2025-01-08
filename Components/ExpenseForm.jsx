import React, { useState } from 'react'
import Input from './InputFiled.jsx'
import Select from './Select.jsx'

export default function ExpenseForm({ 
  expense, 
  setExpense, 
  setExpenses, 
  editRowId,
  setEditRowId }) {

  //-----> Unique Combined useState Method ------->
  // const [expense, setExpense] = useState({
  //   title: '',
  //   category: '',
  //   amount: '',
  //   // email: ''
  // })

  const [errors, setErrors] = useState({})

  const validConfiguration = {
    title: [{required: true, message: 'Please Enter a Title'},
    {minLength: 3, message: 'Title should be Three character long'}],
    category: [{required: true, message: 'Please Select Category first'}],
    amount: [{required: true, message: 'Please Enter an Valid Amount'}],
    // email: [{required: true, message: 'Please Enter an Email'},
    //   {pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, message: 'Please Enter a Valid Email'  }],
  }

  const inputValidation = (inputData) => {
    const errorsData = {}

    Object.entries(inputData).forEach(([key, value]) => {
      validConfiguration[key].some((rule) => {
        // console.log(rule);
      if(rule.required && !value){
          errorsData[key] = rule.message
          return true
        }

        if(rule.minLength && value.length < rule.minLength){
          errorsData[key] = rule.message
          return true
        }

        // if(rule.pattern && !rule.pattern.test(value)){
        //   errorsData[key] = rule.message
        //   return true
        // }
       
      })
      
      
      
    })
    
    setErrors(errorsData)
    return errorsData
  }

  const submitForm = (e) => {
    e.preventDefault()

    const validationResult = inputValidation(expense)
    // console.log(Object.keys(validationResult));
    if (Object.keys(validationResult).length) return

    if (editRowId) {
      setExpenses((prevState) => 
        prevState.map((prevExpense) => {
          if (prevExpense.id === editRowId){
            return { ...expense, id: editRowId }
          }
          return prevExpense
        })
      ) 
      setExpense({
        title: '',
        category: '',
        amount: ''
      })
      setEditRowId('')
      return
    }

    //-----> Unique Combined useState Method ------->
    setExpenses((prevState) => 
      [...prevState, { ...expense, id: crypto.randomUUID() }])
    setExpense({
      title: '',
      category: '',
      amount: ''
    })
  }

  const onChangeEvent = (e) => {
    const { name, value } = e.target
    setExpense((prevState) =>
    ({
      ...prevState,
      [name]: value
    }))
    setErrors({})
  }

  return (
    <form className="expense-form" onSubmit={submitForm}>
      <Input
        label='Title'
        name='title'
        id='title'
        value={expense.title}
        onChange={onChangeEvent}
        error={errors.title}
      />
      <Select
        id='category'
        name='category'
        label='Category'
        value={expense.category}
        onChange={onChangeEvent}
        option={['Grocery', 'Education', 'Utility Bills', 'Clothes', 'Medicine']}
        defaultOption='Select Category'
        error={errors.category}
      />
      <Input
        label='Amount'
        name='amount'
        id='amount'
        value={expense.amount}
        onChange={onChangeEvent}
        error={errors.amount}
        type='Number'
      />
       {/* <Input
        label='Email'
        name='email'
        id='email'
        value={expense.email}
        onChange={onChangeEvent}
        error={errors.email}
      /> */}
      <button className="add-btn">{editRowId ? 'Save' : 'Add' }</button>
    </form>
  )
}
