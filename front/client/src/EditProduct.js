import React, { Component,useState,useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { useParams } from "react-router-dom";

export default function EditProduct (props) {
  // constructor(props) {
  //   super(props);

  //   this.onChangeUsername = this.onChangeUsername.bind(this);
  //   this.onChangeDescription = this.onChangeDescription.bind(this);
  //   this.onChangePrice = this.onChangePrice.bind(this);
  //   this.onChangeProductImage = this.onChangeProductImage.bind(this);
  //   this.onSubmit = this.onSubmit.bind(this);

  //   this.state = {
  //     username: '',
  //     description: '',
  //     price: 0,
  //     productImage:'',
      
  //   }
  // }

  const [username,setUserName]=useState("");
  const [description,setDescription]=useState("");
  const [price,setPrice]=useState("");
  const [productImage,setProductImage]=useState("");
  const params = useParams();
  const {id} = useParams();
  React.useEffect(() => {
    debugger
    console.log(params.id);
    axios.get(`http://localhost:5000/products/${params.id}`)
      .then(response => {
        setUserName(response.data.username);
        setDescription(response.data.description);
        setPrice(response.data.price);
        setProductImage(response.data.productImage)
        // this.setState({
        //   username: response.data.username,
        //   description: response.data.description,
        //   price: response.data.price,
        //   productImage: response.data.date
        // })   
      })
      .catch(function (error) {
        console.log(error);
      })
  }, []);





  // componentDidMount() {
  //   axios.get('http://localhost:5000/products/'+this.props.match.params.id)
  //     .then(response => {
  //       setUserName(response.data.username);
  //       setDescription(response.data.description);
  //       setPrice(response.data.price);
  //       setProductImage(response.data.productImage)
  //       // this.setState({
  //       //   username: response.data.username,
  //       //   description: response.data.description,
  //       //   price: response.data.price,
  //       //   productImage: response.data.date
  //       // })   
  //     })
  //     .catch(function (error) {
  //       console.log(error);
  //     })

  //   // axios.get('http://localhost:5000/users/')
  //   //   .then(response => {
  //   //     if (response.data.length > 0) {
  //   //       this.setState({
  //   //         users: response.data.map(user => user.username),
  //   //       })
  //   //     }
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error);
  //   //   })

  // }

  // onChangeUsername(e) {
  //   this.setState({
  //     username: e.target.value
  //   })
  // }

  // onChangeDescription(e) {
  //   this.setState({
  //     description: e.target.value
  //   })
  // }

  // onChangePrice(e) {
  //   this.setState({
  //     price: e.target.value
  //   })
  // }

  // onChangeProductImage(e) {
  //   this.setState({
  //     productImage: e.target.value
  //   })
  // }

  function onSubmit(e) {
    e.preventDefault();
debugger
    const product = {
      username: username,
      description: description,
      price: price,
      productImage: productImage
    }

    console.log(product);
debugger
    //axios.post('http://localhost:5000/products/update/' + this.props.match.params.id, product)
    axios.post('http://localhost:5000/products/update/' + params.id, product)
    //axios.post(`http://localhost:5000/products/update/${params.id}${product} `)
      .then(res => console.log(res.data).catch(console.log("erorr")));

    window.location = '/';
  }

  
    return (
    <div>
      <h3>Edit product</h3>
      <form onSubmit={onSubmit}>
      <div className="form-group"> 
          <label>name: </label>
          <input type="text"
              required
              className="form-control"
              value={username}
              onChange={e => setUserName(e.target.value)}>
              {/* {
                this.state.users.map(function(user) {
                  return <option 
                    key={user}
                    value={user}>{user}
                    </option>;
                })
              } */}
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
          <label>price (in $): </label>
          <input 
              type="text" 
              className="form-control"
              value={price}
              onChange={e => setPrice(e.target.value)}
              />
        </div>
        {/* <div className="form-group">
          <label>Date: </label>
          <div>
            <DatePicker
              selected={this.state.date}
              onChange={this.onChangeDate}
            />
          </div>
        </div> */}
        <div className="form-group">
          <label>image : </label>
          <input 
              type="url" 
              className="form-control"
              value={productImage}
              onChange={e => setProductImage(e.target.value)}
              />
        </div>

        <div className="form-group">
          <input type="submit" value="Edit Product" className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }







// import React, { Component,useState,useEffect } from 'react';
// import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";
// // import { useParams } from "react-router-dom";

// export default class EditProduct extends Component  {
//   constructor(props) {
//     super(props);
// debugger
//  console.log(props.item._id)
//     this.onChangeUsername = this.onChangeUsername.bind(this);
//     this.onChangeDescription = this.onChangeDescription.bind(this);
//     this.onChangePrice = this.onChangePrice.bind(this);
//     this.onChangeProductImage = this.onChangeProductImage.bind(this);
//     this.onSubmit = this.onSubmit.bind(this);

//     this.state = {
//       username: '',
//       description: '',
//       price: 0,
//       productImage:'',
      
//     }
//   }

//   // const [username,setUserName]=useState("");
//   // const [description,setDescription]=useState("");
//   // const [price,setPrice]=useState("");
//   // const [productImage,setProductImage]=useState("");
//   // const params = useParams();
//   // const {id} = useParams();
//   // React.useEffect(() => {
//   //   debugger
//   //   console.log(id);
//   //   axios.get('http://localhost:5000/products/'+this.props.match.params.id)
//   //     .then(response => {
//   //       // setUserName(response.data.username);
//   //       // setDescription(response.data.description);
//   //       // setPrice(response.data.price);
//   //       // setProductImage(response.data.productImage)
//   //       this.setState({
//   //         username: response.data.username,
//   //         description: response.data.description,
//   //         price: response.data.price,
//   //         productImage: response.data.date
//   //       })   
//   //     })
//   //     .catch(function (error) {
//   //       console.log(error);
//   //     })
//   // }, []);





//   componentDidMount() {
//     // axios.get('http://localhost:5000/products/'+this.props.match.params.id)
//     //   .then(response => {
//     //     // setUserName(response.data.username);
//     //     // setDescription(response.data.description);
//     //     // setPrice(response.data.price);
//     //     // setProductImage(response.data.productImage)
//     //     this.setState({
//     //       username: response.data.username,
//     //       description: response.data.description,
//     //       price: response.data.price,
//     //       productImage: response.data.date
//     //     })   
//     //   })
//     //   .catch(function (error) {
//     //     console.log(error);
//     //   })

//     // axios.get('http://localhost:5000/users/')
//     //   .then(response => {
//     //     if (response.data.length > 0) {
//     //       this.setState({
//     //         users: response.data.map(user => user.username),
//     //       })
//     //     }
//     //   })
//     //   .catch((error) => {
//     //     console.log(error);
//     //   })

//   }

//   onChangeUsername(e) {
//     this.setState({
//       username: e.target.value
//     })
//   }

//   onChangeDescription(e) {
//     this.setState({
//       description: e.target.value
//     })
//   }

//   onChangePrice(e) {
//     this.setState({
//       price: e.target.value
//     })
//   }

//   onChangeProductImage(e) {
//     this.setState({
//       productImage: e.target.value
//     })
//   }

//    onSubmit(e) {
//     e.preventDefault();
// debugger
//     const product = {
//       username: this.state.username,
//       description: this.state.description,
//       price: this.state.price,
//       productImage: this.state.productImage
//     }

//     console.log(product);
// debugger
//     axios.post('http://localhost:5000/products/update/' + this.props.match.params.id, product)
//     //axios.post(`http://localhost:5000/products/update/${product._id}${product} `)
//       .then(res => console.log(res.data));

//     window.location = '/';
//   }

//   render(){
//     return (
//     <div>
//       <h3>Edit product</h3>
//       <form onSubmit={this.onSubmit}>
//       <div className="form-group"> 
//           <label>name: </label>
//           <input type="text"
//               required
//               className="form-control"
//               value={this.state.username}
//               onChange={this.onChangeUsername}>
//               {/* {
//                 this.state.users.map(function(user) {
//                   return <option 
//                     key={user}
//                     value={user}>{user}
//                     </option>;
//                 })
//               } */}
//           </input>
//         </div>
//         <div className="form-group"> 
//           <label>Description: </label>
//           <input  type="text"
//               required
//               className="form-control"
//               value={this.state.description}
//               onChange={this.onChangeDescription}
//               />
//         </div>
//         <div className="form-group">
//           <label>price (in $): </label>
//           <input 
//               type="text" 
//               className="form-control"
//               value={this.state.price}
//               onChange={this.onChangePrice}
//               />
//         </div>
//         {/* <div className="form-group">
//           <label>Date: </label>
//           <div>
//             <DatePicker
//               selected={this.state.date}
//               onChange={this.onChangeDate}
//             />
//           </div>
//         </div> */}
//         <div className="form-group">
//           <label>image : </label>
//           <input 
//               type="url" 
//               className="form-control"
//               value={this.state.productImage}
//               onChange={this.onChangeProductImage}
//               />
//         </div>

//         <div className="form-group">
//           <input type="submit" value="Edit Product" className="btn btn-primary" />
//         </div>
//       </form>
//     </div>
//     )
//   }    
// }
