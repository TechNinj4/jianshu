import {fromJS} from "immutable";
// import * as actiontypes from "./actiontype";
import {CHANGE_HOME_DATA,CHANGE_HOME_MORE} from "./actiontype";

const defaultState = fromJS({
	topicList:[],
	articleList:[],
	recommedList:[],
	articlePage:1
});
// @ key 和 id 作用和用途，解决什么问题？
export default (state=defaultState,action)=>{
	switch (action.type){
		case CHANGE_HOME_DATA:
			return state.merge({
				topicList: fromJS(action.topicList),
				articleList: fromJS(action.articleList),
				recommedList: fromJS(action.recommedList)
			})
		case CHANGE_HOME_MORE: return state.merge({
			'articleList':state.get('articleList').concat(action.data),
			'articlePage':action.nextPage
		})
		default:return state;
		// concat追加
	}
}
// @immutable属性 ： immutable数组 ，如果赋予是普通数组，产生什么副作用
// @普通函数、箭头函数 符不符合  ES6 模块导入导出
//export default (state=defaultState,action)=>{
// 	switch (action.type){
//
// 		default:return state;
// 	}
// }