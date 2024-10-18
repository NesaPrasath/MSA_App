import { BrowserRouter, Route, Routes} from 'react-router-dom';
import './App.css';
import Login from './Pages/Login';
import Home from './Pages/Home';
import { useEffect, useState } from 'react';
import MainSharedLayout from './Layout/MainSharedLayout';

function App() {
  const [auth,setAuth]=useState(sessionStorage.getItem('token'));

  // const handlAuth=useCallback(()=>{
  //   if(sessionStorage.getItem('token'))
  //   setAuth({token:sessionStorage.getItem('token'),user:sessionStorage.getItem('user')})
  // },[])

  useEffect(()=>{
    if(sessionStorage.getItem('token'))
    setAuth({token:sessionStorage.getItem('token'),user:sessionStorage.getItem('user')})
  },[])

  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/login' Component={Login}/>
        <Route path='/main/*' Component={MainSharedLayout}/>
      </Routes>
      {/* <MSAChatBox/> */}
      {/* <MSASubmitForm/> */}
    </BrowserRouter>
    </div>
  );
}

export default App;
