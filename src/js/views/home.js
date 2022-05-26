import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import Logo from "../component/logo.jsx";
import Community from "../component/community.jsx";
import Location from "../component/location.jsx";
import Menu from "../component/menu.jsx";
import Recipes from "../component/recipes.jsx";
import Form from "../component/form.jsx";

export const Home = () => (
	<div className="text-center mt-5">
		<Logo />
		<Community/>
		<Location />
		<Menu />
		<Recipes />
		<Form />
	</div>
);
