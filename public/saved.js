$(document).ready(function() {
    let savedList = $(".savedList")
    loadArticles()
    $(document).on("click", "#clear", clearArticles)
    $(document).on("click", ".removebtn", unSaveArticles)

    function loadArticles () {
        $.ajax({
            method: "GET",
            url: "/api/articles/saved",
        }).then(function(data) {
            console.log(data)
            savedList.empty();
            if (data) {
                renderArticles(data);
            } else {
                savedList.append("<div>No Articles to Show</div>");
            }
        }). catch(function(err){
            console.log(err);
        });
    }

    function articleDiv(article) {
        let div = $("<div class='article border border-info p-3 m-5'>");
        let head = $("<h3 class='head'>").text(article.title)
        let link = $("<a type='button' class='btn btn-info m-2' class='link' target='_blank'>").attr("href", article.url).text("Read Article")
        let body = $("<div class='articleBody'>").text(article.summary);
        let remove = $("<button type='button' class='removebtn btn btn-danger m-2'>Remove from Saved</button>")
        let notes = $("<button type='button' class='notebtn btn btn-warning text-white m-2'>Add Notes</button>")
        div.append(head, body, link, remove, notes);
        div.data("_id", article._id);
        return div;
    }

    function renderArticles(articles) {
        let newArticles = [];
        for (let i = 0; i < articles.length; i++) {
            newArticles.push(articleDiv(articles[i]));
        }
        savedList.append(newArticles)
    }

    function scrapeArticles() {
        $.ajax({
            method: "GET",
            url: "/api/scrape",
        }).then(function(data) {
            res.json(data)
        })
    }

    function unSaveArticles() {
        let deletedArticle = $(this).parents(".article").data()
        $(this).parents(".article").remove(); 
        deletedArticle.saved = false;
        $.ajax({
            method: "DELETE",
            url: "api/articles/saved/" + deletedArticle._id,
        }).then(function(data) {
            console.log(deletedArticle)
            loadArticles();
        })
    }

    function clearArticles() {
        savedList.empty();
        scrapeArticles();
    }

})