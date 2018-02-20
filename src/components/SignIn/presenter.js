import React, { Component } from 'react';
import { Button,FormControl } from 'react-bootstrap';
import '../../style/SignIn.css';
import { Link} from 'react-router-dom';
import firebase from 'firebase';
import fire from  '../../fire';

class SignIn extends Component {

  render() {
    console.log('in signin presenter',this.props);
    return (
      <div className="SignIn">
        <div className="SignIn Container" >
         <h1>These Days</h1>
            <div className="SignIn buttons">
                {
                  (this.props.isLogin === true) ?
                  <Button><Link to="/home">홈페이지가기</Link></Button> :  
                  <Button onClick={this.props.onGoogleLogin} > 로그인 </Button>
                } 
            </div>
        </div>
      </div>
    );
  }
}

export default SignIn;

