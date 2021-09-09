const router = require('express').Router();
let Product = require('../models/product.model');

router.route('/').get((req, res) => {
  Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/selectCount1').get((req, res) => {
  Product.find().sort({count1:-1}).limit(5)
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});
router.route('/selectCount2').get((req, res) => {
  Product.find().sort({count2:-1}).limit(5)
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {

  const username = req.body.username;
  const description = req.body.description;
  const price = Number(req.body.price);
  const productImage=req.body.productImage;
  const count1=Number(req.body.count1);
  const count2=Number(req.body.count2);
  

  const newProduct = new Product({
    username,
    description,
    price,
    productImage,
    count1,
    count2
   
  });

  newProduct.save()
  .then(() => res.json('Product added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req, res) => {
  Product.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});
// router.route('/selectTop').get((req, res) => {
  
//   try {
//     const products = await Product.find().sort({ count1: 1 }).limit(1)
//     console.log(products)
//     res.status(200).json({ products: products }
//     )}
//     catch (err) {
//         res.status(500).json({ err: err })}
        
       
// });

router.route('/update/:id').post((req, res) => {
  Product.findById(req.params.id)
    .then(product => {
      product.username = req.body.username;
      product.description = req.body.description;
      product.price = Number(req.body.price);
      product.productImage =req.body.productImage;
      if(req.body.count1)
      {product.count1 = Number(req.body.count1);
        if(req.body.count2)
        product.count2 = Number(req.body.count2);}
      

      product.save()
        .then(() => res.json('Product updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;