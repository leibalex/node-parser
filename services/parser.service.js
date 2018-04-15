const Article = require('../models/article');

const selectorOptions = {
    title: 'div#post-content h1',
    text: 'div#post-content',
    image: 'div#post-content img'
};

const parseArticle = async ($) => {
    $('div.see-more, div.post-comments, div.post-ad, div.news-subscribe, div.post-social, div.post-tags, div.block-wrap-right, div.mistape_caption, footer, ' +
        'div.post-data, div.post-lead-content, div.post-social').remove();

    const title = $(selectorOptions.title).text();
    $(selectorOptions.title).remove();

    const text = $(selectorOptions.text).text().trim();

    const imagesUrl = [];
    $(selectorOptions.image).each((index, element) => {
        const url = $(element).attr('src');
        imagesUrl.push(url);
    });

    const article = new Article({
        title,
        text,
        imagesUrl
    });

    return await article.save();
};

const parseCategory = async ($) => {
    const articleUrls = [];
    $('div.post-item > a.post-link').each((index, element) => {
        if (index >= 5) {
            return;
        }

        const url = $(element).attr('href');
        articleUrls.push(url);
    });

    return articleUrls;
};

module.exports = {
    parseArticle,
    parseCategory
};