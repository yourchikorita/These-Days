import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../reducer';
import SignIn from './presenter';
import firebase from 'firebase';
import fire from  '../../fire';

//connect는 store랑 components랑 연결해줌
//store에서 state를 복사해서 container에다 넣기

function mapStateToProps(state){
	const {
		isLogin,
		currentUserName,
		listOpenDiary
		} = state;
	return{
		isLogin,
		currentUserName,
		listOpenDiary
	};
}
//리듀서에 있는 펑션을  presenter에에다가 보내기
//왼쪽에 login,logout은 아무것으로도 지정할 수 있음 props이름임..
function mapDispatchToProps(dispatch){
	return{
		
		logout: bindActionCreators(actionCreators.logout, dispatch),
		onGoogleLogin: function () {
			var auth = fire.auth(); 
		    var provider = new firebase.auth.GoogleAuthProvider();
		    
		    auth.onAuthStateChanged(
		      (user)=>{
		        if(user) {
		          //성공했을때 실행!
	            console.log('succes=',user);
	            // console.log(user.providerData[0].displayName);
	            user.providerData.forEach( (profile) =>{
		            // console.log("!Sign-in provider: "+profile.providerId);
		            // console.log("  Provider-specific UID: "+profile.uid);
		            // console.log("  Name: "+profile.displayName);
		            // console.log("  Email: "+profile.email);
		            dispatch(actionCreators.loginSuccess(profile.email));
		            console.log('signin container 실행');
		       	            
		          });   
		        }else{
		          //팝업창 띄우기 로긴안됫을때 띄우기
		          auth.signInWithPopup(provider);
		        } 
		    });
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);