import React, { useState } from 'react';
 import axios from 'axios';
 import { Button, Col, Container, Modal, Row } from 'react-bootstrap';

 
export default  function Cart() {
   const [products,setProducts]=useState([])
   const[cart,setCart]=useState([]);
   const[total,setTotal]=useState(0);
   
   let a="";
   let b="";
   let c="";
   let d="";
   let e="";
   let f="";
   
   const [count, setCount] = useState(0);
   const [show, setShow] = useState(false);
   const[cnt1,setCnt1]=useState(0);
   const[cnt2,setCnt2]=useState(0);
   const [uniqueProducts,setUniqueProducts]=useState([])
    React.useEffect(async() => {
     
        axios.get('http://localhost:5000/products/').then((response) => {
          setProducts(response.data);
          
        });
      
        
        
        
       
      }, []);
      const handleClose = () => setShow(false);
      const handleShow = () => {
          setShow(true);
      }
 async  function  onSubmit(id,name,price,dec,img) {
     
        const cart = {
          nameOfProduct: name,
          
          price:price,
          pId:id
        }
       setTotal(total+price);
       setCount(count+1);
      
    
    await    axios.post('http://localhost:5000/carts/add', cart)
          .then(res => console.log(res.data));

      await    axios.get('http://localhost:5000/products/' + id)
          .then((response) => {
           

             a=(response.data.username);
           
           b=(response.data.price);
           c=(response.data.description);
           d=(response.data.productImage);
           e=(response.data.count1);
           f=(response.data.count2);
            
          });


 const product = {
            username: a,
            description: c,
            price: b,
            productImage: d,
            count1:e+1,
            count2:f
 }
          await   axios.post('http://localhost:5000/products/update/' + id, product)
         .then(res => console.log(res.data));
      }
    async function getCart()
      {
      
       await axios.get('http://localhost:5000/carts/').then((response) => {
         
          setCart(response.data);
          
        });
        }


       
    async  function deleteCartRecords()
      {
       
       debugger
        let flag=0;
        cart.forEach(element1 => {
          uniqueProducts.forEach(element2 => {

          if(element2==element1.pId )
          {
            flag=1;
          }
          
          });
          if(flag==0)
          {
            uniqueProducts.push(element1.pId);  

          }
          flag=0;
        });
  uniqueProducts.forEach( async element   => {
   
 debugger
   await  axios.get('http://localhost:5000/products/' + element)
    .then((response) => {
    

     a=(response.data.username);
   
   b=(response.data.price);
   c=(response.data.description);
   d=(response.data.productImage);
   e=(response.data.count1);
   f=(response.data.count2);
   alert("count 2 is"+f)
  });
  debugger
  const product = {
    
    username: a,
    description: c,
    price: b,
    productImage: d,
    count1:e,
    count2:f+1
  }
  debugger
     await axios.post('http://localhost:5000/products/update/' + element, product)
    
  .then(res => console.log(res.data));
}); 

      debugger
        let c1=new Date();
        const payment = {
        date: c1,
        pay: total,
       
      }
     debugger
     await  axios.delete('http://localhost:5000/carts/')
     .then((response) => {
 console.log(response.data);

 alert("deleted")
});

      axios.post('http://localhost:5000/payments/add', payment)
      .then(res => console.log(res.data));
      debugger
     
debugger

         
        window.location = '/';
       setCount(0)
       setTotal(0)
      }

  return(
    <div>

      <button className="col-4 btn btn-outline-dark font"  style={{color:'red',fontSize:'1.2rem'}} onClick={() => { getCart();handleShow() }}><div > shopping cart  {count}</div></button>
      <br></br>
      <br></br>
  <div className="row center">
  {products.map((item, index) => (

<div className="card col-3" style={{ borderColor:'red' ,fontFamily:'cursive'}}>
    <div className="card-body">
        <h5 class="card-title"></h5>
        
        <img className="smimg" src={item.productImage} style={{width:'12rem',height:'8rem',borderRadius:'20%'}} alt={item.username}></img>
        <br></br>
        <br></br>
        <span><b> name: </b>{item.username}</span>     
        
        <br></br>
        <span><b> price: </b>{item.price}$</span>
        <br></br>
        <span><b> description: </b>{item.description}</span>
        <br>
        </br>
        <br></br>
       <button   className="btn btn-danger "style={{width:'10rem',height:'2rem',color:'black'}} onClick={() => { onSubmit(item._id,item.username,item.price,item.description,item.productImage) }}   ><b>  Buy</b> </button>
    </div>
    
    <div>
    </div>
</div>

))}





<Modal show={show} onHide={handleClose}   style={{borderColor:'red'}}>
                <Modal.Header  style={{backgroundColor:'black'}} >
                    <Modal.Title className="fontDiv shasow"   style={{fontSize:'1.5rem',color:'red',fontFamily:'cursive'}}>My Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body className="fontButtonds  font">
                   
 <div>
        <h6 align="center" style={{fontSize:'1.3rem'}}> Here's what you bought </h6>
        <form >
        <div className="container" style={{ width: '10rem' }}>

        {cart.map((item, index) => (

<div className="row">
<div className="col-8">{item.nameOfProduct}</div>
<div className="col-4">{item.price}$   </div>

</div>

))}
<div className="row">
<div className="col-8"  style={{fontSize:'1.1rem'}}>ToTal</div>
<div className="col-4" style={{fontSize:'1.1rem'}}>{total}$</div>



  
</div>
<br></br>
<br></br>
<button  class="btn btn-outline-danger"  style={{fontSize:'1.4rem',width:'8rem'}} onClick={() => { deleteCartRecords() }}>Final Pay</button>

</div>
      </form>
      </div>


                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-danger bshadow fontButtonds" style={{ backgroundColor: 'black' }} variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    {/* <button className="btn btn-danger bshadow fontButtonds" style={{ backgroundColor: 'black' }} variant="primary" onClick={(item) => dispatch(actions.addToCart(products[ind], item))}>‏
                    Add to cart
                   </button> */}
                </Modal.Footer>
            </Modal>


  </div>
  </div>
  
  
)

}
 