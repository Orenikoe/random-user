import React from 'react'
import { ButtonContext } from '../../UserContext.js'
import { EditArea } from './EditArea.jsx'

const EditBtn = (props) => {
const [isClicked, setIsClicked] = React.useState(null)

function clickToggle() {
    !isClicked ? setIsClicked(true) : setIsClicked(false);
}

  return (
    <div>
      <ButtonContext.Provider value={{clickToggle}}>
        <button onClick={clickToggle}>Edit</button>
        {isClicked && <EditArea data={props.data} setInLocalStorage={props.setInLocalStorage} edit={props.edit}/>}

      </ButtonContext.Provider> 
    </div>
  )
}

export default EditBtn