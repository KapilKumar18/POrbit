import React, { useState, useEffect } from "react";
import "./ProfileDetail.css";
import UserInfo from "./UserInfo";
import UserCompany from "./UserCompany";
import UserAddress from "./UserAddress";
import { useHistory, Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ChatBox from "./ChatBox";

const ProfileDetail = ({ user, page }) => {
  const location = useLocation();

  const [show, setShow] = useState(false);

  const users = JSON.parse(localStorage.getItem("users"));

  const gotohome = () => {
    localStorage.clear();
    history.push("/profile");
  };

  const history = useHistory();

  return (
    <div className="col-10 px-5 profile">
      <div className="clearfix p-2 border-bottom">
        <p className="float-left font-weight-bold"> {page} </p>
        {show ? (
          <div className="user_popup pb-5 bg-light">
            <div>
              <div className="current_user d-flex  align-items-center flex-column pt-5 border-bottom ">
                <img src={user[0].profilepicture} alt="profilepicture" />
                <p className="font-weight-bold"> {user[0].name}</p>
                <p className="font-weight-bold text-muted"> {user[0].email}</p>
              </div>
              <ul className="list-group list-unstyled list-group-flush user_list mx-5 my-3 ">
                {users.map((item) => (
                  <Link to={{ pathname: "/profile", userId: item.id }} key={item.id} className="p-1 text-decoration-none" >
                    {user[0].id !== item.id ? (
                      <li onClick={() => { setShow(!show); }} > 
                        <a href="" className="text-decoration-none pl-3 text-dark">
                          <img src={item.profilepicture} alt="profilepicture" /> {item.name}
                        </a>
                      </li>
                    ) : (
                      <li className="no_padd"></li>
                    )}
                  </Link>
                ))}
              </ul>
              <div className="btn">
                <p className="text-light bg-danger text-center w-25 p-2 rounded m-auto" onClick={gotohome}> Sign out </p>
              </div>
            </div>
          </div>
        ) : null}
        <p className="float-right user_switch" onClick={() => setShow(!show)}>
          <img className="mr-3" src={user[0]?.profilepicture} alt="profilepicture" /> {user[0]?.name}
        </p>
      </div>
      <div className="row py-5 h-75">
        <div className="col-5 text-center">
          <UserInfo user={user} />
          <UserCompany user={user} />
        </div>

        <div className="col-7 border-left pl-5 font-weight-bold">
          <UserAddress user={user} />
        </div>
      </div>
      <ChatBox user={users} selectedUser={user[0].id} />

    </div>
  );
};

export default ProfileDetail;
