import React, { useState, useEffect } from "react";
import "./ChatBox.css";
import { Link } from "react-router-dom";
import "../node_modules/font-awesome/css/font-awesome.min.css";

const ChatBox = ({ user, selectedUser }) => {
  const [show, setShow] = useState(false);
  const [showchat, setShowChat] = useState(false);
  const [selectedId, setSelectedId] = useState();

  useEffect(() => {
    console.warn("selectedUser => ", selectedUser);
  });

  return (
    <>
      <div>
        <p
          className="d-flex justify-content-around  rounded chat_box p-3 bg-primary" onClick={() => { setShow(!show); setShowChat(!setShowChat);}} >
            <i className="p-auto fa fa-comment  m-auto"></i> Chats
            <i className="fa fa-chevron-up  m-auto" aria-hidden="true"></i>            
        </p>
        {
              showchat? 
                <div className="chatbox bg-light">
                  <div>
                    <ul className="list-group list-unstyled list-group-flush user_list ">
                      {user.map((item) => (
                        <div key={item.id} className="text-decoration-none">
                          {selectedId == item.id ? (
                            <div>
                            <p className="text-decoration-none p-3 bg-primary text-dark w-100 d-flex justify-content-around chat_user" >
                              <img src={item.profilepicture} alt="profilepicture" /> {item.name}
                              <i onClick={() => { setShowChat(false); }} className="fa fa-times ml-5"></i>
                            </p>   
                            <div className="p-2">
                                  <p className="border mr-5">Lorem random Text</p> 
                                  <p className="border mr-5">Lorem random Text</p> 
                                  <p className="border mr-5">Lorem random Text</p> 
                                  <p className="border ml-5">Lorem random Text</p> 
                                  <p className="border ml-5">Lorem random Text</p> 
                                  <p className="border mr-5">Lorem random Text</p> 
                                  <p className="border mr-5">Lorem random Text</p> 
                                  <p className="border mr-5">Lorem random Text</p> 
                                  <p className="border ml-5">Lorem random Text</p> 
                                  <p className="border mr-5">Lorem random Text</p> 
                                  <p className="border ml-5">Lorem random Text</p> 
                                  <p className="border ml-5">Lorem random Text</p> 
                                  <p className="border mr-5">Lorem random Text</p>
                             
                            </div>
                             <div className="chat_current_user"> 
                                    <input type="text" className="bottom" />
                                    <i className=" fa fa-send text-primary"></i>
                              </div>  
                            </div>
                            
                          ) : (
                            null
                          )}
                        </div>
                      ))}
                    </ul>
                  </div>
                </div> : null
            }
        {show ? (
          <div className="chat_popup py-4 bg-light">
            <div>
              <ul className="list-group list-unstyled list-group-flush user_list mx-3 ">
                {user.map((item) => (
                  <div key={item.id} className="p-1 text-decoration-none">
                    {selectedUser !== item.id ? (
                      <li  onClick={() => { setShowChat(true); setSelectedId(item.id) }} className="active text-decoration-none pl-3 text-dark" >
                        <img src={item.profilepicture} alt="profilepicture" /> {item.name}
                      </li>
                    ) : (
                      <li className="no_padd"></li>
                    )}
                  </div>
                ))}
              </ul>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default ChatBox;
