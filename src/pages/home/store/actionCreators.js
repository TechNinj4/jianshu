import axios from "axios";
import * as actiontypes from "./actiontype";
import {fromJS} from "immutable";
// 方便分类，易读性
const changehomedata = (result)=>({
	type: actiontypes.CHANGE_HOME_DATA,
	topicList: result.topicList,
	articleList: result.articleList,
	recommedList: result.recommedList
})
const changehomedatamore = (list,nextPage)=>({
	type: actiontypes.CHANGE_HOME_MORE,
	data: fromJS(list),
	nextPage
})
export const getHomeInfo = ()=>{
	return(dispatch)=>{
		axios.get('https://www.fastmock.site/mock/7b752a6ec345c8982a620e605844efba/api/homeList.json').then((res)=> {
				// console.log("123")
				const result = res.data.data;
				// console.log(result);
				const action = changehomedata(result);
			dispatch(action);
			})
	}
}
export const getMore = (page)=>{
	return(dispatch)=>{
		axios.get('https://www.fastmock.site/mock/7b752a6ec345c8982a620e605844efba/api/moreList'+page).then((res)=> {
			 // console.log(res.data); 异步请求 yes
				const list = res.data.data;
				// console.log(list); 副本
				const action = changehomedatamore(list,page + 1);
				console.log(action);
			   dispatch(action);
			})
	}
}