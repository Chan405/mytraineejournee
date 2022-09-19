import React from "react";
import Card from "./card";
import {Grid} from "@material-ui/core";
import Coffeedatas from "./constant";

const Content = () => {

	const getcoffeemakercard = (coffeemakerobj) => {
		return (
			<Grid item xs={12} sm={4}>
				<Card {...coffeemakerobj}/>
			</Grid>
			)
	}

	return (
	<Grid container spacing={4}>
		{ Coffeedatas.map( (data) => getcoffeemakercard(data) )}
	</Grid>
		)
}
export default Content;