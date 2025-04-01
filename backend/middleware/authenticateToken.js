const jwt = require("jsonwebtoken");
require("dotenv").config();

const JWT_SECRET = process.env.JWT_SECRET;

const authenticateToken = (req, res, next) => {
  // Check for Authorization header
  const authHeader = req.headers['authorization'] || req.headers['Authorization'];
  
  if (!authHeader) {
    return res.status(401).json({ 
      success: false,
      message: "Access denied. No token provided.",
      code: "NO_TOKEN"
    });
  }

  // Verify header format
  const tokenParts = authHeader.split(' ');
  if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
    return res.status(401).json({
      success: false,
      message: "Invalid authorization header format. Use: Bearer <token>",
      code: "INVALID_HEADER"
    });
  }

  const token = tokenParts[1];

  // Verify token exists
  if (!token) {
    return res.status(403).json({ 
      success: false,
      message: "Access denied. No token provided.",
      code: "NO_TOKEN"
    });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET, {
      algorithms: ['HS256'], // Specify allowed algorithm
      ignoreExpiration: false // Explicitly check expiration
    });

    // Attach user to request
    req.user = {
      id: decoded.id,
      email: decoded.email,
      role: decoded.role // If you have roles in your JWT
    };

    // Continue to next middleware
    next();
  } catch (error) {
    console.error("JWT Verification Error:", error.message);

    // Handle specific JWT errors
    let statusCode = 401;
    let errorMessage = "Invalid token";
    let errorCode = "INVALID_TOKEN";

    if (error instanceof jwt.TokenExpiredError) {
      statusCode = 403;
      errorMessage = "Token expired. Please log in again.";
      errorCode = "TOKEN_EXPIRED";
    } else if (error instanceof jwt.JsonWebTokenError) {
      errorMessage = "Invalid token signature";
      errorCode = "INVALID_SIGNATURE";
    }

    return res.status(statusCode).json({
      success: false,
      message: errorMessage,
      code: errorCode
    });
  }
};

module.exports = authenticateToken;