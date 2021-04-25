import React from 'react';
import { Link } from 'react-router-dom';

const AllUsers = ({user}) => {

return( 
       
    <>  
        <div className="user_account">
            <ul className="list-group list-unstyled list-group-flush user_list px-5">
                {		
                    user.map((item) => 			  
                        <Link to={{pathname:'/profile', userId:item.id}} key={item.id} className="list-group-item">
                            <li> 	<a href="" className="text-decoration-none pl-3 text-dark">
                                    <img src={ item.profilepicture } alt="profilepicture"/> {item.name}</a> 
                            </li>
                        </Link>
                )}
            </ul>
        </div>
    </>
)
}

export default AllUsers;