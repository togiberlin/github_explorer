const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

const REPO_MIN_DATA_PATH = 'backend/fixtures/mockResponses/repositories/repositories-data.json';

router.get('/', (_req, res) => {
  fs.readFile(REPO_MIN_DATA_PATH, (_err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

module.exports = router;