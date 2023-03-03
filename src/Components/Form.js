import React from 'react'
import { useState } from 'react';

export default function Form() {
  const [formData, setFormData] = useState({

  })
  function handleSubmit (e) {
    e.preventDefault();
  }

  function handleChange (e) {
    let newFormData = {...formData, [e.target.name]: e.target.value} ;
    setFormData(newFormData);
  }
  return (
    <div>
      <h2>Filter by horns</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" onChange={handleChange}></input>
        <select name="number" onChange={handleChange}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </form>
    </div>
  )
}
