import React from 'react'

function Description(props) {
    try{
        var city= props.users.address.city;
        // var companyName= props.users.company.name;
        var contact= props.users.phone;
        var street = props.users.address.street;
        var description=props.users.company.catchPhrase;
        var name= props.users.name;
        var website =  props.users.website;
        var email = props.users.email;
    
        var address= props.users.address.suite;
        var username = props.users.username;

    }
    catch(err){

    }

  return (
    <div className='description'>
        <div className="top">
        <div className="heading descMargin">Description</div>
                <div className="subheading">{description}</div>
        </div>
        <div className="bottom">
            <div className="bLeft">
                <div className="pair">
                    <div className="heading">
                            Contact Person
                    </div>
                    <div className="subheading">
                        {name}
                    </div>
                </div>
                <div className="pair">
                    <div className="heading">Website
                    </div>
                    <div className="subheading">
                        {website}
                    </div>
                </div>
                <div className="pair">
                    <div className="heading">
                            Email
                    </div>
                    <div className="subheading">
                        {email}
                    </div>
                </div>
                <div className="pair">
                    <div className="heading">
                            Phones
                    </div>
                    <div className="subheading">
                        {contact}
                    </div>
                </div>
            </div>
            <div className="bRight">
            <div className="pair">
                    <div className="heading">
                            Address
                    </div>
                    <div className="subheading">
                        {address}
                    </div>
                </div>
                <div className="pair">
                    <div className="heading">
                            City
                    </div>
                    <div className="subheading">
                        {city}
                    </div>
                </div>
                <div className="pair">
                    <div className="heading">
                            Street
                    </div>
                    <div className="subheading">
                        {street}
                    </div>
                </div>
                <div className="pair">
                    <div className="heading">
                            Uid
                    </div>
                    <div className="subheading">
                        {username}
                    </div>
                </div>

            </div>
        </div>
    </div>
  )
}

export default Description