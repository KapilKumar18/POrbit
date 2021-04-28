import React, { useState } from "react";
import "./Coming.css";
import ChatBox from "./ChatBox";

import "./bootstrap.min.css";

import { Link,Redirect, useHistory } from "react-router-dom";
import SideMenu from "./SideMenu";
import ProfileDetail from "./ProfileDetail";

const Coming = ({ page }) => {
  const [show, setShow] = useState(false);
  const history = useHistory();

  const users = JSON.parse(localStorage.getItem("users"));

  let user = null;

  const gotohome = () => {
    localStorage.clear();
    history.push("/profile");
  };

  if (localStorage.getItem("currentUser")) {
    user = JSON.parse(localStorage.getItem("currentUser"));
  }

  if (!user) {
    return <Redirect to="/" />;
  }

  user && localStorage.setItem("currentUser", JSON.stringify(user));

  return (
    <>
      <div className="row m-5 coming_height">
        <SideMenu />
        <div className="col-md-10 px-5">
          <div className="clearfix p-2 border-bottom">
            <p className="float-left font-weight-bold"> Profile </p>
            {show ? (
              <div className="user_popup pb-5 bg-light">
                <div>
                  <div className="current_user d-flex  align-items-center flex-column pt-5 border-bottom ">
                    <img src={user[0].profilepicture} alt="profilepicture" />
                    <p className="font-weight-bold"> {user[0].name}</p>
                    <p className="font-weight-bold text-muted">
                      {user[0].email}
                    </p>
                  </div>
                  <ul className="list-group list-unstyled list-group-flush user_list mx-5 my-3 ">
                    {users.map((item) => (
                      <Link to={{ pathname: "/profile", userId: item.id }} key={item.id} className="p-1 text-decoration-none" >
                        {user[0].id !== item.id ? (
                          <li onClick={() => { setShow(!show);}}>
                            <a href="" className="text-decoration-none pl-3 text-dark" >
                              <img src={item.profilepicture} alt="profilepicture"/> {item.name}
                            </a>
                          </li>
                        ) : (
                          <li className="no_padd"></li>
                        )}
                      </Link>
                    ))}
                  </ul>
                  <div className="btn">
                    <p className="text-light bg-danger text-center w-25 p-2 rounded m-auto" onClick={gotohome} >Sign out </p>
                  </div>
                </div>
              </div>
            ) : null}
            <p className="float-right user_switch" onClick={() => setShow(!show)} >
              <img className="mr-3" src={user[0]?.profilepicture} alt="profilepicture" /> {user[0]?.name}
            </p>
          </div>
          <h1 className="coming_content d-flex justify-content-center align-items-center h-100 w-100"> Coming Soon </h1>
          <ChatBox user={users} selectedUser={user[0].id} />
        </div>
      </div>
    </>
  );
};

export default Coming;
