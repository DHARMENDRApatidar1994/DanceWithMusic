import React, { useState } from "react";
import axios from "axios";
import "./Login.css";
import {useNavigate} from "react-router-dom"
const Login = () => {

     const [admin, setAdmin] = useState({});
     const navigate = useNavigate();

     const handleSubmit = async (e) => {
          e.preventDefault();
          const response = await axios.post('https://singer.boostupdigital.in/api/admin/login', {admin});
          console.log(response.data);
          if(response.data.token){
               sessionStorage.setItem('token', response.data.token);
               navigate('/admin/dashboard');
          }
     }

     return (
     <div id="login-form">
          <div id="login-head">
          <h1>Log In</h1>
          </div>
          <div id="login-details">
          <form action="">
               <div id="user">
                    <input type="text" name="name" autoComplete="off" placeholder="Username" onChange={(e)=>setAdmin({...admin, username: e.target.value})} />
               </div>

               <div id="pass">
                    <input type="password" name="password" placeholder="Password" autoComplete="off" onChange={(e)=>setAdmin({...admin, password: e.target.value})} />
               </div>

               <div id="submit">
               <input type="submit" value="Log-In" onClick={handleSubmit} />
               </div>
          </form>
          </div>
     </div>
     );
};

export default Login;
