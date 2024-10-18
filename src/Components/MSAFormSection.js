import React, { useCallback } from 'react';

export default function MSAFormSection(props) {

  return (
    <section className='form-sec'>
        <label>{props.label}</label>
        <input type={props.type} id={props.id} required={props.required?true:false} pattern={props.regex}/>
    </section>
  );
}

//