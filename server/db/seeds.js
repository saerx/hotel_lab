use hotel;
db.dropDatabase();

db.bookings.insertMany([

    {
        "name": "Bobsun Dugnutt",
        "email": "bdug@mod.guv",
        "checked-in": true
    },
    {
        "name": "Willie Dustice",
        "email": "dustice.mod.guv",
        "checked-in": false
    }
]);