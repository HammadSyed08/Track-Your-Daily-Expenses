import React from 'react'

export default function Input({id, label, name, value, onChange, error, type}) {
  return (
    <div className="input-container">
    <label htmlFor={id}>{label}</label>
    <input
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
    />
    <p className="input_errors">{error}</p>
  </div>
  )
}
