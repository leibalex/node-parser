const express = require('express');
const router = express.Router();
const cheerio = require('cheerio');
const rp = require('request-promise');
const parserService = require('../services/parser.service');
const requireService = require('../services/request.service');
const Article = require('../models/article');

const categoryUrls = [
    'https://ain.ua/category/startupscat',
    'https://ain.ua/category/internet-business'
];


const func = async (categoryUrls) => {

     const articlesUrl = await requireService.getArticlesUrl(categoryUrls);

        console.log(articlesUrl);
        for(url of articlesUrl){
            console.log(url);
            await requireService.getArticle(url);
        }
};

router.get('/article', async (req, res, next) => {
    const d1 = Date.now();
    // func(categoryUrls);
   const result = await Article.getArticles(5, 1);
   console.log(result);
    const d2 = Date.now();
    console.log(`Time: ${d2 - d1}`);
    res.send(`Time: ${d2 - d1}`);
});

module.exports = router;