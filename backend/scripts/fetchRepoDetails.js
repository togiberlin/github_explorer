/**
 * Usage: npm run backend:fetch:repoDetails
 * Warning: if you don't have GitHub OAuth2 token configured, you might encounter rate limiting
 * @see config.js in project root
 */

const fs = require('fs');
const path = require('path');
const util = require('util');
const axios = require('axios');
const config = require('../../config.json');
const repoItems = require('../fixtures/mockResponses/repositories/repositories-data.json');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const TARGET_FOLDER = 'backend/fixtures/mockResponses/repos';

async function fetchRepoDetailsFor(repoItems) {
  try {
    repoItems.map(async (repoItem) => {
      const response = await axios.get(`https://api.github.com/repos/${repoItem.full_name}`,
      config.ghOAuth2Token ? {
        headers: {
          Authorization: `token ${config.ghOAuth2Token}`
        },
      } : undefined);

      await writeFileAsync(
        `${TARGET_FOLDER}/repo-details-${repoItem.owner.login}-${repoItem.name}.json`,
        JSON.stringify(response.data, null, 4),
      );
    });
  } catch (e) {
    console.error(e);
  }
}

async function main() {
  await fetchRepoDetailsFor(repoItems)
    .catch(err => console.error(err));
}

main();
