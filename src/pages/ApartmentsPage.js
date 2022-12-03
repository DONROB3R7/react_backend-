import React from 'react'
import { useState, useEffect  } from "react";
import axios from "axios";        

export default function ApartmentsPage() {

    const [apartments, setApartments] = useState([]);
    
    useEffect(() => {  
    axios
    .get("https://ironbnb-m3.herokuapp.com/apartments")
    .then((response) => {
      console.log('response.data', response.data);
      setApartments(response.data)
    });
   }, [])

   console.log(apartments.length)
    return (
      <div>
            <h3>List of apartments</h3>

            {apartments.length === 0 ? (
                <h4>No apartments to show . GET the data from the API!</h4>
            ) : <>
                    {apartments.map((apartment) => (
                        <div key={apartment._id} className="card">
                        <img src={apartment.img} alt="apartment" />
                        <h3>{apartment.title}</h3>
                        <p>Price: {apartment.pricePerDay}</p>
                    </div>
                    ))}
                </>
            }
      </div>
    );
}
