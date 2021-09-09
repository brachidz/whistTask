  
const mongoose = require('mongoose');

const Schema = mongoose.Schema;



const paymentSchema = new Schema({
  date: { type: String, required: true },
  pay: { type: Number, required: true },
  
  
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;