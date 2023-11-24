// src/routes/apiRoutes.js

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const authenticate = require('../middlewares/auth');
const bcrypt = require('bcrypt');

require('dotenv').config();


router.post('/login',async(req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({ error: 'Authentication failed. User not found.' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Authentication failed. Wrong password.' });
        }

        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

        
        res.status(201).json({ user: user });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
});

router.post('/register', async(req, res) => {
    try {
        const { firstname, lastname, email, password, mobile } = req.body;
        const emailExists = await User.findOne({ email });
        const hashedPassword = await bcrypt.hash(password, 10);
          if(emailExists){
            res.status(500).json({ error: "This Email is already Exist" });
          }else{
            
            
            const user = await User.create({ firstname, lastname, email, mobile, password:hashedPassword});

            // Generate and send a token
            const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
            res.status(201).json({ 
                 user:user,
                token:token });
          }
       
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.post('/logout', (req, res) => {
    res.status(200).json({ message: 'Logout successful' });
  });
  

// Export the router
module.exports = router;
