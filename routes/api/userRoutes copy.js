app.get('/login', (req, res) => {
    res.render('login', {
        layout: 'login-form',
        pageTitle: 'Login Page'
    });
});