// FETCH
// ----------
require('es6-promise').polyfill();
require('isomorphic-fetch');
/* global fetch */

// EXPRESS
// ----------
const express = require('express');
const app = express();

// SWAPI-API https://swapi.co/documentation#root
// ----------
const baseUrl = "https://swapi.co/api";


app.get('/', (req, res) => {
  fetch(baseUrl)
  .then(response => response.json())
  .then(json => res.json(json));
});

app.get('/resource/:resourcePath/:query?', (req, res) => {
  const query = req.params.query;
  const resourcePath = req.params.resourcePath;
  var apiResponse = query.length > 0 ?
    fetch(`${baseUrl}/${resourcePath}/search=${query}`) : 
    fetch(`${baseUrl}/${req.params.resourcePath}`);

  apiResponse
  .then(response => response.json())
  .then(json => res.json(json));
});

app.get('/fullUrl/', (req, res) => {
  fetch(req.query.path)
  .then(response => response.json())
  .then(json => res.json(json));
});

const port = process.env.PORT;
app.listen(port);