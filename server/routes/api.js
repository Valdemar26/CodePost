const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const post = require('../models/post');

// connect to our database
const db = 'mongodb://valdemar:123qweasd@ds113799.mlab.com:13799/codepost_project';

mongoose.Promise = global.Promise;
mongoose.connect(db, function(err) {
    if(err) {
        console.log('Connection error');
    }
});

router.get('/posts', function(req, res) {
    console.log('Requesting posts');
    post.find({})
        .exec(function(err, posts) {
            if (err) {
                console.log('Error getting the posts');
            } else {
                res.json(posts);
            }
        });
});

router.get('/details/:id', function(req, res) {
    post.findById(req.params.id)
        .exec(function(err, post) {
            if (err) {
                console.log('Error getting the post');
            } else {
                res.json(post);
            }
        });
    console.log('Requesting post');
});

module.exports = router;