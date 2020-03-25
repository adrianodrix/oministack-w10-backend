require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');

const routes = require('./routes');

const app = express();

mongoose.connect(process.env.MONGODB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

app.use(cors);
app.use(helmet);
app.use(express.json());
app.use(routes);

app.listen(3333, () => {
  console.log('server listen')
});
