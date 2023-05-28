import { useParams } from "react-router-dom"
// Purpose: Renders the DogDetails component
function DogDetails(dogs) {
  
  const { name } = useParams()
  const dog = dogs.dogs.find(dog => dog.name === name)
  
  return (
    <div>
      <h1>
        {dog.name}
      </h1>
      <img style={{height:"400px"}} src={dog.src} alt={dog.name} />
      <h2>
        {dog.age} years old
      </h2>
      <ul style={{listStyle: "none"}}>
        {dog.facts.map((fact, i) => (
          <li key={i}>
            {fact}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DogDetails