import React, { Component } from 'react';
import { Button,FormControl } from 'react-bootstrap';
import '../../style/SignIn.css';
import { Link} from 'react-router-dom';
import firebase from 'firebase';
import fire from  '../../fire';



class SignIn extends Component {


  onClickGoogleLogin(){  
    var auth = fire.auth();
    var provider = new firebase.auth.GoogleAuthProvider();
    auth.onAuthStateChanged(function(user){
    if(user) {
      //성공했을때 실행!
        console.log('succes=',user);
        // console.log(user.providerData[0].displayName);
 
        user.providerData.forEach(function (profile) {
        console.log("!Sign-in provider: "+profile.providerId);
        console.log("  Provider-specific UID: "+profile.uid);
        console.log("  Name: "+profile.displayName);
        console.log("  Email: "+profile.email);
        console.log("  Photo URL: "+profile.photoURL);

      });  
    }else{
      //팝업창 띄우기 로긴안됫을때 띄우기
      auth.signInWithPopup(provider);
    } 
   });
  }



  render() {
    console.log('in signin presenter',this.props);
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
                <Button onClick={() => this.onClickGoogleLogin()} >바로 google함수 이용</Button>
                {
                  (this.props.isLogin === true) ?
                  <Button><Link to="/home">홈페이지가기</Link></Button> :  
                  <Button onClick={this.props.login} > 로그인 상태로변경</Button>

                } 
            </div>
        </div>
      </div>
    );
  }
}

export default SignIn;

