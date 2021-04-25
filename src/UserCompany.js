import React from 'react';

const UserCompany = ({user}) => {
    return(
        <>
            <div className="pt-4 font-weight-bold">
                <p className="text-muted"> Company </p>
                <div className="d-flex justify-content-center">
                    <div className="col-5 text-right text-muted">
                        <p> Name : </p>
                        <p> catchphrase : </p>
                        <p> bs : </p>
                    </div>
                    <div className="col-7 text-left">
                        <p> {user[0]?.company?.name} </p>
                        <p> {user[0]?.company?.catchPhrase} </p>
                        <p> {user[0]?.company?.bs} </p>
                    </div>						
                </div>
            </div>
        </>
    )
}

export default UserCompany;