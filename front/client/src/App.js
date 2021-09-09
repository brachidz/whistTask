// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import React, {useRef} from "react";
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
// import Home from "./Home";
// import Admin from "./Admin";
// import Stas from "./Stas";
// import CreateExercise from './CreateExercise';

// export default function App() {
//   return (
//     <>
//     <CreateExercise></CreateExercise>
//     </>
//     // <Router>
//     //   <div>
//     //     <nav>
//     //       <ul>
//     //         <li>
//     //           <Link to="/">Home</Link>
//     //         </li>
//     //         <li>
//     //           <Link to="/Admin">Admin</Link>
//     //         </li>
//     //         <li>
//     //           <Link to="/Stas">Stat</Link>
//     //         </li>
//     //       </ul>
//     //     </nav>

//     //     {/* A <Switch> looks through its children <Route>s and
//     //         renders the first one that matches the current URL. */}
//     //     <Switch>
//     //       <Route path="/Admin">
//     //         <Admin />
//     //       </Route>
//     //       <Route path="/Stas">
//     //         <Stas />
//     //       </Route>
//     //       <Route path="/">
//     //         <Home />
//     //       </Route>
//     //     </Switch>
//     //   </div>
//     // </Router>
//   );
// }

import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
// import { BrowserRouter as Router, Route} from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import Stas from "./Stas";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import ExercisesList from "./ExercisesList";
import EditExercise from "./EditExercise";
import CreateExercise from ".//CreateExercise";
import CreateUser from "./CreateUser";
import ProductsList from './ProductsList';
import EditProduct from './EditProduct';
import CreateProduct from './CreateProduct';
import NavbarNew from './NavbarNew';
import Cart from './Cart';

function App() {
  return (
    <Router>
      <div className="container" >
     
      <NavbarNew></NavbarNew>
      
      <br/>
     
      <Switch>
      <Route path="/Admin">
        <ProductsList />
      </Route>
      <Route path="/CreateProduct">
        <CreateProduct />
      </Route>
      <Route path="/EditProduct/:id">
        <EditProduct />
      </Route>
      <Route path="/Stas">
        <Stas />
      </Route>
      <Route path="/Cart">
        <Cart />
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Switch>

      </div>
    </Router>
  );
}

export default App;