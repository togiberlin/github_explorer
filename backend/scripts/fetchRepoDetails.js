/**
 * Usage: npm run fetch:repoDetails
 */

const fs = require('fs');
const path = require('path');
const util = require('util');
const axios = require('axios');
const repoItems = require('../fixtures/mockResponses/repositories/repositories-large-data.json');

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

const TARGET_FOLDER = 'backend/fixtures/repos';

async function fetchRepoDetailsFor(repoItems) {
  try {
    repoItems.map(async (repoItem) => {
      const response = await axios.get(`https://api.github.com/api/repos/${repoItem.full_name}`);

      await writeFileAsync(
        `${TARGET_FOLDER}/repo-details-${repoItem.owner.name}-${repoItem.name}.json`,
        JSON.stringify(response.data, null, 4)
      );
    });
  } catch (e) {
    console.error(e);
  }
}

async function main() {
  await fetchRepoDetailsFor(repoItems);
}

main();
