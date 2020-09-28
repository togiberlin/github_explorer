/**
 * Usage: npm run backend:fetch:repositories
 * Warning: if you don't have GitHub OAuth2 token configured, you might encounter rate limiting
 * @see config.js in project root
 */

const fs = require('fs');
const path = require('path');
const util = require('util');
const axios = require('axios');
const config = require('../../config.json');

const writeFileAsync = util.promisify(fs.writeFile);

const TARGET_FOLDER = 'backend/fixtures/mockResponses/repositories';

async function fetchRepositories() {
  try {
    const response = await axios.get(`https://api.github.com/repositories`,
    config.ghOAuth2Token ? {
      headers: {
        Authorization: `token ${config.ghOAuth2Token}`
      },
    } : undefined);

    await writeFileAsync(
      `${TARGET_FOLDER}/repositories-data.json`,
      JSON.stringify(response.data, null, 4),
    );
  } catch (e) {
    console.error(e);
  }
}

async function main() {
  await fetchRepositories()
    .catch(err => console.error(err));
}

main();
