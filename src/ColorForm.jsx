import {useState} from 'react'
import Color from './Color'

function ColorForm({ addColor}) {
  const INITIAL_STATE = {color: '', value: '#000000'}
  const [formData, setFormData] = useState(INITIAL_STATE)

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormData(formData => ({
      ...formData,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addColor(formData)
    setFormData(INITIAL_STATE)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <label htmlFor="color">Name the color</label>
      <input
        type="text"
        name="color"
        id="color"
        value={formData.color}
        onChange={handleChange}
      />
      <label htmlFor="value">Pick the color</label>
      <input
        type="color"
        name="value"
        id="value"
        value={formData.value}
        onChange={handleChange}
      />
      <button>Add Color</button>
    </form>
    </div>
  )
}

export default ColorForm