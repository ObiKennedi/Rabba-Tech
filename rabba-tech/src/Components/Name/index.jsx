import React from "react";
import './index.scss'

export default function Name({profilePicture, accountName, notificationNumber}){
    return(
        <div className="name">
            <div>
                <img src={profilePicture}/>
            </div>
            <div>
                <p>{accountName}</p>
                <h3>Welcome back 👋</h3>
            </div>
            <div>
                <img src={require('../../Assets/notifiication.png')}/>
                <small>{notificationNumber}</small>
            </div>
        </div>
    )
}