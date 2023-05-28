import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <NavLink to="/dogs">Home</NavLink>
      <NavLink to="/dogs/Whiskey">Whiskey</NavLink>
      <NavLink to="/dogs/Tubby">Tubby</NavLink>
      <NavLink to="/dogs/Perry">Perry</NavLink>
      <NavLink to="/dogs/Duke">Duke</NavLink>
    </nav>
  )
}

export default NavBar