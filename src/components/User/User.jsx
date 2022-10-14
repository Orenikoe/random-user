import React from 'react'
import './User-style.css'

const User = ({data}) => {
    const {name: {first, title}, email, picture: {large}} = data

   
    return (
      <div className='card'>
      
      <img alt='pic' src={large} className="card-pic" />
      <div className="card-details">
        <div className="card-location-bar">
        {/* <img className="location-pin" alt="" src={pinMap}/> */}
        {/* <span className="grey-font location-country">{props.location} || </span> */}
        {/* <a href={props.googleMapsUrl}>View on google maps</a> */}
        </div>
         <div className="location-title">
          <h1>{title} {first}</h1>
         </div>
         <div className="travel-dates">
        <p>{email}</p>
      </div>
      <div className="card-description">
        {/* <p>{props.description}</p> */}
      </div>
      
      <br></br>
      </div>
  
    </div>
    );
}

export default User