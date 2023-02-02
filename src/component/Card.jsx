import React from 'react'
import "../style.css"
function Card(props) {
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
    
 

   
  return (
    <div className='card'>
        <div className="box">hey</div>
        <div className="box">
            <div className="heading">Contact</div>
            <div className="subHeading">{name}</div>
        </div>
        <div className="box">
            <div className="heading">City</div>
            <div className="subHeading">Mumbai</div>
        </div>
        <div className="box">
            <div className="heading">State</div>
            <div className="subHeading">Maharastra</div>
        </div>
        <div className="box">
            <button className=' detailsButton'>View Details</button>
        </div>
    </div>

  )
}

export default Card