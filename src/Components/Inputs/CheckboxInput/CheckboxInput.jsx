import React from 'react'

const CheckboxInput = ({ value, onChange, label, name }) => {
  const handleChange = (e) => onChange(name, e.currentTarget.checked)

  return (
    <label className="checkbox">
      <input checked={value} onChange={handleChange} type="checkbox" />
      <span className="label">{label}</span>
    </label>
  )
}

export default CheckboxInput
