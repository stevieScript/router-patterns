import { useParams } from "react-router-dom"
function Color() {
  const { color } = useParams()
  return (
    <div>
      <h1>THIS IS THE COLOR PAGE</h1>
      <h2>THE COLOR IS: {color}</h2>
    </div>

  )
}

export default Color