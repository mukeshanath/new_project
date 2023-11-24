const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const authrouter = require('./src/routes/AuthRoutes');
const mongoose = require('mongoose');
const cors = require('cors');
const session = require('express-session');
// const verifyToken = require('../middlewares/auth');
 

require('dotenv').config();


app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(session({
    secret: process.env.SESSION_SECRET_KEY, // Change this to a secure random key
    resave: false,
    saveUninitialized: true,
    // You can set other options as needed
  }));

// Connect to MongoDB (replace 'mongodb://localhost:27017/your-database' with your MongoDB URI)
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Get the default connection
const db = mongoose.connection;

// Bind connection to error event (to get notifications of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Bind connection to open event (to get notifications when the connection is successfully opened)
db.once('open', () => {
    console.log('Connected to MongoDB');
});

// Bind connection to close event (to get notifications when the connection is closed)
db.on('close', () => {
    console.log('Connection to MongoDB closed');
});


// Simple route
app.use('/auth', authrouter);
// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
