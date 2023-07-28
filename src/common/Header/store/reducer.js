import {SEARCH_FOCUSED, SEARCH_BLUR, CHANGE_LIST, MOUSE_ENTER, MOUSE_LEAVE,CHANGE_PAGE} from "./constants";
import {fromJS} from "immutable";
// fromJS 所扮演的角色是 state 的转换器。它把原始的 JavaScript 对象转换成不可变的 Immutable 对象。
const defaultState=fromJS({
	focused: false,
	mouseIn:false,
	list:[],
	page:1,
	totalPage:1
});
export default (state=defaultState,action)=>{
	switch (action.type){// switch
		case SEARCH_FOCUSED: return state.set('focused', true);// Immutable 对象的操作(set,get,update)都会返回一个新的对象,保证原始的 state 不会被修改。
		case SEARCH_BLUR: return state.set('focused', false);
		case CHANGE_LIST: return state.merge({list: action.data, totalPage:action.totalPage});
		case MOUSE_ENTER: return state.set('mouseIn', true);
		case MOUSE_LEAVE: return state.set('mouseIn', false);
		case CHANGE_PAGE: return state.set('page', action.page);
		default: return state
	}
}