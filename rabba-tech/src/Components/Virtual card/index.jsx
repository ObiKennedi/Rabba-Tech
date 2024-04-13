import React from "react";
import './index.scss'
 
export default function VirtualCard({accountBalance,cardSpecifiaction,cardNumber,expireDate,accountName}){
    return(
        <div className="virtualcard">
            <div>
                <div><img src={cardSpecifiaction}/></div>
                <p>Balance</p>
                <p>${accountBalance}</p>
                <p>**** **** **** {cardNumber}</p>
                <p>{accountName}</p>
            </div>
            <div>
                <div>
                    <img src={require('../../Assets/pngwing.com.png')} alt="" />
                </div>
                <p>{expireDate}</p>
            </div>
            <div>
                <img src={require('../../Assets/7971.jpg')} alt="" />
            </div>
        </div>
    )
}