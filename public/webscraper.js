$(document).ready(function() {
    let scrapedList = $(".scrapedList")
    // scrapeArticles()
    $("#scrape-button").on("click", loadArticles);

    function loadArticles () {
        $.ajax({
            method: "GET",
            url: "/api/articles",
        }).then(function(data) {
            console.log(data)
            scrapedList.empty();
            if (data) {
                renderArticles(data);
            } else {
                scrapedList.append("<div>No Articles to Show</div>");
            }
        }). catch(function(err){
            console.log(err);
        });
    }

    function articleDiv(article) {
        let div = $("<div class='article border border-info p-3 m-5'>");
        let head = $("<h3 class='head'>").text(article.title)
        let link = $("<a class='link' target='_blank'>").attr("href", article.url).text("Read Article")
            // $("<div class='head>'").append(
            // $("<h3>").append(
            //     $("<a class='articleLink' target='_blank'>")
            //         .attr("href", article.url)
            //             .text(article.title),
            // $("<a class='btn btn-warning'>Save</a>")));
        let body = $("<div class='articleBody'>").text(article.summary);
        div.append(head, body, link);
        div.data("_id", article._id);
        return div;
    }

    function renderArticles(articles) {
        let newArticles = [];
        for (let i = 0; i < articles.length; i++) {
            newArticles.push(articleDiv(articles[i]));
        }
        scrapedList.append(newArticles)
    }

    function scrapeArticles() {
        console.log("yes")
        $.ajax({
            method: "GET",
            url: "/api/scrape",
        }).then(function(data) {
            loadArticles()
        })
    }

})