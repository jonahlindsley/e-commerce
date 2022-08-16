const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// listening on the get route and returning all tags and related products
router.get('/', (req, res) => {
  Tag.findAll({
    include: Product
  })
    .then(data => {
      res.send(data)
    })

});

router.get('/:id', (req, res) => {
  Tag.findOne({
    where:{
      id: req.params.id
    },
    include: Product
  })
    .then(data => {
      res.send(data)
    })

});

// listening on the post route for a new tag
router.post('/', (req, res) => {
    Tag.create(req.body)
      .then(() => {
        res.status(200).json(`created new tag`);
      })
      .then((tagTagIds) => res.status(200).json(tagTagIds))
      .catch((err) => {
        console.log(err);
        res.status(400).json(err);
      });
});


router.put('/:id', (req, res) => {
Tag.update(req.body, {
  where: {
    id: req.params.id,
  },
})
.then(() => {
  res.status(200).json(`tag has been updated!`);
})
})

router.delete('/:id', (req, res) => {
  Tag.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then(() => {
    res.status(200).json(`Tag has been destroyed!`);
  })
});

module.exports = router;
