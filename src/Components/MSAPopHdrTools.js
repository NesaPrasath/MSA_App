import React from 'react';

export default function MSAPopHdrTools(props) {
  return (
    <section className=''>
            <button className='phdr-minimize-btn'><i className="fa-solid fa-window-minimize"></i></button>
            <button className='phdr-close-btn' onClick={props.handleVisibility}><i className="fa-solid fa-xmark"></i></button>
    </section>
  );
}
