/**
 * This backend is for dev purposes, since GitHub rate limits API requests.
 */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.set('port', (process.env.PORT || 3000));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  res.setHeader('Pragma', 'no-cache');
  res.setHeader('Expires', '0');

  console.log(`[Express]: received ${req.method} request: ${req.path}`)
  next();
});

const favoriteRoutes = require('./routes/favorite');
const repositoriesRoutes = require('./routes/repositories');
const reposRoutes = require('./routes/repos');

app.use('/favorite', favoriteRoutes);
app.use('/repositories', repositoriesRoutes);
app.use('/repos', reposRoutes);

app.listen(app.get('port'), () => {
  console.log(`Find the server at: http://localhost:${app.get('port')}/`);
});
