import {connect} from 'react-redux';
import Home from './presenter';
//dispatch 는 액션을 리듀서로 보내느 펑션
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
export default connect(mapStateToProps)(Home);