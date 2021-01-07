import "./BookingGrid.css"
import BookingItem from "./BookingItem"

const BookingGrid = ({bookings}) => {

    const bookingsList = bookings.map((booking) => {
        return (
            <BookingItem 
                guest_name={booking.name}
                email={booking.email}
                check_in={booking["checked-in"]}
                key={booking._id}
                />
        )
    })

    return (
        <div >
        <h2>Booking Grid</h2>
        <ul id="grid">{bookingsList}</ul>
        </div>
    )
}

export default BookingGrid;