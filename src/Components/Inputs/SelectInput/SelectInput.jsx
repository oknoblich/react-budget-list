import React from 'react'

const SelectInput = ({ value, onChange, items, label, name }) => {
  const handleChange = (e) => onChange(name, e.target.value)

  return (
    <div className="input">
      <select value={value} onChange={handleChange}>
        {
          items.map((item, i) => (
            <option key={i} value={i === 0 ? '' : item}>{item}</option>
          ))
        }
      </select>
      <label>{label}</label>
    </div>
  )
}

export default SelectInput
