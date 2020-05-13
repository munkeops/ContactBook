import React from 'react';
import "./Login.css";
// import { Button, FormGroup, FormControl,FormLabel} from "react-bootstrap";
import { useState } from "react";
import { Link } from 'react-router-dom';

function LoginPage(){

    
// const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

  function handleSubmit(event) {
    event.preventDefault();
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
            <form id="LoginForm" onSubmit={handleSubmit}>
                <label id="LoginInputlabel">
                    Username:<br/>
                    <input id="LoginInput" type="text" name="username" />

                </label><br/>
                <label id="LoginInputlabel">
                    Password:<br/>
                    <input id="LoginInput" type="password" name="password" />
                </label>
                <br/>
                
                
                <input id="LoginButton"type="submit" value="Login" />
                <br/>
                <br/>
                <label>
                    OR<br/>
                    {/* <input id="LoginInput" type="password" name="password" /> */}
                </label>
                <br/>
                <Link to="/signup">Signup</Link>
                <br/>


            </form>
          </div>
      </div>
    )
  }

export default LoginPage