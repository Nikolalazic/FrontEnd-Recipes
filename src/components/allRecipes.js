import React, {Component} from 'react';
import axios from 'axios';

class allRecipes extends Component {
	constructor(props) {
		super(props);
		this.state = {
			myRecipes: [],
		}
	}

	async componentDidMount() {
		const res = await axios.get('http://localhost:8080/recipes/all-recipes');

		const myRecipes = res.data;
		this.setState({myRecipes})
	}

	render() {
		return (
			<table>
				<tr>
					<th>Title:</th>
					<th>Ingredients:</th>
					<th>Description:</th>
				</tr>
				{this.state.myRecipes.map((myRecipe) => {
					return (
						<tr>
							<td>{myRecipe.title}</td>
							<td>{myRecipe.ingredients}</td>
							<td>{myRecipe.description}</td>
						</tr>
					);
				})}

			</table>
		);
	}
}

export default allRecipes;
