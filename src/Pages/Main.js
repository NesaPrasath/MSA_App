import Lobby from '../Components/Lobby';
import MSATools from '../Components/MSATools';
import MSASearchBar from '../Components/MSASearchBar';
import MSAFriendCard from '../Components/MSAFriendCard';

export default function Main() {
  
  return (
    <>
      <div className='main-area flex-between'>
        <div className='content-div'>
        <Lobby></Lobby>
        </div>
        <div className='aside-div'>
          <div className='ntwrk-div'>
            <section className='ntwrk-hdr flex-between'>
              <MSATools HeaderType={'contact'}></MSATools>
              <MSASearchBar/>
            </section>
            <section className='ntwrk-cnt'>
              <MSAFriendCard/>
              <MSAFriendCard/>
              <MSAFriendCard/>
              <MSAFriendCard/>
              <MSAFriendCard/>
              <MSAFriendCard/>
              <MSAFriendCard/>
            </section>
          </div>
          <div></div>
        </div>
      </div>
    </>
  );
}
