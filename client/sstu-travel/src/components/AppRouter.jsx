import React from 'react';
import MainPage from '../pages/MainPage';
import { Route, Routes } from 'react-router-dom'
import TourPlate from './UI/Tour/TourPlate';


function AppRouter() {
    return (
        <Routes>
            <Route element={<MainPage />} path='/' />
            <Route element={<TourPlate />} path='/tours' />
        </Routes>
    );
}

export default AppRouter;