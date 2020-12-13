import React from "react"
import "./styles.css"
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function Spinner() {
  return (
    <div className='spinnerContainer'>
      <FontAwesomeIcon icon={faSpinner} className='spinner' />
    </div>
  )
}

export default Spinner
