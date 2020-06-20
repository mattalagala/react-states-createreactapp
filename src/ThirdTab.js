import React, {useState} from 'react';
// import logo from './logo.svg';
import './App.css';

import './style.css';
// export default App;

function LoginForm (props) {
    console.log(props.clickFn)
    console.log("`````~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`````````````````")
    return (
    <form id="loginForm">
        <div class="form-group"> 
            <div>Login Form</div>
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="exampleInputPassword1"></input>
            <button type="submit" class="btn btn-primary" id="submitBtn" onClick={props.clickFn}>Submit</button>
        </div>   
  </form>)
}

function LoginSuccess () {

    return  (
        <form id="loginForm">
        <div class="form-group"> 
            YAYY
        </div>   
        </form>        
        )

        
        
}


function Submit () {

    return <LoginSuccess />
}





function RenderThird (props) {
    const clickLoginBtn = ()=>{setbtnState(Submit())}
    
    const [btnState, setbtnState] = useState(<Submit />) 
    
    return (        
        <LoginForm clickFn={clickLoginBtn}/>
    )
}

export default RenderThird;
