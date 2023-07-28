// 通过常用名 使用字符串
// action统一管理，方便后期修改
// 不用找一一找action 定义 type:‘字符串’

//建立：
//命名空间
// （header）
// search_focused
// search_blur
export const SEARCH_FOCUSED ='header/search_focused';
export const SEARCH_BLUR = 'header/search_blur';
export const CHANGE_LIST = 'change_list';
export const MOUSE_ENTER = 'header/mouse_enter';
export const MOUSE_LEAVE = 'header/mouse_leave';
export const CHANGE_PAGE = 'header/change_page';
// 拆分动作 追求 避免代码冗余
// 统一管理 追求 代码编辑效率、维护
