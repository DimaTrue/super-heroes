const ModelSuperHero = require('./super-heroes-model');
const { deleteFromClouinaryAllHeroImages } = require('../../config/storage');

module.exports = {
  getHeroes: async (req, res) => {
    let page = +req.query.page - 1;
    let validatedPage = page > 0 ? page : 0;
    let limit = +req.query.perPage;
    let validatedLimit = limit > 0 ? limit : 5;
    const heroesCount = await ModelSuperHero.estimatedDocumentCount();
    const heroes = await ModelSuperHero.find({})
      .sort({ nickname: 1 })
      .skip(validatedPage * limit)
      .limit(validatedLimit);

    try {
      res.send({
        heroes,
        totalHeroes: heroesCount,
        currentPage: validatedPage,
        totalPages: Math.ceil(heroesCount / validatedLimit),
      });
    } catch (err) {
      res.status(501).send(err);
    }
  },

  createHero: async (req, res) => {
    const imageRef = req.file && req.file.path;
    const { nickname, realName, description, superPowers, phrase } = req.body;

    const hero = new ModelSuperHero({
      nickname: nickname,
      real_name: realName,
      origin_description: description,
      superpowers: superPowers,
      catch_phrase: phrase,
      Images: imageRef ? [imageRef] : [],
    });

    try {
      await hero.save();
      res.send(hero);
    } catch (err) {
      res.status(500).send(err);
    }
  },

  deleteHero: async (req, res) => {
    ModelSuperHero.findByIdAndDelete({
      _id: req.query.id,
    }).then((row) => {
      res.send(row);
      row.Images.length &&
        deleteFromClouinaryAllHeroImages(
          row.Images.map((el) => el.slice(el.indexOf('uploads'), -4)),
        );
    });
  },

  updateHero: function (req, res) {
    if (req.file && req.file.path && req.file.path.length) {
      ModelSuperHero.findByIdAndUpdate(
        req.body.heroId,
        { ...req.body, $push: { Images: `${req.file.path}` } },
        {
          new: true,
        },
      ).then((row) => res.send(row));
    } else {
      ModelSuperHero.findByIdAndUpdate(req.body.heroId, req.body, {
        new: true,
      }).then((row) => res.send(row));
    }
  },
};
