const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./models/User')
const bcrypt = require('bcrypt');
const app = express();
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const salt = bcrypt.genSaltSync(10);
// const hash = bcrypt.hashSync("B4c0/\/", salt);
const secret = 'geheq73dshj537hjfdskh5';

app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json());
app.use(cookieParser());
// app.use('/uploads', express.static(__dirname + '/uploads'));


mongoose.connect('mongodb+srv://SianCodes:rgvLN7ptnmPm3oHL@cluster0.das0otb.mongodb.net/?retryWrites=true&w=majority');

app.post('/blog/register', async (req, res) => {
    const {username, password} = req.body;
    try {
        const userDoc = await User.create({
            username,
            password:bcrypt.hashSync(password, salt),
        });
        res.json(userDoc);
    } catch (e) {
      res.status(400).json(e);
    }
});

app.post('/blog/login', async (req, res) => {
    const {username, password} = req.body;
    const userDoc = await User.findOne({username});
    const validPassword = bcrypt.compareSync(password, userDoc.password);

    if (validPassword) {
        jwt.sign({username, id:userDoc._id}, secret, {}, (err, token) => {
            if(err) throw err;
            res.cookie('token', token).json('ok');
        });
    } else {
        res.status(400).json('wrong credentials');
    }
});

app.get('/blog/create-post', (req, res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info) =>{
       if (err) throw err;
       res.json(info);
    });
});

app.post('/blog/create-post/logout', (req,res) => {
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err, info) => {
        if (err) throw err;
        res.json(info);
    });
});

app.listen(4000);
