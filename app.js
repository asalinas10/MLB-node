const express = require('express');
const morgan = require('morgan');

const app = express();

// middlewares
if (process.env.NODE_END === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());

// routes
app.use((req, res, next) => {
  res.status(200).json({ message: 'Hello from the server', app: 'MLB' });

  next();
});

module.exports = app;
