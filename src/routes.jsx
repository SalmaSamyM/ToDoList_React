import React from 'react';
import { Route, Routes } from "react-router-dom";
import MainScreen from './Screens/MainScreen';
import SplashScreen from './Screens/SplashScreen';

const AppRoutes = () => (
    <>
    <Routes>
        <Route path="/" element={<SplashScreen/>} />
        <Route path="/MainScreen" element={<MainScreen />} />
    </Routes>
   </>
);

export default AppRoutes;