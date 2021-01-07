const baseURL = 'http://localhost:3001/api/bookings'

export const getBookings = () => {
    return fetch(baseURL)
        .then(res => res.json())
}