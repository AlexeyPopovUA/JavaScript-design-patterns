(function () {
    "use strict";

    function Article() {
        this.tags = ["tag1", "tag2"];
    }

    var article,
        page,
        blog;

    /**
     * This constructor demonstrates "Rent A Constructor pattern"
     * @constructor
     */
    function Page() {
        Article.call(this);
    }

    /**
     * This constructor demonstrates default inheritance pattern
     * @constructor
     */
    function Blog() {
        this.prototype = article;
    }

    /**Testing*/

    article = new Article();
    page = new Page();
    blog = new Blog();

    print("article.hasOwnProperty(\"tags\") = " + article.hasOwnProperty("tags"));
    print("page.hasOwnProperty(\"tags\") = " + page.hasOwnProperty("tags"));
    print("blog.hasOwnProperty(\"tags\") = " + blog.hasOwnProperty("tags"));
})();