import React from 'react';

const UserInfo = ({user}) => {
    return(
        <div className="border-bottom font-weight-bold">
        <img className="profile_img" src={user[0].profilepicture} alt="profilepicture" />
        <p className="pt-4"> {user[0].name} </p>
            <div className="d-flex justify-content-center">
                <div className="col-5 text-right text-muted">
                    <p> Username : </p>
                    <p> e-mail : </p>
                    <p> Phone : </p>
                    <p> Website : </p>
                </div>
                <div className="col-7 text-left">
                    <p> {user[0].username} </p>
                    <p> {user[0].email} </p>
                    <p> {user[0].phone} </p>
                    <p> {user[0].website} </p>
                </div>
            </div>
</div>

    )
}

export default UserInfo;