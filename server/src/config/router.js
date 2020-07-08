const router = require('express').Router();

router.use('/super-heroes', require('../api/super-heroes/super-heroes-router'));

module.exports = router;
