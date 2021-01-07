import { postBooking } from "./BookingService";
import { useState } from "react"
const BookingForm = ({addBooking}) => {

    const [formData, setFormData] = useState({})

    const onChange = (data) => {
        formData[data.target.id] = data.target.value;
        setFormData(formData);
    }

    const onSubmit = (data) => {
        data.preventDefault();
        postBooking(formData).then(()=> {
            addBooking(formData)
        })
    }
 
    return (

        <form onSubmit={onSubmit}>
            <input onChange={onChange}
                type="text"
                name="guest_name"
                id="name"
                placeholder="enter guest name"
            ></input>
            <input onChange={onChange}
                type="text"
                name="email"
                id="email"
                placeholder="email"
            ></input>
            {/* <input type="button" value="check-in/-out"></input> */}
            <input type="submit" value="save" id="save"/>
        </form>
    )
}

export default BookingForm;