import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';
import Register from './components/Register';
import Login from './components/Login';
import CreateRecipe from './components/CreateRecipe';
import myRecipes from './components/myRecipes';
import allRecipes from './components/allRecipes';

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
				    <Route path="/my-recipes" component={myRecipes} />
				    <Route path="/all-recipes" component={allRecipes} />
			    </Switch>
		    </div>
	    </BrowserRouter>
    );
  }
}

export default App;
