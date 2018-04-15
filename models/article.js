const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({
   title: {
       type: String
   },
    text: {
       type: String
    },
    imagesUrl: [String]
});

const Article = mongoose.model('Article', ArticleSchema);

Article.getArticles = async (pageSize, n) => {

    try {
        const articles = await Article.find().skip(pageSize * (n - 1)).limit(pageSize);

        return articles;
    } catch (error) {
        console.error(error);
    }
};

module.exports = Article;