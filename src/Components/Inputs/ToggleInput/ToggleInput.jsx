import React from 'react'

const ToggleInput = ({ value, onChange, label, name }) => {
  const handleChange = (e) => onChange(name, e.currentTarget.checked)

  return (
    <label className="toggle">
      <input checked={value} onChange={handleChange} type="checkbox" />
      <span className="label-left">{label[0]}</span>
      <span className="label-right">{label[1]}</span>
    </label>
  )
}

export default ToggleInput
