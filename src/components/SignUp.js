import React, { Component } from 'react';
import { Button,FormControl, } from 'react-bootstrap';
import '../style/SignUp.css';
import {Link} from 'react-router-dom';

class SignUP extends Component {
  render() {
    return (
    	<div className="Sign-up" >

	     	<div className=" input-box" >
	     	<h1>These Days</h1>
	        <FormControl className=" id-input"
	                type="text"
	                placeholder="Enter ID"
	        />
	        <FormControl className=" pwd-input"
	                type="password"
	                placeholder="Enter PWD"
	         />
	        <FormControl className="pwd-confirm-input"
	                type="password"
	                placeholder="Enter PWD"
	         />
	        <FormControl className="email-input"
	                type="email"
	                label="Email address"
	                placeholder="email"
	         /> 
	         <Button className="email-confirm">인증</Button>
	         <FormControl className="lifemoto"
	                type="text"
	                label="Email address"
	                placeholder="motto for life"
	         />

	         <Button className="sign-up-btn"><Link to="/Home">회원가입</Link></Button>
	         
	      </div>
      </div>
    );
  }
}

export default SignUP;
