'use strict';
const serverless = require('serverless-http');
const express = require('express');
const app = express();
const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'xxxxx',
  user: 'xxxxx',
  password: 'xxxxx',
  database: 'xxxxx'
});

app.get('/tasks', function(req, res) {
  connection.query(
    'SELECT * FROM `task` WHERE `user_id`  = "5cd7209f-b05b-456a-9327-55e8af3f945e"',
    function(error, results, fields) {
      // error will be an Error if one occurred during the query
      if (error) {
        console.error('Your query had a problem with retrieving tasks', error);
        res.status(500).json({ errorMessage: error });
      } else {
        // Query was successful
        res.json({ tasks: results });
      }
    }
  );
});

app.post('/tasks/', function(req, res) {
  res.send({
    message: 'This POST request will create a new task'
  });
});

app.put('/tasks/:id', function(req, res) {
  res.send({
    message:
      "This PUT request will edit a task by id or create a new task if id doesn't exist"
  });
});

app.delete('/tasks/:id', function(req, res) {
  res.send({
    message: 'This DELETE request will remove a task'
  });
});

app.get('/tasks/:id', function(req, res) {
  res.send({
    message: 'This GET request will search for a task by id'
  });
});

module.exports.tasks = serverless(app);
