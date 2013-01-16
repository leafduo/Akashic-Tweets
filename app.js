var twitter = require('ntwitter');
var util = require('util');
var mongojs = require('mongojs');
var config = require('./config');

var twit = new twitter({
    consumer_key: config.twitter.consumerKey,
    consumer_secret: config.twitter.consumerSecret,
    access_token_key: config.twitter.accessTokenKey,
    access_token_secret: config.twitter.accessTokenSecret
});

var db = mongojs('akashic', ['rawTweet']);

twit.stream('user', function(stream) {
    stream.on('data', function(data) {
        db.rawTweet.insert(data);
        console.log(util.inspect(data, false, null));
    });
});
