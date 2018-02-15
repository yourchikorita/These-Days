import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../reducer';
import SignIn from './presenter';

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
		login:bindActionCreators(actionCreators.login,dispatch),
		logout:bindActionCreators(actionCreators.logout, dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(SignIn);