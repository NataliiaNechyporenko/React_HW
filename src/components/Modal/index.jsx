import React from 'react';
import './styles.css';

const Modal = ({ message, handleClose }) => {
    return (
    <div className = "Modal__overlay">
      <div className= "Modal">
        <p className="Modal__text">{ message }</p>
        <button className="Modal__close" onClick={ handleClose }>X</button>
      </div>
    </div>
  )
}

export default Modal;
