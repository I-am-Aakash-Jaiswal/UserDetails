import { createUnarySpacing } from '@mui/system';
import React, { useState } from 'react'
import "../style.css"
function Card(props) {
    const arr= ["View Details", "Hide Details"];
    const [current,setCurrent] = useState(0)



    try{
        var city= props.users.address.city;
        var companyName= props.users.company.name;
        var contact= props.users.phone;
        var street = props.users.address.street;
        var description=props.users.company.catchPhrase;
        var name= props.users.name;
        var website =  props.users.website;
        var email = props.users.email;
        var phone = props.users.phone;
        var address= props.users.address.suite;
        var username = props.users.username;

    }
    catch(err){

    }
    
    function handClick(){
        if(current==0){
            setCurrent(1);
        }
        else
        {
            setCurrent(0);
        }
    }

   
  return (
    <div className='card' onClick={handClick}>
        <div className="box">{companyName}</div>
        <div className="box">
            <div className="heading">Contact</div>
            <div className="subHeading">{name}</div>
        </div>
        <div className="box">
            <div className="heading">City</div>
            <div className="subHeading">{city}</div>
        </div>
        <div className="box">
            <div className="heading">Street</div>
            <div className="subHeading">{street}</div>
        </div>
        <div className="box">
            <button className=' detailsButton'>{arr[current]}</button>
        </div>
    </div>

  )
}

export default Card