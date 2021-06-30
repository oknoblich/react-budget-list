import React from 'react'

const PasswordInput = ({ value, onChange, label, name }) => {
  const handleChange = (e) => onChange(name, e.target.value)

  return (
    <div className="input">
      <input value={value} onChange={handleChange} type="password" placeholder=" " />
      <label>{label}</label>
    </div>
  )
}

export default PasswordInput
