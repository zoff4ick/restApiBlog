const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

mongoose.connect(
    'mongodb://localhost/blog',
    {
        useCreateIndex: true,
        useNewUrlParser: true
    }, () => {
        console.log('Connect to MongoDb...');
    }
);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const categoriesRouter = require('./api/category/category.router');
const articleRouter = require('./api/article/article.router');
const userRouter = require('./api/user/user.router');

app.use('/categories', categoriesRouter);
app.use('/articles', articleRouter);
app.use('/user',userRouter);    

module.exports = app;