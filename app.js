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

var db = mongojs('akashic', ['stream']);

function run() {
    twit.stream('user', function(stream) {
        stream.on('data', function(data) {
            db.stream.insert(data);
            console.log(util.inspect(data, false, null));
        });
        stream.on('end', function(response) {
            db.stream.insert(response);
            run();
        });
        stream.on('destory', function(response) {
            db.stream.insert(response);
            run();
        });
    });
}

run();
