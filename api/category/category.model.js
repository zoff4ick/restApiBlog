const mongoose = require('mongoose');
const Article = require('../article/article.model');

const categorySchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name:{type: String, required:true},
    articles:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Article',
        required: false
    }]
});

module.exports = mongoose.model('Category', categorySchema);