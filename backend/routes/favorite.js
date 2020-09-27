const express = require('express');
const router = express.Router();
const fs = require('fs');

const FAVORITE_DATA_FILE = require('../persistency/favorites.json');

router.get('/', (_req, res) => {
  fs.readFile(FAVORITE_DATA_FILE, (_err, data) => {
    res.setHeader('Cache-Control', 'no-cache');
    res.json(JSON.parse(data));
  });
});

router.post('/', (req, res) => {
  fs.readFile(FAVORITE_DATA_FILE, (_err, data) => {
    const favoriteItems = JSON.parse(data);
    const newFavoriteItem = { id: req.body.id, title: req.body.title, description: req.body.description, price: req.body.price, quantity: 1 };
    let favoriteItemExists = false;

    favoriteItems.map((favoriteItem) => {
      if (favoriteItem.id === newFavoriteItem.id) {
        favoriteItem.quantity++;
        favoriteItemExists = true;
      }
    });

    if (!favoriteItemExists) {
      favoriteItems.push(newFavoriteItem);
    }

    fs.writeFile(FAVORITE_DATA_FILE, JSON.stringify(favoriteItems, null, 4), () => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(favoriteItems);
    });
  });
});

router.post('/delete', (req, res) => {
  fs.readFile(FAVORITE_DATA_FILE, (_err, data) => {
    let favoriteRepos = JSON.parse(data);

    favoriteRepos.map((favoriteRepo) => {
      if (favoriteRepo.id === req.body.id && favoriteRepo.quantity > 1) {
        favoriteRepo.quantity--;
      } else if (favoriteRepo.id === req.body.id && favoriteRepo.quantity === 1) {
        const favoriteIndexToRemove = favoriteRepos.findIndex(favoriteRepo => favoriteRepo.id === req.body.id);
        favoriteRepos.splice(favoriteIndexToRemove, 1);
      }
    });

    fs.writeFile(FAVORITE_DATA_FILE, JSON.stringify(favoriteRepos, null, 4), () => {
      res.setHeader('Cache-Control', 'no-cache');
      res.json(favoriteRepos);
    });
  });
});

router.post('/delete/all', (_req, res) => {
  fs.readFile(FAVORITE_DATA_FILE, () => {
    let emptyFavorite = [];

    fs.writeFile(FAVORITE_DATA_FILE, JSON.stringify(emptyFavorite, null, 4), () => {
      res.json(emptyFavorite);
    });
  });
});

module.exports = router;