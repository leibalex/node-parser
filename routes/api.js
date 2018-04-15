const express = require('express');
const router = express.Router();
const Article = require('../models/article');


router.post('/article', async (req, res, next) => {
    const {pageSize, pageNumber} = req.body;
    const result = await Article.getArticles(pageSize, pageNumber);

    res.json(result);
});

module.exports = router;