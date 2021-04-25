import React from 'react';
import './App.css';
import Home from './Home';
import Profile from './Profile';
import Coming from './Coming';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';


function App() {


	  return (
		<>
				<Switch>
					<Route exact path="/" component={Home} />				
					<Route exact path="/profile" component={ Profile } />
					<Route exact path="/posts" component={ Coming } />
					<Route exact path="/gallery" component={ Coming } />
					<Route exact path="/todo" component={ Coming } />
				</Switch>
		</>
  );
}

export default App;
