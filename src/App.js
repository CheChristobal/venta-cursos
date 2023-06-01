import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CourseList from './components/CourseList';
import Footer from './components/Footer';
import CoursePage from './pages/CoursePage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import CategoriesPage from './pages/CategoriesPage';



const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <Hero />
        <div className="content">
          <Routes>
            <Route path="/" element={<CourseList/>} />
            
            <Route path="/contact" element={<ContactPage/>} />
            <Route path="/about" element={<AboutPage/>} />
            <Route path="/categoria" element={<CategoriesPage/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
