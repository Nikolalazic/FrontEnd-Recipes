import React, {Component} from 'react';
import axios from 'axios';

class CreateRecipe extends Component {
	constructor(props) {
		super(props);
		this.state = {
			title: "",
			ingredients: "",
			description: ""
		};
	}

	handleTitle = (title) => {
		this.setState({
			title,
		})
	};
	handleIngredients = (ingredients) => {
		this.setState({
			ingredients,
		})
	};
	handleDescription = (description) => {
		this.setState({
			description,
		})
	};
	handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post('http://localhost:8080/recipes/create', this.state,
				{
					headers: {
						token: localStorage.getItem("token")
					}
				});

			console.log(response.data);
		} catch (error) {
			console.log(error);
		}


	};

	render() {
		return (
			<div>
				<form>
					<label>Title:
						<input type="text" name="title" onChange={(event) => {
							this.handleTitle(event.target.value);
						}}/>
					</label>
					<label>Ingredients:
						<input type="text" name="ingredients" onChange={(event) => {
							this.handleIngredients(event.target.value);
						}}/>
					</label>
					<label>Description:
						<input type="text" name="description" onChange={(event) => {
							this.handleDescription(event.target.value);
						}}/>
					</label>
					<button type="submit" onClick={this.handleSubmit}>Add</button>
				</form>
			</div>
		);
	}
}

export default CreateRecipe;