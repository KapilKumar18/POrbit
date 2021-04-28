import React, { useState, useEffect } from 'react';
import './bootstrap.min.css'
import './Home.css';
import Profile from './Profile';
import { Route, Switch, useHistory } from 'react-router-dom';
import AllUsers from './AllUsers';


const Home = () => {

	const [user, setUser] = useState([]);

	const history = useHistory();

	useEffect(() => {
    	fetch('https://panorbit.in/api/users.json').then((response) => {
        	response.json().then((result) => {
	            setUser(result.users);
	            console.warn("user data");
		      })
		  })
  	},[])

	useEffect(() => {
  		
		localStorage.setItem('users',JSON.stringify(user))
  	},[user])

	  const username = () => {
	  	history.push('/profile') ;	
	  }


	return(
	<>
		<div className="account d-flex justify-content-center align-items-center">
			{
				user.length>0?
				<div className="card">
					<div className="card-header rounded">
					    <h2 className="font-weight-bold text-center"> Select an account </h2>
					</div>
					<AllUsers user={user} />
				</div>:
				<h4> Data Not loaded </h4>
			}
		</div>
			<Switch>
				<Route exact path="/profile" component={ Profile } />
			</Switch>
		</>
	)
}


export default Home;