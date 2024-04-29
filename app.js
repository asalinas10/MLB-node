const express = require('express');
const morgan = require('morgan');

const teamRouter = require('./routes/teamRoutes');

const app = express();

// middlewares
if (process.env.NODE_END === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

// routes
app.use('/api/v1/teams', teamRouter);

module.exports = app;
