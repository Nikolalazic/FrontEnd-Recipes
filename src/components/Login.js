import React, {Component} from 'react';
import axios from 'axios';

import Token from '../token/token'
class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			nickName: "",
			password: ""
		};
	}
	handleNickName = (nickName) => {
		this.setState({
			nickName,
		})
	};
	handlePassword = (password) => {
		this.setState({
			password,
		})
	};
	handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await axios.post('http://localhost:8080/user/login', this.state);

			console.log(response.data);
			Token.setToken(response.data.id);
		} catch (error) {
			console.log(error);
		}


	};
	render() {
		return (
			<div>
				<form>
					<label>NickName:
						<input type="text" name="nickName" onChange={(event) => {
							this.handleNickName(event.target.value);
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
		);
	}
}

export default Login;