import React from 'react';
import './Coming.css';
import { Link } from 'react-router-dom';
import SideMenu from './SideMenu';
import ChatBox from './ChatBox';

const Coming = ({user, page}) => {

	return(
		<>
		<div className="row m-5">
		<SideMenu />
			<div className="col-9 coming_div p-5">
				<div className="clearfix p-2 border-bottom">
					<p className="float-left font-weight-bold"> Profile </p>	
				</div>				
				<h1 className="coming_content d-flex justify-content-center align-items-center"> Coming soon </h1>
			</div>					
			<ChatBox />

		</div>
		
		</>
	)
}

export default Coming;