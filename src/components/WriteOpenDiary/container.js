import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../reducer';
import WriteOpenDiary from './WriteOpenDiary';
import firebase from 'firebase';
//dispatch 는 액션을 리듀서로 보내느 펑션
//connect는 store랑 components랑 연결해줌
//store에서 state를 복사해서 container에다 넣기

function mapStateToProps(state){
	const {
		isLogin,
		currentUserName
		} = state;
	return{
		isLogin,
		currentUserName
		
	};
}
function mapDispatchToProps(dispatch){
	return{
		logout: bindActionCreators(actionCreators.logout, dispatch)	
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(WriteOpenDiary);