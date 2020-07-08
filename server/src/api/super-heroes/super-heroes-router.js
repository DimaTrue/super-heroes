const router = require('express').Router();
const SuperHeroController = require('./super-heroes-controller');
const multer = require('multer');
const { storage } = require('../../config/storage');

const upload = multer({
  storage,
});

router.get('/', SuperHeroController.getHeroes);
router.post(
  '/new-hero',
  upload.single('image'),
  SuperHeroController.createHero,
);
router.delete('/', SuperHeroController.deleteHero);
router.put('/', upload.single('image'), SuperHeroController.updateHero);

module.exports = router;
