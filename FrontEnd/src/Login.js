import React from 'react';
import "./Login.css";
// import { Button, FormGroup, FormControl,FormLabel} from "react-bootstrap";
import { useState } from "react";
import { Link } from 'react-router-dom';

function LoginPage(props){

    
const [hiddenstate, sethiddenstate] = useState(false);
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

  function handleSubmit(event) {
    event.preventDefault();
    
  }
  function toggleState(){
    sethiddenstate(!hiddenstate)
  }
    return(
      <div className="LoginPage">
          <div className="LoginFormBox">
            <h1 id="Header">ContactBook</h1>
            {/* <form onSubmit={handleSubmit}>
                <FormGroup controlId="email" bsSize="large">
                <FormLabel>Email</FormLabel>
                <FormControl
                    autoFocus
                    type="email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                <FormLabel>Password</FormLabel>
                <FormControl
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                />
                </FormGroup>
                <Button block bsSize="large" disabled={!validateForm()} type="submit">
                Login
                </Button> */}
            {/* </form> */}
            {/* <form id="LoginForm" onSubmit={handleSubmit}> */}
                {/* <label id="LoginInputlabel"> */}
                <p>Username:</p>
                <input id="LoginInput" type="text" name="username" onInput={e => props.setUsername(e.target.value)} /> 

                {/* <div className="LoginText"> */}
                  <p>Password:</p>                
                {/* </div> */}

                <div id="passwordBox">
                  <input id="LoginInput" type={hiddenstate?"text":"password"} name="password" onInput={e => props.setPassword(e.target.value)} />
                  <button id="toggleHidden" onClick={()=>toggleState()}>{hiddenstate?<img id="hiddenEye" src="https://img.icons8.com/material-outlined/24/000000/visible.png"/>:<img id="hiddenEye" src="https://img.icons8.com/material-sharp/24/000000/visible.png"/>}</button> 
                </div>
                {/* </label> */}


                <Link to="/home"><button id="LoginButton"  >Login</button></Link>
                <br/>
                <br/>
                <label>
                    OR<br/>
                    {/* <input id="LoginInput" type="password" name="password" /> */}
                </label>
                <br/>
                <Link to="/signup">Signup</Link>
                <br/>


            {/* </form> */}
          </div>
      </div>
    )
  }

export default LoginPage