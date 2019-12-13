const express = require('express');
const router = express.Router();
const db = require('../models');

router.get('/', function(req,res) {
    db.Article
        .find({'saved': false})
        .then(function(dbArticle) {
            res.render('index', {articles: dbArticle });
        })
        .catch(function(err) {res.json(err)}) 
});

router.get('/savedarticles', function(req,res) {
    db.Article
        .find({'saved': true})
        .then(function(dbArticle) {
            res.render('saved', {articles: dbArticle });
        })
        .catch(function(err) {res.json(err)}) 
});

module.exports = router;