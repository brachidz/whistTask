const router = require('express').Router();
const { exists } = require('../models/payment.model');
let Payment = require('../models/payment.model');

router.route('/').get((req, res) => {
  Payment.find()
    .then(payments => res.json(payments))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/').get(async(req, res) => {
 await Payment.find()
    .then(payments => res.json(payments))
    .catch(err => res.status(400).json('Error: ' + err));
});






router.route ('/add').post(async(req, res) => {

let  pay2 = Number(req.body.pay);
// console.log("AAAA  "+pay2)
// console.log("date from params is  "+req.body.date)
let b;
let q=new Date(req=req.body.date);
let day=q.getDate();
let month=q.getMonth()+1;
let yaer=q.getFullYear();
// console.log("day  "+day)
// console.log("month  "+month)
// console.log("yaer  "+yaer)
// console.log("q  "+q)
let ful=day+"/"+month+"/"+yaer;
// console.log("full is  "+ful);



let date_ob1 = new Date();


let day1=date_ob1.getDate();
let month1=date_ob1.getMonth()+1;
let yaer1=date_ob1.getFullYear();
// console.log("day1  "+day1)
// console.log("month1  "+month1)
// console.log("yaer1  "+yaer1)
// console.log("deate_ob1  "+date_ob1)
let ful1=day1+"/"+month1+"/"+yaer1;
// console.log("full1 is  "+ful1);
// console.log(date_ob1+"   ob1 befor ");
// if(ful===ful1)
// {
//   console.log("true"+ful)
// }
// else{console.log("not qq")} 




let c;


 await Payment.findOne({date:ful1}).select("pay")
  .then(payments =>{
    let v= res.json( payments.pay)
     
    console.log("p   "+payments.pay);
    b=payments.pay;
    console.log("b   "+b);
    
    // console.log("pay2 is "+pay2)
    c=pay2+b;
    console.log("c is  "+c);
     } ).catch(err => res.status(400).json('Error: ' + "dfb"));
    
    console.log("pay2 is "+pay2)
    if(c)
    {
      console.log("c1  "+c);
      await Payment.findOneAndUpdate({date:ful1},{pay:c})
  
      .then(() => res.json('Payment added!e!'))
       
    .catch(err => res.status(400).json('Error: ' + err));}
    
   else{
     c=pay2;
     console.log(" updatedec1  "+c);
     
     
   
     const newPayment = new Payment({
       date:ful1,
       pay:c
      
     });
   
     newPayment.save()
     .then(() => res.json('newPayment added!'))
     .catch(err => res.status(400).json('Error: ' + err));
   }
    
});

router.route('/pay').get((req, res) => {
  Payment.find().limit(5)
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error: ' + err));
});

  




module.exports = router;