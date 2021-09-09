
import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Button, Col, Card, Container, Modal, Row } from 'react-bootstrap';


export default function Stas() {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);
  const[topFiveCount1,setTopFiveCount1]=useState([]);
  const[topFiveCount2,setTopFiveCount2]=useState([]);
  const[fiveDates,setFiveDates]=useState([]);
  let newdate = Date()

  React.useEffect(() => {
    
    axios.get('http://localhost:5000/carts/').then((response) => {
      
      setCart(response.data);
     


      axios.get('http://localhost:5000/products/selectCount1').then((response) => {
    
    setTopFiveCount1(response.data);
    
  });

  axios.get('http://localhost:5000/products/selectCount2').then((response) => {
    
    setTopFiveCount2(response.data);
    
  });
  axios.get('http://localhost:5000/payments/pay').then((response) => {
    
    setFiveDates(response.data);
    
  });

 });
      
   
  }, []);






  
  

  return (
    <>
<br></br>
        <div className="row">
          <div className="col-4 font"><Card style={{ width: '20rem', height: '20rem' ,borderColor:'red'}} >
          <Card.Body>
            <div>
              <Card.Title as='h4'><b>Top 5 sel</b></Card.Title>
              <br></br>
              
              {topFiveCount1.map((item, index) => (
                    <div className="row">
<div className="col-5 ">{item.username}</div>-
<div className="col-5 ">{item.count1}</div>
                    </div>
                ))}
              <Card.Text style={{ textAlign: 'right' }}
                className="col-12 h-100"  > </Card.Text>
            </div>
          </Card.Body>
        </Card></div>
          <div className="col-4 font"><Card style={{ width: '20rem', height: '20rem',borderColor:'red' }} >
          <Card.Body>
            <div>
              <Card.Title as='h4'><b>Top 5 unique sel</b></Card.Title>
              <br></br>
              {topFiveCount2.map((item, index) => (
                    <div className="row">
<div className="col-5 ">{item.username}</div>-
<div className="col-5 ">{item.count2}</div>
                    </div>
                ))}
              <Card.Text style={{ textAlign: 'right' }}
                className="col-12 h-100"  ></Card.Text>
            </div>
          </Card.Body>
        </Card></div>
          <div className="col-4 font"><Card style={{ width: '20rem', height: '20rem',borderColor:'red' }} >
          <Card.Body>
            <div>
              
              <Card.Title as='h4'><b>past 5 days $</b></Card.Title>
              <br></br>
              {fiveDates.map((item, index) => (
                    <div className="row">
<div className="col-5 ">{(item.date)}</div>-
<div className="col-5 ">{item.pay}$</div>
                    </div>
                ))}
              <Card.Text style={{ textAlign: 'right' }}
                className="col-12 h-100"  > </Card.Text>
            </div>
          </Card.Body>
        </Card></div>
        </div>
        

        




        

    



    </>

  );
}