const Category = require('./category.model');
const mongoose = require('mongoose');
const Article = require('../article/article.model');

exports.category_get_all = async (req, res) => {
    try {
        const categories = await Category.find().select('name _id articles').populate('articles', 'title text');
        res.status(201).json({ categories: categories });
    }
    catch (err) {
        res.status(500).json({ error: err });
    }
};

exports.category_post_new = async (req, res) => {
    try {
        const category = await new Category({
            _id: new mongoose.Types.ObjectId,
            name: req.body.name
        });
        await category.save()
        res.status(201).json(category);
    }
    catch (err) {
        console.log(err);
        res.status(500).json({ error: err });
    }
};

exports.get_by_id = async (req, res) => {
    try {
        const id = req.params.categoryId;
        const category = await Category.findById(id);
        if (category) {
            res.status(201).json(category);
        }
        else {
            res.status(404).json({ message: "No valid entry found for provided ID" });
        }
    }
    catch (err) {
        console.log(err);
        res.status(500).json(err);
    }

};

exports.patch_by_id = async (req, res) => {
    try {
        const id = req.params.categoryId;
        const updateOps = {};

        for (const ops of req.body) {
            updateOps[ops.propName] = ops.value;
        }

        await Category.update({ _id: id }, { $set: updateOps })
        res.status(201).json({ message: "Category updated. Check right now by url! " + 'http://localhost:3000/categories/' + id })
    }
    catch (err) {
        res.status(500).json(err);
    }
}
exports.delete_by_id = async (req, res) => {
    const id = req.params.categoryId;
    await Category.remove({ _id: id });
    res.status(200).json({
        message: "product deleted"
    });
};
