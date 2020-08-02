import React from 'react'

const Input = ({label, type, id, value, onChange}) => {

  return (
    <div>
      <label htmlFor={id}>
        {label}:
        <input type={type || 'text'} id={id} value={value} onChange={onChange} />
      </label>
    </div>
  )

}

export default Input