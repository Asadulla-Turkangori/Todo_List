const express = require('express');

const router = require('./routes/todolist');

const app = express();

var cors = require('cors');

app.use(cors());

app.use(express.json());

app.use('/todolist',router);

const port = process.env.PORT || 3000;

app.listen(port,()=>{console.log(`Listening to port number ${port}`)});

