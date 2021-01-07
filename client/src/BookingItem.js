import BookingGrid from "./BookingGrid"

const BookingItem = ({guest_name, email, check_in}) => {

    let check_status = null
    if (check_in) {
        check_status = "checked in  !!!" 
    } else {
        check_status = "not checked in !!!"
    }

    return (
        <>
            <h1> {guest_name}</h1>
            <h2> {email} </h2>
            <h3>{check_status}</h3>
        </>
    )
}

export default BookingItem;