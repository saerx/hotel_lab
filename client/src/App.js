import { useState, useEffect } from 'react'

import './App.css';

import { getBookings, postBooking } from './BookingService'
import BookingGrid from './BookingGrid'
import BookingForm from './BookingForm'




function App() {

const [bookings, setBookings] = useState([]);

useEffect(() => {
  getBookings().then((allBookings)=>{
    setBookings(allBookings);
  })
}, []);

const addBooking = (booking) => {
  const temp = bookings.map(s => s);
  temp.push(booking);
  setBookings(temp);
}


  
  return (
   <>
    <h1>Gotel</h1>
    <BookingGrid bookings={bookings}/>
    <BookingForm addBooking={addBooking}/>
    </>
  );
}

export default App;
