const express = require('express');
const router = express.Router();
const fs = require('fs');
const axios = require('axios');

router.get('/:user/:repo', (req, res) => {
  return getMockResponseForUserRepo(res, req.params.user, req.params.repo);
});

function getMockResponseForUserRepo(res, user, repo) {
  fs.readFile(`backend/fixtures/mockResponses/repos/repo-details-${user}-${repo}.json`, (_err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });

  // TODO: if mock not found, forward query to GitHub.
}

module.exports = router;