import React from "react";
import './index.scss'

export default function Name({profilePicture, accountName}){
    return(
        <div className="name">
            <div>
                <div>
                    <img src={profilePicture}/>
                </div>
                <div>
                    <div>{accountName}</div>
                    <div>Welcome back 👋</div>
                </div>
            </div>
            <div>
                <div>
                    <img src={require('../../Assets/notifiication.png')}/>
                </div>
                <div>.</div>
            </div>
        </div>
    )
}