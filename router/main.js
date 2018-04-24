module.exports = function(app, fs) {
    app.get('/', (req, res) => {
        res.render('index', {
            title: "MY Homepage",
            length: 5
        });
    });

    app.get('/about', (req, res) => {
        res.render('about.html');
    });
}
