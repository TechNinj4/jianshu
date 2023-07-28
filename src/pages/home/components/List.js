import React,{Component} from "react";
import {ListItem,ListInfo,LoandMore} from "../style";
import {connect} from "react-redux";
import {actionCreators} from "../store";

class List extends Component{
	render(){
		// @ JSX为什么{}，1、JSX返回一个根元素。<>{}</>, 2、 JSX引用东西要用{}，
		// JSX本身也是一种JavaScript语法扩展。所以要在JSX中引用JavaScript表达式或者变量,需要用{}包起来。
		const {list,getMore,page} = this.props;
		return<>{
			// @item代表谁？  //item的作用就是代表list数组中的每个元素
			// 是JavaScript表达式，,{}在JSX中有引用JavaScript代码的作用,
					list.map((item,index)=>{
						return  <ListItem key={index}>
							<img className='pic' src={item.get('imgUrl')} />
							<ListInfo>
								<h3 className='title'>{item.get('title')}</h3>
								<p className='desc'>{item.get('desc')}</p>
							</ListInfo>
						</ListItem>
					})
				}
				<LoandMore onClick={()=>getMore(page)}>阅读更多</LoandMore>
				</>
	}
}
const mapStateToProps = (state)=>({
	list: state.get('home').get('articleList'),
	page: state.get('home').get('articlePage')
})
const mapDispatchToProps = (dispatch)=>({
	getMore(page){
		dispatch(actionCreators.getMore(page));
	}
})
	// @ 为什么用箭头函数给mapStateToProps
	// @ ()=>({}),默认返回一个对象
	// @ ()=>{},这情况有返回值吗？
// ()=>{} 会隐式返回代码块的计算结果，没有默认返回，指定返回。
// ()=>({}) 会明确返回{}代码块对象本身,有默认返回
export default connect(mapStateToProps,mapDispatchToProps)(List);