const jwt = require('jsonwebtoken');
const key = require('../../config');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, key.JWT);
        req.userData = decoded;
        next()
    }
    catch (err) {
        console.log(err)
        res.status(401).json({ message: 'Auth failed' });
    }
};