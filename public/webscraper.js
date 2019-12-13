$(document.body).ready(function() {
    renderArticles();
    $("#scrape-button").on("click", scrapeArticles);


})

function renderArticles() {
    $.ajax({
        method: "GET",
        url: "/api/articles",
    });
}

function scrapeArticles() {
    event.preventDefault();
    $.ajax({
        method: "GET",
        url: "/api/scrape",
    }).then(function(data) {
        $('body').append(data)
    })
}
