import React from 'react'

const NumberInput = ({ value, onChange, label, name }) => {
  const handleChange = (e) => onChange(name, e.target.value)

  return (
    <div className="input">
      <input value={value} onChange={handleChange} type="number" placeholder=" " />
      <label>{label}</label>
    </div>
  )
}

export default NumberInput
