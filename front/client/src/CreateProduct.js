// import React, { Component,useState,useEffect ,useRef} from 'react';
// import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import "react-datepicker/dist/react-datepicker.css";

// export default function CreateExercise () {
//   // constructor(props) {
//   //   super(props);

//   //   this.onChangeUsername = this.onChangeUsername.bind(this);
//   //   this.onChangeDescription = this.onChangeDescription.bind(this);
//   //   this.onChangeDuration = this.onChangeDuration.bind(this);
//   //   this.onChangeDate = this.onChangeDate.bind(this);
//   //   this.onSubmit = this.onSubmit.bind(this);

//   //   this.state = {
//   //     username: '',
//   //     description: '',
//   //     duration: 0,
//   //     date: new Date(),
//   //     users: []
//   //   }
//   // } 
  
//   //  onChangeUsername = React.useRef()
//   //  onChangeDescription = React.useRef()
//   //  onChangeDuration = React.useRef()

//   //  onChangeDate = React.useRef()
//   //  onSubmit = React.useRef()

   
//   const [username,setUserName]=useState("");
//   const [description,setDescription]=useState("");
//   const [duration,setDuration]=useState("");
//   const [date,setDate]=useState(new Date());
//   const [users,setUsers]=useState([]);


//   useEffect(() => {
//     // Update the document title using the browser API
//     axios.get('http://localhost:5000/users/')
//       .then(response => {
//         if (response.data.length > 0) {
//           setUsers(response.data.map(user => user.username));
//           setUserName(response.data[0].username);
          
//         }
//       })
//       .catch((error) => {
//         console.log(error);
//       })
//   });


//   // componentDidMount() {
//   //   axios.get('http://localhost:5000/users/')
//   //     .then(response => {
//   //       if (response.data.length > 0) {
//   //         this.setState({
//   //           users: response.data.map(user => user.username),
//   //           username: response.data[0].username
//   //         })
//   //       }
//   //     })
//   //     .catch((error) => {
//   //       console.log(error);
//   //     })

//   // }

//    function onChangeUsername(e) {
//      setUserName(e.target.value)
    
//   }

//  function  onChangeDescription(e) {
//     setDescription(e.target.value);
//   }

//   function onChangeDuration(e) {
//     setDuration(e.target.value)
//   }

//   function onChangeDate(date) {
//     setDate(date)
//   }

//    function  onSubmit(e) {
//     e.preventDefault();

//     const exercise = {
//       username: username,
//       description: description,
//       duration: duration,
//       date: date
//     }

//     console.log(exercise);

//     axios.post('http://localhost:5000/exercises/add', exercise)
//       .then(res => console.log(res.data));

//     window.location = '/';
//   }

  
//     return (
//     <div>
//       <h3>Create New Exercise Log</h3>
//       <form onSubmit={onSubmit}>
//         <div className="form-group"> 
//           <label>Username: </label>
//           <select ref="userInput"
//               required
//               className="form-control"
//               value={username}
//               onChange={onChangeUsername}>
//               {
//                 users.map(function(user) {
//                   return <option 
//                     key={user}
//                     value={user}>{user}
//                     </option>;
//                 })
//               }
//           </select>
//         </div>
//         <div className="form-group"> 
//           <label>Description: </label>
//           <input  type="text"
//               required
//               className="form-control"
//               value={description}
//               onChange={onChangeDescription}
//               />
//         </div>
//         <div className="form-group">
//           <label>Duration (in minutes): </label>
//           <input 
//               type="text" 
//               className="form-control"
//               value={duration}
//               onChange={onChangeDuration}
//               />
//         </div>
//         <div className="form-group">
//           <label>Date: </label>
//           <div>
//             <DatePicker
//               selected={date}
//               onChange={onChangeDate}
//             />
//           </div>
//         </div>

//         <div className="form-group">
//           <input type="submit" value="Create Exercise Log" className="btn btn-primary" />
//         </div>
//       </form>
//     </div>
//     )
  
// }


import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class CreateProduct extends Component {
  constructor(props) {
    super(props);

    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDescription = this.onChangeDescription.bind(this);
    this.onChangePrice = this.onChangePrice.bind(this);
    this.onChangeProductImage = this.onChangeProductImage.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      username: '',
      description: '',
      price: '',
      productImage:'',
      
    }
  }

  componentDidMount() {
    // axios.get('http://localhost:5000/users/')
    //   .then(response => {
    //     if (response.data.length > 0) {
    //       this.setState({
    //         users: response.data.map(user => user.username),
    //         username: response.data[0].username
    //       })
    //     }
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })

  }

  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    })
  }

  onChangeDescription(e) {
    this.setState({
      description: e.target.value
    })
  }

  onChangePrice(e) {
    debugger
    this.setState({
      price:e.target.value
    })
  }

  onChangeProductImage(e) {
    this.setState({
      productImage: e.target.value
    })
  }

  onSubmit(e) {
    e.preventDefault();

    const product = {
      username: this.state.username,
      description: this.state.description,
      price: this.state.price,
      productImage: this.state.productImage
    }

    console.log(product);

    axios.post('http://localhost:5000/products/add', product)
      .then(res => console.log(res.data));

    window.location = '/';
  }

  render() {
    return (
        <div>
      <h3>Create New product </h3>
      <form onSubmit={this.onSubmit}>
        <div className="form-group"> 
          <label>name: </label>
          <input type="text"
              required
              className="form-control"
              value={this.state.username}
              onChange={this.onChangeUsername}>
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
              value={this.state.description}
              onChange={this.onChangeDescription}
              />
        </div>
        <div className="form-group">
          <label>price (in $): </label>
          <input 
              type="text" 
              className="form-control"
              value={this.state.price}
              onChange={this.onChangePrice}
              />
        </div>

        <div className="form-group">
          <label>image (in $): </label>
          <input 
              type="url" 
              className="form-control"
              value={this.state.productImage}
              onChange={this.onChangeProductImage}
              />
        </div>

        

        <div className="form-group">
          <input type="submit" value="Create product " className="btn btn-primary" />
        </div>
      </form>
    </div>
    )
  }
}


// import { Modal } from 'react-responsive-modal';
// import 'react-responsive-modal/styles.css';

//   export class ModalInClassComponents extends Component {

//     state={
//         openModal : false
//     }

//     onClickButton = e =>{
//         e.preventDefault()
//         this.setState({openModal : true})
//     }

//     onCloseModal = ()=>{
//         this.setState({openModal : false})
//     }

//     render() {
//         return (
//             <div>
//                 <button onClick={this.onClickButton}>Click Me</button>
//                 <Modal open={this.state.openModal} onClose={this.onCloseModal}>
//                     <h1>You Did it!
//                       <CreateProduct></CreateProduct>
//                     </h1>
//                 </Modal>   
//             </div>
//         )
//     }  
// }

