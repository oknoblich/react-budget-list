import React from 'react'

const RangeInput = ({ value, onChange, min, max, name }) => {
  const handleChange = (e) => onChange(name, e.target.value)

  return (
    <input value={value} onChange={handleChange} min={min} max={max} type="range" className="bo-range" />
  )
}

export default RangeInput
