/**
 * This backend is for dev purposes, since GitHub limits API requests.
 */
/* eslint-disable no-param-reassign */
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();

const REPO_MIN_DATA_FILE = path.join(__dirname, 'mockResponse/repositories-min-data.json')
const REPO_DETAILS_GRIT_DATA_FILE = path.join(__dirname, 'mockResponse/repo-details/repo-details-mojombo-grit.json');
const REPO_DETAILS_RUBINIUS_DATA_FILE = path.join(__dirname, 'mockResponse/repo-details/repo-details-rubinius-rubinius.json');
const REPO_DETAILS_MERB_DATA_FILE = path.join(__dirname, 'mockResponse/repo-details/repo-details-wycats-merb-core.json');

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');
  next();
});

app.get('/repositories', (req, res) => {
  fs.readFile(REPO_MIN_DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

app.get('/repos/mojombo/grit', (req, res) => {
  fs.readFile(REPO_DETAILS_GRIT_DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

app.get('/repos/rubinius/rubinius', (req, res) => {
  fs.readFile(REPO_DETAILS_RUBINIUS_DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

app.get('/repos/wycats/merb-core', (req, res) => {
  fs.readFile(REPO_DETAILS_MERB_DATA_FILE, (err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`); // eslint-disable-line no-console
});
