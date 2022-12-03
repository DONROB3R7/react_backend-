import React from 'react'
import { useState } from "react";
import axios from 'axios';

export default function AddApartmentPage() {

    const [headline, setHeadline] = useState("");  
    const [price, setPrice] = useState(1);   

    const handleSubmit = (e) => {          
        e.preventDefault();
        // Get the value from input headline
        // console.log(e.currentTarget.elements.headline.value);
        
        // Send and Object to the server 
        const body = { title: headline, pricePerDay: price };

        axios
            .post("https://ironbnb-m3.herokuapp.com/apartments", body)
            .then((response) => {
            console.log(response);
            // Reset the state
            setHeadline("");
            setPrice(1);
        });
    
      };

  return (
    <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input
                type="text"
                name="headline"
                onChange={(e) => setHeadline(e.target.value)}
                value={headline}
            />
                
            <label>Price per Day</label>
            <input
                type="number"
                name="pricePerDay"
                onChange={(e) => setPrice(e.target.value)}
                value={price}
            />
             
            
            <button type="submit">Create Apartment</button>
  </form>
  )
}
