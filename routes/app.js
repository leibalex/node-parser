const express = require('express');
const router = express.Router();
const parserService = require('../services/parser.service');
const requireService = require('../services/request.service');
const categoryUrls = [
    'https://ain.ua/category/startupscat',
    'https://ain.ua/category/internet-business',
    // 'https://ain.ua/category/gadgets',
    // 'https://ain.ua/category/cryptocurrencies',
    // 'https://ain.ua/category/gov'
];
const getData = async (categoryUrls) => {

     const articlesUrl = await requireService.getArticlesUrl(categoryUrls);

        for(url of articlesUrl){
            await requireService.getArticle(url);
        }
};

router.get('/', async (req, res, next) => {

   await getData(categoryUrls);

    res.render('index');
});


module.exports = router;
