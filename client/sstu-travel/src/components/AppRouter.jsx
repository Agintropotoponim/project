import React from 'react';
import MainPage from '../pages/MainPage';
import { Route, Routes } from 'react-router-dom'
import TourPlate from './UI/Tour/TourPlate';
import LoginForm from '../pages/LoginForm';
import TestAuth from '../pages/TestAuth';


function AppRouter() {
    return (
        <Routes>
            <Route element={<MainPage />} path='/' />
            <Route element={<TourPlate />} path='/tours' />
            <Route element={<LoginForm />} path='/login' />

            <Route element={<TestAuth />} path='/testauth' />
        </Routes>
    );
}

export default AppRouter;