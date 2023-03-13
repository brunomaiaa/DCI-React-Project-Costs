import React from 'react';
import { Routes ,Route, Navigate } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './components/pages/Home';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Contact from './components/pages/Contact';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Projects from './components/pages/Projects';

function App() {
  return (
    <BrowserRouter>
     
      <Routes>
        <Navbar/>
        <Container customClass="min-height">
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/company" element={<Company/>}/>
        <Route path="/projects" element={<Projects/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="*" element={<Navigate to="/" /> }/>
        
       
        </Container>
        <Footer/>
        </Routes>
        </BrowserRouter>
  );
}

export default App;
