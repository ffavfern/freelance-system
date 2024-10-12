import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/user/Login'; 
import Home from './pages/user/Home';
import Footer from './components/Footer'; 





const App = () => {
  return (
    <><Router>
      <Routes>
        <Route path="/" element={<Home />} />  
        <Route path="/login" element={<Login />} />  
      </Routes>
    </Router>
    <Footer/>
    
    </>
    
    
  );
};

export default App;
