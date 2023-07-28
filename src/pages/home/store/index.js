import reducer from "./reducer";
import * as actionCreators from "./actionCreators";

export {reducer,actionCreators}

// import reducer from "./reducer" 这行代码表明./reducer是一个相对路径，
// 它会导入名为reducer的默认导出。
// 同时，export {reducer} 表示将这个默认导出重新导出，
// 使得其他地方可以通过import {reducer} from '...'的方式来访问它。