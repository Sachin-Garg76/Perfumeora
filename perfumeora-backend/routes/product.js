const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

router.get('/buy', (req, res) => {
  const token = req.headers.authorization?.split(' ')[1];

  if (!token) return res.status(401).json({ msg: 'No token. Login required.' });

  try {
    const verified = jwt.verify(token, process.env.JWT_SECRET);
    res.json({ msg: 'Access granted to Buy Now page', userId: verified.id });
  } catch (err) {
    res.status(401).json({ msg: 'Token is not valid' });
  }
});

module.exports = router;
