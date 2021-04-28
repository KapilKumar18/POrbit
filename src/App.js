import React from 'react';
import './App.css';
import Home from './Home';
import Profile from './Profile';
import Coming from './Coming';
import { Route, Switch, Redirect } from 'react-router-dom';


function App() {


	  return (
		<>
				<Switch>
					<Route exact path="/" 		 component={Home} />				
					<Route exact path="/profile" component={ Profile } />
					<Route exact path="/posts"   component={ Coming } />
					<Route exact path="/gallery" component={ Coming } />
					<Route exact path="/todo"    component={ Coming } />
					<Redirect to="/"/>
				</Switch>
		</>
  );
}

export default App;
