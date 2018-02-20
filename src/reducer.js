//import


//Actions
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGOUT='LOGOUT';
const DIARY_LIST_READY = 'DIARY_LIST_READY';

//Action Creators

function logout(){
	return{
		type:LOGOUT
	}
}

function loginSuccess (email) {
	return {
		type: LOGIN_SUCCESS,
		email: email
	};
}

function diaryListReady (diaryList) {
	return {
		type: DIARY_LIST_READY,
		list: diaryList
	};
}

//Reducer
const initialUserName = 'who';

const initialState = {
	isLogin : false,
	currentUserName : initialUserName,
	dairyList: {}
};


function reducer(state = initialState, action){
	switch(action.type){
		case LOGOUT:
			return applyLogout(state);
		case LOGIN_SUCCESS:
			return {
				isLogin: true,
				currentUserName: action.email
			};
		case DIARY_LIST_READY:
			return {
				...state,
				diaryList: action.list
			};
		default:
		return state;
	}
}



//Reducer Functions

function applyLogout(state){
	return{
		...state,
		isLogin:false,
		currentUserName: initialUserName
	}
}
//Export Action Creators
export const actionCreators = {
	diaryListReady,
	logout,
	loginSuccess
	
}
//Export Reducer
export default reducer;