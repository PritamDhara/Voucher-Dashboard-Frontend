import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { login } from '../features/auth';
import { useSelector } from 'react-redux';
import { logout } from '../features/auth';
import axios from 'axios';
function Login() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { username } = useSelector((state) => state.auth.value);

    const logoutHandler = ()=>{
        dispatch(logout());
        navigate("/")
    }
    const handleLogin = async ()=>{
  
    var payload = {
        "userEmail": String(document.getElementById('usermail').value),
        "password" : String(document.getElementById('password').value),
    }
  
    var url = "http://localhost:9092/app/login"
    try {
      const response = await axios.post(url,payload);
      const res = response.data;
      console.log(res);
      // alert("Login Successfully")
    //   setShow(true)
    //   setShowSuccess(true)
      // navigate('/adminhome')
      
      dispatch(login(res));
      if(res.roles[0]==='ROLE_USER')
      {
        setTimeout(() => {
        //   setShowSuccess(false);
          navigate('/userhome') // Redirect to userhome
        }, 1000);
  
        // navigate('/userhome')
  
      }else if(res.roles[0]==='ROLE_ADMIN')
      {
        setTimeout(() => {
        //   setShowSuccess(false);
          navigate('/adminhome') // Redirect to userhome
        }, 1000);
        // navigate('/adminhome')
      }
  
  } catch (error) {
      // alert(error);
    //   setShow(false);
  }
  
    }

  return (
    <>
    <input type='text' id='usermail' />
    <input type='text' id='password'/>
    <button onClick={handleLogin}>Submit</button>


    <div> Hi {username}</div>

    <button onClick={logoutHandler}>Logout</button>
    
    </>
  )
}

export default Login