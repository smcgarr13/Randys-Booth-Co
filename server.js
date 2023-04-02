// Import required dependencies and modules
const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const handlebars = require('handlebars');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// Import required route modules
const routes = require('./routes');
const userRoutes = require('./routes/api/userRoutes'); 
const apiRoutes = require('./controllers/api/index.js');
const viewRoutes = require('./routes/api/viewRoutes'); 

// Import the Sequelize connection configuration
const sequelize = require('./config/connection');

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

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// Set up application routes
app.use('/api', apiRoutes);
app.use('/', viewRoutes); 

// Set up user routes
app.use(routes);

// Sync Sequelize models and start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});