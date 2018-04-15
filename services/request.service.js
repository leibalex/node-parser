const rp = require('request-promise');
const cheerio = require('cheerio');
const {parseArticle, parseCategory} = require('./parser.service');


const getArticlesUrl = async (categoryUrls) => {
    const articleUrls = [];
    for (url of categoryUrls) {
        const options = {
            url,
            transform: (body) => {
                return cheerio.load(body)
            }
        };

        const articleUrl = await rp(options).then(($) => {
            return  parseCategory($);
        });

        articleUrls.push(...articleUrl);
    }

    return articleUrls;
};

const getArticle = async (articleUrl) => {
    const options = {
        url: articleUrl,
        transform: (body) => {
            return cheerio.load(body)
        }
    };

    const article = await rp(options).then(($) => {
        return parseArticle($);
    }).then(() => console.log('meow'));
};

module.exports = {
    getArticle,
    getArticlesUrl
};
