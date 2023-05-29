import { Link } from 'react-router-dom';

function ColorList( {colors} ) {
  return (
    <div>
      <ul style={
        {listStyle: 'none'}
      }>
        <h1>Hi</h1>
        {Object.keys(colors).map((colorName) => (
          <li key={colorName}>
            <Link to={`/colors/${colorName}`}>{colorName}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default ColorList
