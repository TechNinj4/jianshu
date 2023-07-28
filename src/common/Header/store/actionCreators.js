//import {constants} from "./index";
import * as constants from "./constants";
import axios from  'axios';
import {fromJS} from "immutable";

export const searchFOCUSED =()=>({
	type:constants.SEARCH_FOCUSED
});
export const searchBLUR =()=>({
	type:constants.SEARCH_BLUR
});
export const changeList = (data)=>({
	type:constants.CHANGE_LIST,
	data:fromJS(data),
	totalPage:Math.ceil(data.length / 10)
})
export const mouseEnter =()=>({
	type:constants.MOUSE_ENTER,
})
export const mouseLeave =()=>({
	type:constants.MOUSE_LEAVE,
})
export const handleChangePage =(page)=>({
	type:constants.CHANGE_PAGE,
	page
})
export const getList =()=>{
	return (dispatch)=>{
		axios.get('https://www.fastmock.site/mock/7b752a6ec345c8982a620e605844efba/api/headerList')
			.then((res)=>{
			const data = res.data;
			const action = changeList(data.data);
			console.log(data.data);
			dispatch(action);
		}).catch(()=>{console.log('error');})
	}
}