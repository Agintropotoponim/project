import React from 'react';
import MainPage from '../pages/MainPage';
import { Route, Routes } from 'react-router-dom'
import TourPlate from './UI/Tour/TourPlate';
import LoginForm from '../pages/LoginForm';
import TestAuth from '../pages/TestAuth';
import Logout from '../pages/Logout';
import RegisterForm from '../pages/RegisterForm';
import Profile from '../pages/Profile';
import Emoloyees from '../pages/Employees';
import PageIsNotFound from '../pages/PageIsNotFound';
import Tours from '../pages/Tours';

function AppRouter() {
    return (
        <Routes>
            <Route element={<MainPage />} path='/' />
            <Route element={<TourPlate />} path='/tours' />
            <Route element={<LoginForm />} path='/login' />

            <Route element={<TestAuth />} path='/testauth' />

            <Route element={<Logout />} path='/logout' />
            <Route element={<RegisterForm />} path='/registration' />
            <Route element={<Profile />} path='/profile' />

            <Route element={<Emoloyees />} path='/employees/:id' />
            <Route element={<Tours />} path='/tours/:id' />

            <Route element={<PageIsNotFound />} path='/status500' />
        </Routes>
    );
}

export default AppRouter;