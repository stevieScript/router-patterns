
// Desc: DogList component
function DogList(dogs) {
  return (
    <div>
      <h1>HELLO FROM DOG LIST</h1>
      {dogs.dogs.map(dog => (
       <img key={dog.name} style={{height:"200px"}} src={dog.src} alt={dog.name}  />
      ))}
    </div>
  )
}

export default DogList