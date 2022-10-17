import React from 'react'
import { EditArea } from './EditArea.jsx'

const EditBtn = (props) => {
const [isClicked, setIsClicked] = React.useState(null)

function clickToggle() {
    !isClicked ? setIsClicked(true) : setIsClicked(false);
}

  return (
    <div>
        <button onClick={clickToggle}>Edit</button>
        {isClicked && <EditArea data={props.data} edit={props.edit}/>}
    </div>
  )
}

export default EditBtn