import React, { useEffect } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Main from '../Pages/Main';
import MainLayout from './MainLayout';
import About from '../Pages/About';

export default function MainSharedLayout() {
    const nav=useNavigate();

    useEffect(()=>{
        if(!sessionStorage.getItem('token')){
            nav('/login')
        }
    },[nav])
    return (
        <>
            <Routes>
                <Route path='/' Component={MainLayout}>
                <Route index Component={Main}/>
                <Route path='/about' Component={About}/>
                </Route>
            </Routes>
        </>
    );
}
