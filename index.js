const express = require("express");
const helmet = require("helmet");

const app = express();

app.use(helmet());

require('dotenv').config()

require('./main')
require('./prod')(app);