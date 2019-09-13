import React from 'react';
import logo from './logo.svg';
import './App.css';
import LoginPage from './pages/login/login';
import Profile from './pages/profile/profile';
import DashBoard from './pages/dashboard/dashboard';
import MainRouter from './config/route';
import MenuBar from './components/menu-bar/menu-bar';
import HeaderElement from './components/header/header';
import HomePage from './pages/home/home';
import FooterElement from './components/footer/footer';

function Xu() {
  return (
    <React.Fragment>
      <div className="Xu">
        <MenuBar></MenuBar>
        <HeaderElement></HeaderElement>
        <MainRouter></MainRouter>
        <FooterElement></FooterElement>
      </div>
    </React.Fragment>
  );
}

export default Xu;
