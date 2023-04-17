const express = require('express');
const path = require('path');
const env = require('./config/envConfig');
const connect = require('./config/db')
// all url routes file
const dashboard = require('./routes/dashboard')
const loginRoute = require('./routes/login')
const formDashboard = require('./routes/form')
const profileRoute = require('./routes/profile')
const blank_page = require('./routes/blank_page')

// set default time zone aisa/kolkata
process.env.TZ = env.TZ;

// db connection 
connect();

const app = express();

// embed javascript
app.set('view engine', 'ejs');
app.set('views', 'views')

app.use(express.json());
// use for static paths
app.use(express.static(path.join(__dirname, 'public')))

// routes
app.use('/',loginRoute);
app.use('/dashboard',dashboard);
app.use('/general',formDashboard);
app.use('/profile',profileRoute);
app.use('/blank_page',blank_page);

// server port
const port = env.PORT || 8000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})