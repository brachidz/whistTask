const router = require('express').Router();
let Cart = require('../models/cart.model');

router.route('/').get((req, res) => {
  Cart.find()
    .then(carts => res.json(carts))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const nameOfProduct = req.body.nameOfProduct;
  const price=req.body.price;
  const pId=req.body.pId;

  const newCart = new Cart({nameOfProduct,price,pId});

  newCart.save()
    .then(() => res.json('Cart added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/').delete((req, res) => {
    Cart.deleteMany()
    .then(() => res.json('All Data successfully deleted!'))
    .catch(err => res.status(400).json('Error: ' + err));
  });

module.exports = router;