  
const mongoose = require('mongoose');

const Schema = mongoose.Schema;


const productSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  productImage: { type: String, required: true }, 
  count1:{ type: Number, required: false },
  count2:{ type: Number, required: false },
  
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;