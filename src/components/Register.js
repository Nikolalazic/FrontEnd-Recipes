import React, {Component} from 'react';
import axios from 'axios';

class Register extends Component {
	constructor(props){
		super(props);
		this.state = {
			fullName: "",
			nickName: "",
			email: "",
			password: ""
		};

	}


	handleFullName = (fullName) => {
		this.setState({
			fullName,
		})
	};
	handleNickName = (nickName) => {
		this.setState({
			nickName,
		})
	};

	handleEmail = (email) => {
		this.setState({
			email,
		});
	};
	handlePassword = (password) => {
		this.setState({
			password,
		});
	};

	handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post('http://localhost:8080/user/register', this.state);
			console.log(response.data);

		} catch (error) {

		}


	};

	render() {
		return (
			<div>
				<div className="container">
					<h1>Register</h1>
					<form>
						<label>
							Full Name:
							<input type="text" name="fullName" onChange={(event) => {
								this.handleFullName(event.target.value);
							}}/>
						</label>
						<label>NickName:
							<input type="text" name="nickName" onChange={(event) => {
								this.handleNickName(event.target.value);
							}}/>
						</label>
						<label>Email:
							<input type="text" name="email" onChange={(event) => {
								this.handleEmail(event.target.value);
							}}/>
						</label>
						<label>Password:
							<input type="password" name="password" onChange={(event) => {
								this.handlePassword(event.target.value);
							}}/>
						</label>
						<button type="submit" onClick={this.handleSubmit}>Sign Up</button>
					</form>
				</div>
			</div>
		);
	}
}

export default Register;