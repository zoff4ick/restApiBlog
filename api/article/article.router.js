const express = require('express');
const router = express.Router();
const checkAuth = require('../middleware/auth');



const ArticleController = require('../article/article.controller');

router.get('/', ArticleController.article_get_all);

router.post('/', checkAuth, ArticleController.article_post_new);

router.get('/:articleId', ArticleController.article_get_id);

router.patch('/:articleId', checkAuth, ArticleController.article_patch_id);

router.delete('/:articleId', checkAuth, ArticleController.article_delete_id);


module.exports = router;