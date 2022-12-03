import './App.css';

import { useState } from "react";
import { Routes, Route } from "react-router-dom";

// Import Pages
import AddApartmentPage from './pages/AddApartmentPage';
import ApartmentsPage from './pages/ApartmentsPage';

// Import Navbar 
import Navbar from './component/NavBar';

function App() {
    const [apartments, setApartments] = useState([]);
  
    return (
      <>
        <Navbar />
        
        <Routes>
          <Route path="/" element={<ApartmentsPage />} />
          <Route path="/apartments/new" element={<AddApartmentPage />} />
        </Routes>
      </>
    );
}

export default App;
