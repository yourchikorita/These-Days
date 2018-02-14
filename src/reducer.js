//import

//Actions
const LOGIN = 'LOGIN';
const LOGOUT='LOGOUT';

//Action Creators
function login(){
	return{
		type:LOGIN
	}
}

function logout(){
	return{
		type:LOGOUT
	}
}

//Reducer
const initialUserName = 'who';

const initialState ={
	isLogin : false,
	currentUserName : initialUserName,
	listOpenDiary : 'this is open diary'
}

function reducer(state=initialState,action){
	switch(action.type){
		case LOGIN:
			return applyLogin(state);
		case LOGOUT:
			return applyLogout(state);
		default:
		return state;
	}
}
//Reducer Functions
function applyLogin(state){
	return{
		...state,
		isLogin:true,
		currentUserName : 'login eunjeong'

	}
}
function applyLogout(state){
	return{
		...state,
		isLogin:false,
		currentUserName:initialUserName
	}
}
//Export Action Creators
export const actionCreators = {
	login,
	logout
}
//Export Reducer
export default reducer;