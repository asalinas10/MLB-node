const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Team = require('../models/teamModel');

dotenv.config({ path: './config.env' });

// var to replace <PASSWORD> in DATABASE from config.env
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

// connecting to database
mongoose.connect(DB).then(() => console.log('DB connection successful!'));

const teams = JSON.parse(fs.readFileSync(`${__dirname}/data.json`, 'utf-8'));

const importData = async () => {
  try {
    await Team.create(teams);
    console.log('Data successfully loaded!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await Team.deleteMany();
    console.log('Data successfully deleted!');
  } catch (err) {
    console.log(err);
  }
  process.exit();
};

if (process.argv[2] === '--import') {
  importData();
} else if (process.argv[2] === '--delete') {
  deleteData();
}
