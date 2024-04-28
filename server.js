const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

// var to replace <PASSWORD> in DATABASE from config.env
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

// connecting to database
mongoose.connect(DB).then(() => console.log('DB connection successful!'));

// starting server
const port = process.env.PORT || 2000;
app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});
