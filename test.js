const cheerio = require('cheerio');
const rp = require('request-promise');

const selectorOptions = {
    header: 'div#post-content h1',
    body: 'div#post-content',
    image: 'div#post-content img'
};

const options = {
    url: 'https://ain.ua/2018/04/10/feel-vr-kickstarter',
    transform: (body) => {
        return cheerio.load(body)
    }
};

rp(options)
    .then(($) => {
        $('div.see-more, div.post-comments, div.post-ad, div.news-subscribe, div.post-social, div.post-tags, div.block-wrap-right, div.mistape_caption, footer, ' +
            'div.post-data, div.post-lead-content, div.post-social').remove();
        const header = $(selectorOptions.header).text();
        $(selectorOptions.header).remove();
        const body = $(selectorOptions.body).text();
        console.log('header');
        console.log(header);
        console.log('end header');
        console.log('body');
        console.log(body.trim());
        console.log('end body');
        const urlsArray = [];
        $(selectorOptions.image).each((index, element) => {
            const url = $(element).attr('src');
            urlsArray.push(url);
        });
        console.log(urlsArray);
    })
    .catch((error) => {
    console.log(error);
    });

