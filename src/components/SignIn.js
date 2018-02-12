import React, { Component } from 'react';
import { Button,form,FormGroup,ControlLabel,FormControl,HelpBlock,Table,responsive } from 'react-bootstrap';
import '../style/SignIn.css';

import {
  BrowserRouter as Router,
  Route,
  Link,Switch
} from 'react-router-dom'

class SignIn extends Component {
  render() {
    return (
      <div className="SignIn">
        <div className="SignIn Container" >
         <h1>These Days</h1>
            <FormControl className="SignIn idInput"
                type="text"
                placeholder="Enter ID"
            />
            <FormControl  className="SignIn pwdInput"
                type="password"
                placeholder="Enter PWD"
            />
            <div className="SignIn buttons">
             <Button><Link to="/home">로그인</Link></Button>
            <Button><Link to="/sign-up">회원가입</Link></Button>
           
            <Button >Id/Pwd 찾기</Button>
            </div>

        </div>

      </div>
    );
  }
}

export default SignIn;
