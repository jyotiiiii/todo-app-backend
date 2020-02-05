'use strict';
const serverless = require('serverless-http');
const express = require('express');
const app = express();

app.get('/tasks', function(req, res) {
  res.json({
    tasks: {
      custom: [
        {
          id: '1',
          description: 'Create a brag doc',
          completed: false,
          points: 5
        },
        {
          id: '2',
          description: 'Start a new hobby',
          completed: false,
          points: 5
        },
        {
          id: '3',
          description: 'Commission a portrait',
          completed: false,
          points: 5
        }
      ],
      random: [
        {
          id: '4',
          description: 'Practice Mindfulness',
          completed: false,
          points: 5
        },
        {
          id: '5',
          description: 'Plan a holiday',
          completed: false,
          points: 5
        }
      ]
    }
  });
});

app.post('/tasks/', function(req, res) {
  res.send({
    message: "I don't know what I'm doing"
  });
});

// app.get('/tasks/:id', function(req, res) {
//   res.send({
//     message: "You're searching for a task?"
//   });
// });

// app.delete("/tasks/:id", function (req, res) {

module.exports.tasks = serverless(app);
module.exports.create = serverless(app);
// module.exports.find = serverless(app);
