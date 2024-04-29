const path = require('path');
const express = require('express');
const morgan = require('morgan');

const teamRouter = require('./routes/teamRoutes');
// const viewRouter = require('./views/base.pug');

const app = express();

// setting up pug engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Serving Static Files
app.use(express.static(path.join(__dirname, 'public')));

// middlewares
if (process.env.NODE_END === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

// pug routes
// app.use('/', viewRouter);
app.get('/', (req, res) => {
  res.status(200).render('base');
});

// api routes
app.use('/api/v1/teams', teamRouter);

module.exports = app;
