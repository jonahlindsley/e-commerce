const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

//lisening on the get route and returning all products and the related tags and categories
router.get('/', (req, res) => {
  Product.findAll({
    include: Category, Tag
  })
    .then(data => {
      res.send(data)
    })
});

router.get('/:id', (req, res) => {
  Product.findOne({
    where:{
      id: req.params.id
    },
    include: Category, Tag
  })
    .then(data => {
      res.send(data)
    })

});

//lisening on the get route and returning one product based on the passed id and the related tags and categories
router.get('/:id', (req, res) => {
  Product.findOne({where: {id: req.params.id },
    include: Category, Tag
  })
    .then(data => {
      res.send(data)
    })
});

// listening on the post route and creating a new product
router.post('/', (req, res) => {
  Product.create(req.body)
    .then((product) => {
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// listening on the put route and updating the product
router.put('/:id', (req, res) => {
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
  .then(() => {
    res.status(200).json(`product has been updated!`);
  })
  })

// listening on the delete route and destroying a product based on the id
router.delete('/:id', (req, res) => {
  Product.destroy({
    where: {
      id: req.params.id,
    },
  })
  .then(() => {
    res.status(200).json(`product has been destroyed!`);
  })
});

module.exports = router;
