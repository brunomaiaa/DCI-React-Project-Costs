import React from 'react';
import { Routes ,Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';

import Home from './components/pages/Home';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Contact from './components/pages/Contact';
import Container from './components/layout/Container';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Projects from './components/pages/Projects';
import Project from './components/pages/Project';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Container customClass="min-height">
      <Routes>
       
        <Route path="/" element={<Home/>} />
        <Route path="/company" element={<Company/>}/>
        <Route path="/projects" element={<Projects/>} />
        <Route path="/newproject" element={<NewProject/>} />
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/project/:id" element={<Project/>}/>
      
        </Routes>
        </Container>
        <Footer/>
        </BrowserRouter>
  );
}

export default App;
