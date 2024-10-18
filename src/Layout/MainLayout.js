import React from 'react';
import Headers from '../Components/Header';
import { Outlet } from 'react-router-dom';

export default function MainLayout() {
  return (
    <div>
      <Headers></Headers>
      <Outlet/>
    </div>
  );
}
