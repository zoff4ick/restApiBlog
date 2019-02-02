const mongoose = require('mongoose');
const Category = require('../category/category.model');

const articleSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: { type: String, require: true },
    text: { type: String, require: true },
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category',
        require: true
    },
    date: { type: Date, default: Date.now, require: false }
});

module.exports = mongoose.model('Article', articleSchema);