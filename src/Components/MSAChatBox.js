import React from 'react';
import MSAPopHdrTools from './MSAPopHdrTools';

export default function MSAChatBox() {

    function dragHandler(e){
        // console.log(e);
        console.log(e.clientX,e.target.parentElement);
        e.target.parentElement.style.left=e.clientX+'px'
        e.target.parentElement.style.top=e.clientY+'px'
        // moveChat(e.pageX-(e.clientX - e.getBoundingClientRect().left),e.pageY-(e.clientY - e.getBoundingClientRect().top),e.target.parentElement)
    }

    function moveHandler(e){
        moveChat(e.pageX,e.pageY,e.target.parentElement)
    }
    function moveChat(X,Y,e)
    {
        e.style.left=X+'px'
        e.style.top=Y+'px'
    }

  return (
    <div className='chatbox' >
      <div className='popup-hdr flex-between' onDrag={dragHandler} onDragEnter={dragHandler} onDragEnd={dragHandler}> 
        <section className='chat-user flex-between' onDrag={()=>{return false}}><span className='prof-pic chat-prof'><img alt='prf-pic' src='image/f3bfb347393655.58823b49e7a36.png'/></span>
        <h3>Micheal Jackson</h3>
        </section>
        <MSAPopHdrTools/>
      </div>
      <div className='chat-area'></div>
    </div>
  );
}
