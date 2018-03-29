var express = require('express');
var app     = express();
var router  = require('./router/main') (app);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.get('/', (req, res) => {
    res.send('Hello World');
});

var server  = app.listen(3000, function() {
    console.log("Moneybook server has started on port 3000");
});
