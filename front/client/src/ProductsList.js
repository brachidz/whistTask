
import React, { Component,useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Col, Container, Modal, Row } from 'react-bootstrap';

export default function ProductsList() {
 

const [products,setProducts]=useState([]);    
const [show, setShow] = useState(false);



React.useEffect(() => {
  axios.get('http://localhost:5000/products/').then((response) => {
    
    setProducts(response.data);
   
  });
}, );


 

  function  deleteProduct(id) {
    axios.delete('http://localhost:5000/products/'+id)
      .then(response => { console.log(response.data)});
       setProducts(products.filter(el => el._id !== id));
    
  }
  const handleClose = () => setShow(false);
  const handleShow = () => {
      setShow(true);
  }
  


  const [username,setUserName]=useState("");
  const [description,setDescription]=useState("");
  const [price,setPrice]=useState("");
  const [productImage,setProductImage]=useState("");
  const [id,setId]=useState("")
  const[count1,setCount1]=useState(0);
  const[count2,setCount2]=useState(0)
  
  
  function onSubmit2() {
    

    const product = {
      username: username,
      description: description,
      price: price,
      productImage: productImage
    }

    
    axios.post('http://localhost:5000/products/update/' + id, product)
    .then(res => console.log(res.data));
     window.location = '/';
  }

 function onSubmit() {
    const product = {
      username: username,
      description: description,
      price: price,
      productImage: productImage,
      count1:count1,
      count2:count2
    }

    axios.post('http://localhost:5000/products/add', product)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  
    return (

      <>
 <button className="btn btn-outline-dark font"  style={{fontSize:'1.5rem'}} onClick={() => { handleShow() }}>Add</button>
 <br></br>
 <br></br>
<table style={{ width: '100%', alignItems: 'center', textAlign: 'center' }} className="table table-bordered table-hover ">
                <thead>
                    <tr style={{ color: "black", textShadow: "1.5px 1.5px red",fontSize:'1.5rem', textAlign: 'center', alignItems: 'center', alignContent: 'center' ,fontFamily:'cursive'}}>
                        <th style={{ textAlign: 'center',fontFamily:'cursive'}}>Name</th>
                        <th style={{ textAlign: 'center',fontFamily:'cursive'}}>Description</th>
                        <th style={{ textAlign: 'center',fontFamily:'cursive'}}>Price</th>
                        <th style={{ textAlign: 'center',fontFamily:'cursive'}}>Image</th>
                        <th style={{ textAlign: 'center',fontFamily:'cursive'}}>Actions</th>
                       
                    </tr>
                </thead>

                {products.map((item, index) => (
                    <tr key={item}>
                        <td className="fontButtonds " style={{ textAlign: 'center',fontFamily:'cursive' }}>
                            {item.username}
                        </td>
                        <td className="fontButtonds" style={{ textAlign: 'center' ,fontFamily:'cursive'}}>
                            {item.description}
                        </td>
                        <td className="fontButtonds" style={{ textAlign: 'center' ,fontFamily:'cursive'}}>
                            {item.price}$
                        </td>
                        <td className="fontButtonds" style={{ textAlign: 'center' ,fontFamily:'cursive'}}>
                            <img className="smimg"  style={{width:'5rem',height:'5rem'}} src={item.productImage} alt={item.username}></img>
                        </td>
                        
                        
                        <td>
                        
                        <button className="btn btn-outline-dark font"  onClick={() => { handleShow(); setId(item._id) }}>Edit</button>
                        
                        <button className="btn btn-outline-dark font" onClick={() => { deleteProduct(item._id) }}>delete</button>
                        </td>
                        
                    </tr>
                ))}
            </table>


            <Modal show={show} onHide={handleClose} >
                <Modal.Header style={{backgroundColor:'black'}} >
                    <Modal.Title  style={{fontSize:'1.5rem',color:'red',fontFamily:'cursive'}} >Product</Modal.Title>
                </Modal.Header>
                <Modal.Body className="fontButtonds font" >
                 
 <div >
        <h6 align="center"> Please Fill in the required fields </h6>
        <form  >
        <div className="form-group"> 
          <label>name: </label>
          <input type="text"
              required
              className="form-control"
              value={username}
              onChange={e => setUserName(e.target.value)}>
              
          </input>
        </div>
        <div className="form-group"> 
          <label>Description: </label>
          <input  type="text"
              required
              className="form-control"
              value={description}
              onChange={e => setDescription(e.target.value)}
              />
        </div>
        <div className="form-group">
          <label>price $: </label>
          <input 
              type="text" 
              className="form-control"
              value={price}
              onChange={e => setPrice(e.target.value)}
              />
        </div>

        <div className="form-group">
          <label>image: </label>
          <input 
              type="url" 
              className="form-control"
              value={productImage}
              onChange={e => setProductImage(e.target.value)}
              />
        </div>
<br></br>
<div className="row">
  <div className="col-3"><button  class="btn btn-outline-danger" onClick={onSubmit}>Add Product</button></div>
  <div className="col-3"><button  class="btn btn-outline-danger" onClick={onSubmit2}>Edit Product</button></div>
  </div>
        


        
      </form>
      </div>


                </Modal.Body>
                <Modal.Footer>
                    <button className="btn btn-danger bshadow fontButtonds" style={{ backgroundColor: 'black' }} variant="secondary" onClick={handleClose}>
                        Close
                    </button>
                    
                </Modal.Footer>
            </Modal>


            






      </>
    )
  
}
