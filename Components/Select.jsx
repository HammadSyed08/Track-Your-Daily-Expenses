import React from 'react'

export default function Select({id,label, name, value, onChange, error, option, defaultOption}) {
  return (
    <div className="input-container">
        <label htmlFor={id}>{label}</label>
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
        >
          { defaultOption && <option hidden>{defaultOption}</option> }
          {
            option.map((opt, i) => <option key={i} value={opt}>{opt}</option>)
          }
        </select>
        <p className="input_errors">{error}</p>
      </div>
  )
}
