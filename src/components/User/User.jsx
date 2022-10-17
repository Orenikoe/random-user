import React from 'react'
import './User-style.css'

const User = ({data}) => {
    const {name: {first, title}, email, picture: {large}, location: {city, country }} = data

   
    return (
      <div className='card'>
      
      <img alt='pic' src={large} className="card-pic" />
      <div className="card-details">
        <div className="card-location-bar">
        <img className="location-pin" alt="" src='https://www.clipartmax.com/png/middle/236-2368050_free-map-pin-icon-png-map-pin-yellow-png.png'/>
        <span className="grey-font location-country">{country} || {city} </span>
        </div>
         <div className="location-title">
          <h1>{title} {first}</h1>
         </div>
         <div className="travel-dates">
        <p>{email}</p>
      </div>
      <div className="card-description">
      </div>
      
      <br></br>
      </div>
    </div>
    
    );
}

export default User