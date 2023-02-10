import React from 'react'
import { Fragment } from 'react';



import {
    Route,
    Routes
  } from "react-router-dom";
import Footer from './components/Footer';

import NavBar from './components/NavBar';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import FormPage from './pages/FormPage';
import HomePage from './pages/HomePage';
import Test from './pages/Test';

function AppRouter(props) {
  const {checked,onChange}=props
  return (
    <Fragment>
    <NavBar checked={checked} onChange={onChange} />
    <Routes>
    <Route exact path="/contact"  element={<ContactPage  key={Date.now()} />} />
    <Route exact path="/getstarted"  element={<FormPage  key={Date.now()} />} />
    <Route exact path="/test"  element={<Test  key={Date.now()} />} />

    <Route exact path="/about"  element={<AboutPage  key={Date.now()} />} />
    <Route exact path="/" element={<HomePage  key={Date.now()} />} />

    </Routes>
    <Footer />
    </Fragment>
    
  )
}

export default AppRouter