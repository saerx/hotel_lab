const express = require('express');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');
const MongoClient = require('mongodb');
const createRouter = require('./helpers/create_router.js')

app.use(cors());
app.use(bodyParser.json());

MongoClient.connect('mongodb://localhost:27017')
.then((client) => {
    const db = client.db("hotel")
    const newBookings = db.collection("bookings")
    const bookingsRouter = createRouter(newBookings)
    app.use('/api/bookings', bookingsRouter)

})
.catch(console.err);

app.listen(3001, function() {
    console.log(`listening on port ${this.address().port}`)
});

