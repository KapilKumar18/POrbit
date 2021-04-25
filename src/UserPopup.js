import React, {useState, useEffect} from 'react';
import { useHistory, Link } from 'react-router-dom';
import './bootstrap.min.css';
import './UserPopup.css';

const UserPopup = ({users}) => {
	const [user, setUser] = useState([]);

	const history = useHistory();

    const gotohome = () => {
        localStorage.clear();
        history.push('/profile');	
    }

	useEffect(() => {
    	fetch('https://panorbit.in/api/users.json').then((response) => {
        	response.json().then((result) => {
	            setUser(result.users);
	            console.warn("user data");
		      })
		  })
  	},[])

    return(
    <>
        <div className="user_popup py-5" style={{zIndex:999}}>
            <div className="current_user d-flex  align-items-center flex-column pt-5 border-bottom ">
                <img src={users[0].profilepicture} alt="profilepicture" />
                <p className="font-weight-bold"> {users[0].name}</p>
                <p className="font-weight-bold text-muted"> {users[0].email}</p>
            </div>
            <ul className="list-group list-unstyled list-group-flush user_list mx-5 my-3 ">
                {		
                    user.map((item) => 			  
                        <Link to={{pathname:'/profile', userId:item.id}} key={item.id} className="list-group-item">
                            <li> 	<a href="" className="text-decoration-none pl-3 text-dark">
                                    <img src={ item.profilepicture } alt="profilepicture"/> {item.name}</a> 
                            </li>
                        </Link>
                )}
            </ul>
            <div className="btn">
                <p className="text-light bg-danger text-center w-25 p-2 rounded m-auto" onClick={ gotohome }> Sign out</p>
            </div>
        </div>
    </>
)

}

export default UserPopup;