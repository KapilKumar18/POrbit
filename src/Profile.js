import React from 'react';
import './bootstrap.min.css';

import { Route, Link, Switch, useLocation, Redirect } from 'react-router-dom';
import './Profile.css';
import Coming from './Coming';
import SideMenu from './SideMenu';
import ProfileDetail from './ProfileDetail';

const Profile = ({match}) =>{
const location = useLocation();

let user = null;
// alert("dg")
// const  currentUser= JSON.parse(localStorage.getItem("currentUser"));

// if ((!currentUser) || (!location.userId)){
// 	return(<Redirect to="/" />)
// }


// if(currentUser){
// 	user = currentUser;
// }
// else{
// 	const users = JSON.parse(localStorage.getItem("users"));

// 	user = users.filter((user) => {
// 		return user.id === location.userId;
// 	})

	

// }
if(location.userId){
		const users = JSON.parse(localStorage.getItem("users"));

	user = users.filter((user) => {
		return user.id === location.userId;
	})
}
else if(localStorage.getItem("currentUser")){
	user = JSON.parse(localStorage.getItem("currentUser"))

}
if(!user){return(<Redirect to="/" />)}
user && localStorage.setItem("currentUser", JSON.stringify(user))


	// console.log(user)

	return(
		<div className="row m-5">
			{console.log(user)}
			<SideMenu />
			<Switch>
						<Route exact path="/profile" 		 render={() => {return <ProfileDetail user={user} page="Profile"/>} } />
						<Route exact path="/posts" 		     render={() => {return <Coming user={user} page="Posts"/>  } } />
						<Route exact path="/gallery" 		 render={() => {return <Coming user={user} page="Gallery"/>} } />
						<Route exact path="/todo" 		 	 render={() => {return <Coming user={user} page="ToDo"/>   } } />
			</Switch>
		
			
		</div>
	)
}

export default Profile;