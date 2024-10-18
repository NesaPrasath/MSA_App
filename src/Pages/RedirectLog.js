import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function RedirectLog() {
    const navigate=useNavigate();
    useEffect(()=>{
        navigate("/login");
    },[navigate])
  return (
    <div>
      <h1>Please Login!</h1>
    </div>
  );
}
