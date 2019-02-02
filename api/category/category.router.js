const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/auth');

const CategoryController = require('../category/category.controller');

router.get('/', CategoryController.category_get_all);

router.post('/', checkAuth, CategoryController.category_post_new);

router.get('/:categoryId', CategoryController.get_by_id);

router.patch('/:categoryId', checkAuth, CategoryController.patch_by_id);

router.delete('/:categoryId', checkAuth, CategoryController.delete_by_id);

module.exports = router;