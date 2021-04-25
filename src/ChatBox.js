import React from 'react';
import './ChatBox.css';

const ChatBox = () =>{
    return(
        <>
        <div>
            <p className="d-flex justify-content-around rounded chat_box p-3 bg-primary w-25"><i className="p-auto fa fa-comment"></i> Chats <i class="fa fa-chevron-up" aria-hidden="true"></i></p>
        </div>
        </>
    )
}

export default ChatBox;