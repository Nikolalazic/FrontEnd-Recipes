import React from "react";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
	return (
		<div>
			<NavLink to="/">Register</NavLink>
			<NavLink to="/login">Login</NavLink>
			<NavLink to="/create-recipe">Create Recipe</NavLink>
			<NavLink to="/my-recipes">My recipes</NavLink>
			<NavLink to="/all-recipes">all Recipes</NavLink>
		</div>
	);
};

export default Navigation;