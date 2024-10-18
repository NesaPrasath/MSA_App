import React from 'react';

export default function MSAFriendCard() {
  return (
    <div className='cnt-card flex-between'>
                <span className='prof-pic'><img alt='prf-pic' src='image/f3bfb347393655.58823b49e7a36.png'/></span>
                {/* <h3>Micheal Jackson</h3> */}
                <section className='user-req-sec flex-between'>
                  <h5>Micheal Jackson</h5>
                  <section className='flex-between'>
                  <button className='round-btn tick-btn'>&#10004;</button>
                  <button className='round-btn cross-btn'>&#x2717;</button></section>
                </section>
    </div>
  );
}
