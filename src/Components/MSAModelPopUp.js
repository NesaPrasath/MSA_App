import React, { useEffect, useState } from 'react';

export default function MSAModelPopUp(props) {
  const [show,setShow]=useState();

  useEffect(()=>{
    setShow(props.show)
  },[props.show])

  return (
    <div className={`fxd-full-outer-div ${show?'show':'hide'}`}>
      <div className='mdl-popup-div'>
        {props.header&&<section className='mdl-popup-header'><h3>{props.header}</h3></section>}
        <section className='mdl-popup-msg'><label>{props.message}</label></section>
        <section className='md-popup-ftr'><button className='md-popup-btn' onClick={()=>{setShow(false)}}>{props.btn}</button></section>
      </div>
    </div>
  );
}
