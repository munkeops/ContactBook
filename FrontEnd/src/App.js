import React,{ useState, useEffect } from 'react';

import './App.css';
import { CSVLink
  // , CSVDownload 
} from "react-csv";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // useParams,
  Link,
  Redirect
} from 'react-router-dom';
import ContactPost from "./ContactPost.js"
import LoginPage from "./Login.js"
import Landing from "./Landing.js"
import Register from "./Register.js"


import ContactService from './services/ContactService';


function NavBar(props){

  function logout(){
    props.setUsername("")
    props.setPassword("")
  }
  
  return(
      <div className="NavBar">
        <div className="Brand"><p>ContactBook</p></div>
        <div className="SearchBar"><input id="SearchBox" type="text" placeholder="Search.."/><button id="SearchButton"><img id ="SearchIcon"src="https://img.icons8.com/material-outlined/24/000000/search.png"/></button></div>
        <div className="Logout"><Link to="/"><button id="AboutButton" onClick={()=>logout()}>Logout</button></Link></div>                 
      </div>
  )  
}


function Body(props){

  // const forceUpdate = useForceUpdate();
  var values=[]
  
  const [contacts, setcontacts] = useState(null);
    // Declare a new state variable, which we'll call "count"
  const [viewAddContact, setview] = useState(false);

  const [newContactName, setName] = useState('')
  const [newContactNumber, setNumber] = useState('')


  useEffect(() => {
    if(!contacts) {
      getContacts();
    }
  })
  const getContacts = async () => {
    console.log("user = "+props.user+props.password)
    let res = await ContactService.getAll(props.user,props.password);
    // console.log(res);
    setcontacts(res);
  }

  const renderContact = contact => {
    // console.log(values)
    values.push({
      "name":contact.name,
      "number":contact.number
    })
    return (
      <li><ContactPost name={contact.name} number={contact.number}/></li>
      
    );
  };

  

  function clearNewCon(){

    setview(false);
    setNumber("");
    setName("");

  }
  

  async function saveNewCon(){
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: newContactName,number:newContactNumber})
    };
    console.log('/api/contact/'+props.user)
    await fetch('/api/contact/'+props.user, requestOptions)
        .then(response => console.log(response.json()))
      
    // forceUpdate()
    setcontacts(null)
    clearNewCon()
        // .then(data => this.setState({ postId: data.id }));
  }

  function Functions(){
    return(
      <div id="Functions">
          
          <CSVLink className="ExportButton" data={values}  filename={"My-Contacts.csv"}>
            <img id="ExportIcon"src="https://img.icons8.com/offices/30/000000/export-csv.png"/>EXPORT
          </CSVLink>

          <button id="AddNewButton" onClick={() => setview(true)}>
            <img id="AddNewIcon" src="https://img.icons8.com/color/50/000000/add.png"/>ADD
          </button>

        </div>
    )

  }

  return(
    <div className="Body">
      <div className="LeftBar"></div>
      <div className="Contacts">
        <Functions/>        
        {
          viewAddContact && 
          // <AddContact/>
          <div className="AddContact">
            <img id="Dp2" src="https://img.icons8.com/pastel-glyph/64/000000/person-male.png"/>
            <div className="NewConInput">
              <label id="newConLabels">
                Name:<br/><input id="newConForm" type="text"  placeholder=" eg. John Doe" onInput={e => setName(e.target.value)}/>

              </label >
              <label id="newConLabels">
                Number:<br/>  <input id="newConForm"  placeholder=" eg. 9998887776"onInput={e => setNumber(e.target.value)}/>
              </label>
            </div>
            <button className="SaveNew" onClick={()=>saveNewCon()}><img id ="SaveImg"src="https://img.icons8.com/color/48/000000/checked--v1.png"/></button>
            <button className="CancelNew" onClick={()=>clearNewCon()}><img id="CancelImg"src="https://img.icons8.com/color/48/000000/cancel--v1.png"/></button>
          </div>
        }
        <ul id="ListContacts">
          {/* {console.log(typeof(contacts))} */}
          
          {(contacts && contacts.length > 0) ? (
            contacts.map(contact => renderContact(contact))
          ) : (
            <p>No contacts found</p>
          )}

        </ul>
      </div>
      <div className="RightBar"></div>
    </div>
  )
}

function HomePage(props){
  return(
    <div className="HomePage">
      <NavBar user={props.user} setUsername={props.setUsername} password={props.password} setPassword={props.setPassword}/>
      <Body user={props.user} setUsername={props.setUsername} password={props.password} setPassword={props.setPassword}/>
    </div>
  )
}





function App() {

  const [user, setUsername] = useState("");
  const [password,setPassword]=useState("");
  const username1 = React.createContext("");

  
  return (
    <div className="App">
      {/* <div className="Login"></div> */}
      <Router>
        {/* <Switch> */}
          <Route exact path='/'><Landing/></Route>
          <Route exact path='/signup'><Register/></Route>
          <Route exact path='/login' ><LoginPage user={user} setUsername={setUsername} password={password} setPassword={setPassword}/></Route>
          <Route exact path='/home' render={()=>(
            user=="" ?(
              <Redirect to="/login"/>
            ):(
              <HomePage user={user} setUsername={setUsername} password={password} setPassword={setPassword} />
            )
            )}/>
        {/* </Switch> */}
      </Router>
      
        
      {/* </div> */}
      
    </div>
  );
}

export default App;
