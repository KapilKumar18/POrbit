import React from 'react';

const UserAddress = ({user}) => {

    return(
        <>
						<p className="text-muted"> Address </p>
						<div className="d-flex">
							<div className="col-md-3 text-right text-muted">
								<p> Street : </p>
								<p> Suite : </p>
								<p> City : </p>
								<p> Zipcode : </p>
							</div>
							<div className="col-md-9 text-left">
								<p> {user[0]?.address?.street} </p>
								<p> {user[0]?.address?.suite} </p>
								<p> {user[0]?.address?.city} </p>
								<p> {user[0]?.address?.zipcode} </p>
							</div>					
						</div>	
						{/* <div className="d-flex justify-content-end">
							<p> <span className="text-muted">Lat: </span> {user[0].address.geo.lat} </p> 
								&nbsp; &nbsp;&nbsp;
							<p> <span className="text-muted">Long:</span> {user[0].address.geo.lng}  </p>
						</div> */}
                        </>
    )
}

export default UserAddress;