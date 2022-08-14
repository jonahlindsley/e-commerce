const router = require('express').Router();
const { Category, Product } = require('../../models');

// listening n the get route and returning all cactegories and the related products
router.get('/', (req, res) => {
  Category.findAll({
  include: Product
})
  .then(data => {
    res.send(data)
  })
});


// listening on the post route and creating a new category
router.post('/', (req, res) => {
  Category.create(req.body)
    .then((product) => {
      res.status(200).json(`created new category`);
    })
    .then((categoryTagIds) => res.status(200).json(categoryTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });

});

// listening on the put route and updating the category
router.put('/:id', (req, res) => {
  Category.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then(() => {
    res.status(200).json(`category has been updated!`);
  })
  })
  
  // listening on the delete route and deleting a category by id 
router.delete('/:id', (req, res) => {
  Category.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then(() => {
    res.status(200).json(`Category has been destroyed!`);
  })
});

module.exports = router;
