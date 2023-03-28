// Import required dependencies
const express = require('express');
const exphbs = require('express-handlebars');

// Initialize the Express app and set the listening port
const app = express();
const PORT = process.env.PORT || 3000;

// Set up the Handlebars view engine
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// Middleware to parse incoming request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Route for /login
app.get('/login', (req, res) => {
  res.render('login');
});

// app.get('/login', (req, res) => {
//     res.render('login', {
//         layout: 'login-form',
//         pageTitle: 'Login Page'
//     });
// });

// Start the server and listen for incoming requests
app.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}`);
});