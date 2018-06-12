import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Register from './components/Register';
import Login from './components/Login';
import CreateRecipe from './components/CreateRecipe';

class App extends Component {
  render() {
    return (
	    <BrowserRouter>
		    <div>
			    <Navigation />
			    <Switch>
				    <Route path="/" component={Register} exact />
				    <Route path="/login" component={Login} />
				    <Route path="/create-recipe" component={CreateRecipe} />
			    </Switch>
		    </div>
	    </BrowserRouter>
    );
  }
}

export default App;
