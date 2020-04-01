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

app.put('/users/:id', function(req, res) {
  // get the user id from client url
  const userId = req.params.id;
  const newScore = req.body.score;

  connection.query(
    'UPDATE `user` SET `score` = ? WHERE `id` = ?',
    [newScore, userId],
    function(error, results, fields) {
      if (error) {
        console.error(
          'Your query had a problem with updating the score',
          error
        );
        res.status(500).json({ errorMessage: error });
      } else {
        console.log(results);

        res.json({ user: newScore });
      }
    }
  );
});

module.exports.handler = serverless(app);
