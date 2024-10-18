import React, { useCallback, useEffect, useState } from 'react';
import MSAFormSection from '../Components/MSAFormSection';
import { Regex } from '../Common/Regex';
import { PostRequest } from '../Common/DBConnection';
import { useNavigate } from 'react-router-dom';
import MSAModelPopUp from '../Components/MSAModelPopUp';

export default function Login(props) {
  const param=new URLSearchParams(window.location.search)
  const [type,setType]=useState(param.get('type')?.toLowerCase()==="register"?param.get('type')?.toLowerCase():"login");
  const [mdlpup,setMdlpup]=useState({header:"",message:"",btn:"",show:false})
  // const [logdet,setLogdet]=useState(false);
  const nav=useNavigate();

  const handleRedirect=useCallback((e)=>{
    nav('/login?type=login')
    setType(e.target.value)
  },[nav])

  const handleSubmit=useCallback(async(e)=>{
    e.preventDefault();
    // eslint-disable-next-line eqeqeq
    if(type=="register"){
      if(e.target[1].value!==e.target[2].value){
        setMdlpup(data=>({...data,header:"Error",message:"Password is not Matched",btn:"Ok",show:true}))
        return false;
      }
    }
    const data=type==='login'?{
      "userName":e.target[0].value,
      "userPass":e.target[1].value
    }:{
      "uname":e.target[0].value,
      "upass":e.target[1].value,
      "email":e.target[3].value
    }
    await PostRequest(type==='login'?"auth/login":"auth/signup",data,(data)=>{
      data.json().then(data=>{
        if(data.token){
              sessionStorage.setItem('token',data.token);
              sessionStorage.setItem('user',atob(data.token.split('.')[1]))
              nav('/');
            }
            else{
              setMdlpup(data=>({...data,header:"Success",message:"User Created Successfully",btn:"Ok",show:true}))
            }
      })
     })
    e.target.reset();
  },[nav, type])

  useEffect(()=>{
    if(sessionStorage.getItem('token')){
      nav('/')
    }
  },[nav])


  return (
    <>
    {type?<div className='login-out-div'>
    <div className='login-div'>
      <h1>{type==="register"?"Create Account":"Login"}</h1>  
      <form className='login-form' onSubmit={handleSubmit}>
        <MSAFormSection label="User Name" id="uname" type="text" required={true} errmsg={"UserName cannot be empty"}/>
        <MSAFormSection label="Password" type="password" id="pass" required={true} errmsg={"PassWord cannot be empty"}/>
        {type==="register"&&<MSAFormSection label="Confirm-Password" type="password" required={true} errmsg={"Please Re-Type Password"}/>}
        {type==="register"&&<MSAFormSection label="MailId" type="text" required={true} regex={Regex("EmailId")} errmsg={"Enter the Valid Email"}/>}
        <input type='submit' value={type==="register"?'Submit':'Login'} className='login-btn'/>
        <button type='button' className='login-btn' onClick={handleRedirect} value={type!=="register"?"register":"login"}>{type!=="register"?'Forgot Password?':'Sign in'}</button>
      </form>
      {type!=="register"&&<a href='/login?type=register'>Create Account</a>}
    </div>
    <MSAModelPopUp header={mdlpup.header} message={mdlpup.message} btn={mdlpup.btn} show={mdlpup.show} />
    </div>:<div>loading</div>}</>
  );
}
