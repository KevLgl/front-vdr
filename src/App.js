import React, { useState, useEffect } from 'react'
import './App.css';
import { Switch, Route } from 'react-router-dom'
// COMPONENTS
import Dropdownmenu from './components/Dropdownmenu';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
// PAGES
import Home from './pages/home';
import Boutique from './pages/boutique';
import Contact from './pages/contact';
import Equipes from './pages/equipes';
import Leclub from './pages/leclub';
import Licences from './pages/licences';



function App() {
  return (
    <>
      <Navbar />
      <Dropdownmenu />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/leclub' exact component={Leclub} />
        <Route path='/equipes' exact component={Equipes} />
        <Route path='/boutique' exact component={Boutique} />
        <Route path='/licences' exact component={Licences} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
