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
    message: 'This POST request will create a new task'
  });
});

app.put('/tasks/', function(req, res) {
  res.send({
    message:
      "This PUT request will edit a task by id or create a new task if id doesn't exist"
  });
});

app.delete('/tasks/', function(req, res) {
  res.send({
    message: 'This DELETE request will remove a task'
  });
});

app.get('/tasks/', function(req, res) {
  res.send({
    message: 'This GET request will search for a task by id'
  });
});

module.exports.tasks = serverless(app);
