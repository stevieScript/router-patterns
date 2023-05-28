import { Link } from 'react-router-dom';

function ColorList({ colors }) {
  return (
    <div>
      <ul>
        <h1>Hi</h1>
        {colors.map(color => (
          <li key={color}>
            <Link to={`/colors/${color}`}>{color}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ColorList
