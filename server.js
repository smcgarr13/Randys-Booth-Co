const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
// const mime = require('mime');
// const helpers = require('./utils/helpers');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

// Set up Handlebars.js engine with custom helpers
const hbs = exphbs.create({});

const sess = {
  secret: 'Super secret secret',
  cookie: {
    maxAge: 300000,
    httpOnly: true,
    secure: false,
    sameSite: 'strict',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

// Inform Express.js on which template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
















// // log-in and sign-up
// const express = require('express');
// const exphbs = require('express-handlebars');
// const app = express();
// const { Sequelize } = require('sequelize');

// // Import routes
// const inventoryRoutes = require('/Users/mchong/bootcamp/projects/Randys-Booth-Co/routes/api/inventory-routes');

// // Use routes
// app.use('/api', inventoryRoutes);

//   // Start the server
//   app.listen(3001, function () {
//     console.log('App listening on port 3001!');
//   });





  // // Set up Handlebars view engine
// app.engine('handlebars', exphbs());
// app.set('view engine', 'handlebars');

// // Define a route
// app.get('/', function (req, res) {
//     res.render('home', {title: 'Home'});
//   });
  
   
// --------------------------------------------
// inventory

// const { Inventory } = require('./Models/inventory-models.js');

// app.get('/inventory', async (req, res) => {
//   try {
//     const inventoryData = await Inventory.findAll();
//     res.render('inventory', { inventoryData });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Internal server error' });
//   }
// });