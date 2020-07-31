const express = require('express');
const connectDB = require('./config/db.js');
const cors = require('cors')

const app = express();

// Connect database
connectDB();

app.get('/', (req, res) => {
    res.send('Hello from the API')
})

// Init middleware
app.use(express.json({ extended: false }));
app.use(cors())

// Define routes
app.use('/api/auth', require('./routes/api/auth.js'))

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})