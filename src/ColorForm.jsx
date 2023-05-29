import {useState} from 'react'
import { useNavigate } from 'react-router-dom'


function ColorForm({ addColor}) {
  const INITIAL_STATE = { color: "", value: "#000000"}
  const [formData, setFormData] = useState(INITIAL_STATE)
  let nav = useNavigate()


  const handleChange = (e) => {
    // sets the input color name to the value of the color
    setFormData(formData => ({
      ...formData,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addColor({[formData.color]: formData.value})
    setFormData(INITIAL_STATE)
    nav('/colors')
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