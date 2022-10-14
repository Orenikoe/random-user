import React from 'react'
import './User-style.css'

const User = ({data}) => {
    const {email} = data
    console.log('this' + data.name);
  return (
    <div>

        {/* <div>{title}</div> */}
        <div>{email}</div>
        {/* <div>{props.data.nat}</div>  */}

    </div>
  )
}

export default User