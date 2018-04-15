const express = require('express');
const router = express.Router();
const parserService = require('../services/parser.service');
const requireService = require('../services/request.service');
const Article = require('../models/article');

// const func = async (categoryUrls) => {
//
//      const articlesUrl = await requireService.getArticlesUrl(categoryUrls);
//
//         for(url of articlesUrl){
//             await requireService.getArticle(url);
//         }
// };

router.post('/article', async (req, res, next) => {
    const d1 = Date.now();
    const {pageSize, n} = req.body;
   const result = await Article.getArticles(pageSize, n);
   console.log(result);
    const d2 = Date.now();
    console.log(`Time: ${d2 - d1}`);
    res.json(result);
});

module.exports = router;