import React from 'react';
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
        <NavLink to="/">
        <button>Home</button>
        </NavLink>
        
        <NavLink to="/apartments/new">
        <button>Add Apartment</button>
        </NavLink>
  </nav>
  )
}
