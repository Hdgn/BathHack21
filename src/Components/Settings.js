import React from 'react'
import Details from './modal/Details'


const ModalsComponent = (props) => {

  const showHideClassName = "modal " + (props.show ? "display" : "none")

  const handleClickOutside = (event) => {
    if (event.target.className === 'modal display') {
      props.hideModal()
    }
  }
  
  const modalContent = (props.modalType==='FAQ') ? (<Faq/>) : ((props.modalType==='Log') ? (<Log {...props.logProps}/>) : (<Settings {...props.settingsProps}/>))

  return(
    <div className={showHideClassName} onClick={(e)=> handleClickOutside(e)}>
      <div className="modal-main">
        <button className="close-button" onClick={props.hideModal}>X</button>
        {modalContent}
      </div>
    </div>
  )
}

export default ModalsComponent;
