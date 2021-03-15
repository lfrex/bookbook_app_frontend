import React from 'react';
import { Route, Link } from 'react-router-dom';

const Login = (props) => {
    console.log(props.users);
    return(
        <div className="App">
        <header>
          
        </header>
        <form onSubmit={props.login}>
          <input 
            name="username" 
            type="text" 
            value={props.username} 
            onChange={props.loginOnChange} 
            placeholder="Username"
            
          />
          <input 
            name="password" 
            type="password" 
            value={props.password} 
            onChange={props.loginOnChange} 
            placeholder="Password"/>
           <input type="submit" value="login" />
        </form>      
      </div>
    )
}

export default Login;