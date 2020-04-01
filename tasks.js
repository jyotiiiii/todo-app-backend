'use strict';
const serverless = require('serverless-http');
const express = require('express');
const app = express();
app.use(express.json());
// const uuidv4 = require('uuid/v4');
const mysql = require('mysql');
const cors = require('cors');
app.use(cors());

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_SCHEMA
});

app.get('/tasks', function(req, res) {
  connection.query(
    'SELECT * FROM `task` WHERE `user_id` = "5cd7209f-b05b-456a-9327-55e8af3f945e"',
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
  // accept information from the client
  // about what task is being created

  const tasktoInsert = req.body;
  // tasktoInsert.id = uuidv4();
  // take that information and pre-populate a SQL insert statement
  // execute the statement
  connection.query('INSERT INTO `task` SET ?', tasktoInsert, function(
    error,
    results,
    fields
  ) {
    if (error) {
      console.error(
        'Your query had a problem with inserting a new task',
        error
      );
      res.status(500).json({ errorMessage: error });
    } else {
      // return to the client information about the task that has been created
      res.json({ task: tasktoInsert });
    }
  });
});

// INSERT INTO task VALUES ('0c9341ce-1184-4bd9-b90d-6843034c8fe2', '5cd7209f-b05b-456a-9327-55e8af3f945e', 0, 'Go for a walk in the forest', 0, 15);

app.put('/tasks/:id', function(req, res) {
  // get the task id from client url
  const taskCompleted = req.params;
  // set completed to 1 where id = id

  connection.query(
    'UPDATE `task` SET `completed` = ? WHERE `id` = ?',
    [true, taskCompleted.id],
    function(error, results, fields) {
      if (error) {
        console.error(
          'Your query had a problem with marking a task as complete',
          error
        );
        res.status(500).json({ errorMessage: error });
      } else {
        // return to the client the task id that has been updated
        res.json({ task: taskCompleted });
      }
    }
  );
});

app.delete('/tasks/:id', function(req, res) {
  // get the task id from the client (url)
  const taskDelete = req.params;
  // delete the whole row where id = id
  connection.query(
    'DELETE FROM `task` WHERE `id` = ?',
    [taskDelete.id],
    function(error, results, fields) {
      if (error) {
        console.error('Your query had a problem with deleting a task', error);
        res.status(500).json({ errorMessage: error });
      } else {
        // return to the client the task id that has been deleted
        res.json({ task: taskDelete });
      }
    }
  );
});

app.get('/tasks/:id', function(req, res) {
  // get the task id from the client (url)
  const taskSearch = req.params;
  // get all the info for task id = id
  connection.query(
    'SELECT * FROM `task` WHERE `id` = ?',
    [taskSearch.id],
    function(error, results, fields) {
      if (error) {
        console.error('Your query had a problem with finding the task', error);
        res.status(500).json({ errorMessage: error });
      } else {
        // return to the client the task info for the id given
        res.json({ task: results });
      }
    }
  );
});

module.exports.handler = serverless(app);
