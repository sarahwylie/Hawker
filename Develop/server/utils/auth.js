//TODO: AUTHENTICATE JSON WEB TOKEN (JWT)
//! Import dependencies
const jwt = require('jsonwebtoken');
require('dotenv').config();

//! Secret and expiration date for JWT (JSON Web Token)
const secret = process.env.JWT_SECRET; // secret to enable the server to verify whether it recognizes the token
const expiration = '2h'; // expiration date

//! Export the module
module.exports = {
  authMiddleware: function ({ req }) {
    //* allows token to be sent via req.body, req.query, or headers
    let token = req.body.token || req.query.token || req.headers.authorization;
    //* separate "Bearer" from "<tokenvalue>"
    if (req.headers.authorization) {
      token = token.split(' ').pop().trim();
    }

    //* if no token, return request object as is
    if (!token) {
      return req;
    }

    try {
      //* decode and attach user data to request object
      const { data } = jwt.verify(token, secret, { maxAge: expiration });
      req.user = data;
    } catch {
      console.info('Invalid token');
    }

    //* return updated request object
    return req;
  },
  //* expects a user object and will add that user's first name, last name, email and _id to the token
  signToken: function ({ firstName, lastName, email, _id }) {
    const payload = { firstName, lastName, email, _id };

    return jwt.sign({ data: payload }, secret, { expiresIn: expiration });
  }
};
