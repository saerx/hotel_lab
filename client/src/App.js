import { useState, useEffect } from 'react'

import './App.css';

import { getBookings } from './BookingService'
import BookingGrid from './BookingGrid'




function App() {

const [bookings, setBookings] = useState([]);

useEffect(() => {
  getBookings().then((allBookings)=>{
    setBookings(allBookings);
  })
}, []);

  
  return (
   <>
    <h1>Gotel</h1>
    <BookingGrid bookings={bookings}/>
    </>
  );
}

export default App;
