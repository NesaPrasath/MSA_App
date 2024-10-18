import React from 'react';

export default function MSALabelInput(props) {
  return (
    <div className='label-input-div flex-between'>
      {props.Label&&<label>{props.Label}</label>}
      <input type={props.Type} required={props.required} />
    </div>
  );
}
