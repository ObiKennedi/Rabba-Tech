import React from "react";
import './index.scss'
import Name from "../../Components/Name";
import VirtualCard from "../../Components/Virtual card";

export default function Home(){
    return(
        <div className="home">   
            <Name accountName={'Michael Current'} profilePicture={require('../../Assets/ULGI5619.JPG')}/>
            <VirtualCard accountBalance={'25,000.00'} cardSpecifiaction={require('../../Assets/visa-logo.png')} cardNumber={'7281'} accountName={'William Current'} expireDate={'12/27'}/> 
        </div> 
    )
}