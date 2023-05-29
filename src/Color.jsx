import { useParams } from "react-router-dom"
import { useNavigate } from 'react-router-dom';
function Color(colors) {
  const { color } = useParams()
  let nav = useNavigate()
  console.log('color: ', colors);
  console.log('colors[color]: ', colors[color]);
  


  return (
    <div style={{backgroundColor: colors[color]}}>
      <h1>THIS IS THE COLOR PAGE</h1>
      <h2>THE COLOR IS: {color}</h2>
      <button onClick={() => nav('/colors')}>Go Back</button>
    </div>

  )
}

export default Color