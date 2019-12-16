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
    console.log("yes")
    $.ajax({
        method: "GET",
        url: "/api/scrape",
    }).then(function(data) {
        $("#scrapedList").append("<p>Test</p>")
    })
}
