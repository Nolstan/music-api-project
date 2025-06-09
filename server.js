const express = require('express');
const routes = require('./routes/routes.js');
const database = require('./database/db.js')
const app =express();

const port = 5000;

//middleware
app.use(express.json());

//invoking database
database();

//routes will go through this path
app.use('/api/songs',routes);

app.listen(port,()=>console.log(`server up on port ${port}`));