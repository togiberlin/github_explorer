const express = require('express');
const router = express.Router();
const fs = require('fs');

router.get('/:user/:repo', (req, res) => {
  return getMockResponseForUserRepo(res, req.params.user, req.params.repo);
});

function getMockResponseForUserRepo(res, user, repo) {
  fs.readFile(`backend/fixtures/mockResponses/repos/repo-details-${user}-${repo}.json`, (_err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
}

module.exports = router;