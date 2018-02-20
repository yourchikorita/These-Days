import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {actionCreators} from '../../reducer';
import Home from './presenter';
import firebase from 'firebase';
//dispatch 는 액션을 리듀서로 보내느 펑션
//connect는 store랑 components랑 연결해줌
//store에서 state를 복사해서 container에다 넣기

function mapStateToProps(state){
	const {
		isLogin,
		currentUserName,
		diaryList
		} = state;
	return{
		isLogin,
		currentUserName,
		diaryList
	};
}
function mapDispatchToProps(dispatch){
	return{
		
		logout: bindActionCreators(actionCreators.logout, dispatch),
		onComponentMount: function () {
			const database = firebase.database();
		    const diaryRef = database.ref('/diary');
		    const diaryList = diaryRef.on('value', function (s) {
		    	dispatch(actionCreators.diaryListReady(s.val()));	
		    });
		    
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);