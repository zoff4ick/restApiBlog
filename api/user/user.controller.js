const User = require('./user.model');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const key = require('../../config');

exports.user_sign_up = async (req, res) => {

    const existedUser = await User.find({ email: req.body.email })
    if (existedUser.length > 0) {
        res.status(409).json({ message: 'Mail exists' });
    }
    else {
        bcrypt.hash(req.body.password, 10, async (err, hash) => {
            if (err) {
                return res.status(500).json({ error: err });
            }
            else {
                try {
                    const user = await new User({
                        _id: new mongoose.Types.ObjectId,
                        email: req.body.email,
                        password: hash
                    });
                    await user.save();
                    console.log(user);
                    res.status(201).json({
                        message: 'User created'
                    });
                }
                catch (err) {
                    res.status(500).json({
                        error: err
                    });
                }
            }

        });
    };
};

exports.user_delete_id = async (req, res) => {
    try {
        await User.remove({ _id: req.params.userId })
        res.status(200).json({
            message: 'User deleted'
        });
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
};

exports.user_sign_in = async (req, res) => {
    const user = await User.find({ email: req.body.email })
    if (user.length < 1) {
        res.status(401).json({ message: "Auth failed" });
    }
    bcrypt.compare(req.body.password, user[0].password, (err, result) => {
        if (result) {
            const token = jwt.sign({
                email: user[0].email,
                _id: user[0]._id
            }, key.JWT, {
                    expiresIn: '1h'
                })
            return res.status(200).json({ message: 'Auth successfully',token:token })
        } else {
            res.status(401).json({ message: "Auth failed" });
        }
    });
};