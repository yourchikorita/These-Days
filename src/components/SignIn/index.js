import {connect} from 'react-redux';
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
export default connect(mapStateToProps)(SignIn);