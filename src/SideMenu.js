import React from 'react';
import { Link } from 'react-router-dom';

const SideMenu = () =>{
    return(
        <div className="col-3 bg-primary p-5 menu">
            <ul className="d-flex justify-content-end list-group list-group-flush list-unstyled font-weight-bold p-4 m-0">
                <li className="list-group-item"> <Link to="/profile" className="text-decoration-none text-light" > 	 Profile  </Link> </li>
                <li className="list-group-item"> <Link to="/posts"   className="text-decoration-none text-light" > 	 Posts	  </Link> </li>
                <li className="list-group-item"> <Link to="/gallery" className="text-decoration-none text-light" >   Gallery  </Link> </li>
                <li className="list-group-item"> <Link to="/todo" 	 className="text-decoration-none text-light" > 	 ToDo	  </Link> </li>
            </ul>					
        </div>
    )
}

export default SideMenu;