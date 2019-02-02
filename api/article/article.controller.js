const Article = require('./article.model');
const mongoose = require('mongoose');

exports.article_get_all = async (req, res) => {
    try {
        const articles = await Article.find();
        res.status(201).json({ articles: articles });

    }
    catch (err) {
        res.status(500).json({ error: err });
    }
};

exports.article_post_new = async (req, res) => {
    try {
        const article = await new Article({
            _id: new mongoose.Types.ObjectId,
            category: req.body.category,
            title: req.body.title,
            text: req.body.text
        });
        await article.save();
        res.status(201).json(article);
    }
    catch (err) {
        res.status(500).json(err);
    }
};

exports.article_patch_id = async (req, res) => {
    try {
        const id = req.params.articleId;
        const updateOps = {};

        for (const ops of req.body) {
            updateOps[ops.propName] = ops.value;
        }
        await Article.update({ _id: id }, { $set: updateOps })
        res.status(201).json({ message: 'Updated!' });

    }
    catch (err) {
        res.status(500).json(err);
    }
};

exports.article_get_id = async (req, res) => {
    try {
        const id = req.params.articleId;
        const article = await Article.find({ _id: id })
        res.status(201).json(article);
    }
    catch (err) {
        res.status(500).json(err);
    }
};

exports.article_delete_id = async (req, res) => {
    const id = req.params.articleId;
    await Article.remove({ _id: id });
    res.status(200).json({
        message: "article deleted"
    });
};