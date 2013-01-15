var twitter = require('ntwitter');

var twit = new twitter({
    consumer_key: 'ielc4kBgSYdaBI4p2KQ9rw',
    consumer_secret: 'UnB3247bTxU8zoSfrc3mY1wjGR2WvtiLk7jCjjEMF4',
    access_token_key: '8096232-dZayDDTuMW3njWs0tSkCq0Dg6OFY5sBDqehu0uKSq8',
    access_token_secret: 'WhPhBY8ODigjRhEB7NTH9mIbq1FTXy4XfEfR13Ex5M'
});

twit.stream('user', function(stream) {
    stream.on('data', function(data) {
        console.log(data);
    });
});
