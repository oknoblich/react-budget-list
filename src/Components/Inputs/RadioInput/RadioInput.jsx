import React from 'react'

const RadioInput = ({ value, onChange, label, name }) => {
  const handleChange = (e) => onChange(name, e.currentTarget.checked)

  return (
    <label className="radio">
      <input checked={value} onChange={handleChange} type="radio" />
      <span className="label">{label}</span>
    </label>
  )
}

export default RadioInput
