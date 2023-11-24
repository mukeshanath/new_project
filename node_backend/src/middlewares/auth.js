const jwt = require('jsonwebtoken');

const authenticate = (req, res, next) => {
    // Get the token from the Authorization header
    const token = req.cookies.access_token;

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized. Token is missing.' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token.replace('Bearer ', token), process.env.JWT_SECRET);
        
        // Attach the decoded user information to the request object
        req.user = decoded;

        // Continue to the next middleware or route handler
        next();
    } catch (error) {
        console.error(error);
        return res.status(401).json({ error: 'Unauthorized. Invalid token.' });
    }
};

module.exports = authenticate;
