function getArticleGenerator(articles) {
    let contentElement = document.getElementById('content');
    return function () {
        if (articles.length == 0) {
            return;
        }
        let articleElement = document.createElement('article');
        articleElement.textContent = articles.shift();
        contentElement.appendChild(articleElement);
    };
}