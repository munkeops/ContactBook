import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from 'react-router-dom';
import ReactSearchBox from 'react-search-box'
import ContactPost from "./ContactPost.js"
// import { Navbar,Nav,NavDropdown,Form,FormControl,Button } from 'react-bootstrap'
// import Home from './Home';
// import AboutUs from './AboutUs';
// import ContactUs from './ContactUs';

function NavBar(){
  
  return(
      <div className="NavBar">
        <div className="Brand"><p>ContactBook</p></div>
        <div className="SearchBar"><input id="SearchBox" type="text" placeholder="Search.."/><button id="SearchButton"><img id ="SearchIcon"src="https://img.icons8.com/material-outlined/24/000000/search.png"/></button></div>
        <div className="About"><button id="AboutButton">About</button></div>
                 
      </div>
  )  
}

function Body(){
  return(
    <div className="Body">
      <div className="LeftBar"></div>
      <div className="Contacts">
        <ul id="ListContacts">
          <li><ContactPost/></li>
        </ul>
      </div>
      <div className="RightBar"></div>
    </div>
  )
}




function App() {
  return (
    <div className="App">
      <NavBar/>
      <Body/>
      
    </div>
  );
}

export default App;
