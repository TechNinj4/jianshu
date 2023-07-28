import { combineReducers } from 'redux-immutable';
import {reducer as HeaderReducer} from '../common/Header/store'
import  { reducer as homeReducer} from '../pages/home/store'
// 在路径中../是什么意思
// @为什么store目录下写reducer.js文件，什么因素导致可以不写。

//    / 代表根目录
//   ./ 代表当前目录
//  ../ 代表上一级目录
//  表示的是访问上一级目录,然后再进入指定的子目录。

const reducer = combineReducers({
	header: HeaderReducer,
	home: homeReducer
	// @可以使用 ES6 的简写方法,combineReducers({ counter, todos })与 combineReducers({ counter: counter, todos: todos }) 是等价的。
	// @等价，为什么这样写
})
export default reducer;
// reducer的拆分动作
// redux的API：用combineReducers进行合并或者说核对
// 通过变量名调用函数

