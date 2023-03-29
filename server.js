// Import required dependencies and modules
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');
// const routes = require('./controllers');
const Category = require('./Models/category-model');
const Inventory = require('./Models/inventory-model');
const homeRoutes = require('./routes/homeRoutes');
const apiRoutes = require('./routes/api');
const viewRoutes = require('./routes/api/viewRoutes'); 
const inventoryRoutes = require('./routes/api/inventory-routes');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
// const helpers = require('./utils/helpers');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Configure Handlebars.js template engine
const hbs = exphbs.create({
  handlebars: handlebars,
  defaultLayout: 'main',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  },
});

// Configure session middleware
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

// Set up Handlebars as the view engine
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Apply session middleware to the app
app.use(session(sess));

// Apply body-parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to enable support for PUT and DELETE methods in forms
const methodOverride = require('method-override');
app.use(methodOverride('_method'));

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up application routes
app.use('/api', apiRoutes);
app.use('/api', inventoryRoutes);
app.use('/', viewRoutes); 
app.use('/', homeRoutes);
// app.use(routes);

// Sync Sequelize models and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});