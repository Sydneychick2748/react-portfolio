    import React from 'react';
    
    

import './App.css';
import NavBar from './sections/navbar/NavBar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Portfolio from './sections/portfolio/Portfolio';
import Contact from './sections/contact/Contact';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Resume from './sections/resume/Resume';
import Footer from './sections/footer/Footer';



const App = () => {
  return (
  <main>
   
     <NavBar />
     <Header/>
     <About/>
    <Portfolio/>
    <Resume/>
    <Contact/>
  
    <Footer/>
    <FloatingNav/>


  </main>
    

    
  );
}


export default App;
