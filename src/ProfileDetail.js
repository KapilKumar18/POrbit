import React, { useState } from 'react';
import './ProfileDetail.css';
import UserInfo from './UserInfo';
import UserCompany from './UserCompany';
import UserAddress from './UserAddress';
import { useHistory } from 'react-router-dom';
import AllUsers from './AllUsers';
import { useLocation } from 'react-router-dom';
import UserPopup from './UserPopup';
import ChatBox from './ChatBox';

const ProfileDetail = ({user, page}) => {	
	
	const location = useLocation();

	const [show, setShow] = useState(false)

	const users = JSON.parse(localStorage.getItem("users"));

	
	const history = useHistory();
	

	return(
		<div className="col-9 p-5">
			<div className="clearfix p-2 border-bottom">
				<p className="float-left font-weight-bold"> {page}  </p>	
				{
					show? <UserPopup  users={user}/> : null
				}
				<p className="float-right user_switch" onClick={()=> setShow(!show)}> 
					<img className="mr-3" src={user[0]?.profilepicture} alt="profilepicture"/> {user[0]?.name} 
				</p>			
			</div>
			<div className="row py-5">
				<div className="col-5 text-center">
					<UserInfo user={user} />					
					
					<UserCompany user={user} />	
				</div>

				<div className="col-7 border-left pl-5 font-weight-bold">
					<UserAddress user={user} />
				</div>
			</div>
			<ChatBox />
		</div> 
			)
}

export default ProfileDetail;