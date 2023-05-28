import { NavLink } from 'react-router-dom';

const ColorNav = () => {
	return (
		<nav>
			<NavLink to='/colors/new'>Add a color</NavLink>
		</nav>
	);
};

export default ColorNav;
