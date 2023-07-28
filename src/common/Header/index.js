import React,{Component} from "react";
import { CSSTransition } from 'react-transition-group';
import {connect} from "react-redux";
import {HeaderWrapper, Logo, Nav, NavItem, NavSearch, Addition, Button, SearchWrapper, SearchInfo, SearchInfoTitle,SearchInfoSwitch,SearchInfoList,SearchInfoItem} from "./style";
import { actionCreators } from "./store";
// 两种现象（弄不懂和弄不清），
// 弄不清（没有理清思路、弄不清后遗症：就是写不出代码）
class Header extends Component{
	getListArea(){
		const {focused,list,page,totalPage,handleMouseEnter,handleMouseLeave,mouseIn,handleChangePage} = this.props;
		const pageList = [];
		const newList = list.toJS();
		// newList.length ？
		if(newList.length){
			for(let i = (page-1)*10;i<page*10;i++){
				pageList.push( //push是一个数组方法，用于将一个新元素添加到数组的末尾
					<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
				);
			}
		}
			if(focused || mouseIn){
				return(
					<SearchInfo onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
						<SearchInfoTitle>
							热门搜索
							<SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage,this.spinIcon)}>
								<span ref={(icon)=>{this.spinIcon = icon}} className="iconfont spin">&#xe851;</span>
								换一批</SearchInfoSwitch>
						</SearchInfoTitle >

						<SearchInfoList>
							{pageList}
						</SearchInfoList>
					</SearchInfo>
				)
			}
			else{
				return null;
			}
		}

	render() {
		return <HeaderWrapper>
			<Logo href='/'/>
			<Nav>
				<NavItem className='left active'>首页</NavItem>
				<NavItem className='left'>下载APP</NavItem>
				<NavItem className='left'>会员</NavItem>
				<NavItem className='left'>IT技术</NavItem>
				<SearchWrapper>
					<CSSTransition in={this.props.focused} timeout={200} classNames='slide'>
						<NavSearch className={this.props.focused ? 'focused':''}
						           onFocus={()=>this.props.handleInputFocused(this.props.list)}
						           onBlur={this.props.handleInputBlur}
						></NavSearch>
					</CSSTransition>
					<span className={this.props.focused ? 'focused iconfont zoom':'iconfont zoom'}>&#xe63a;</span>
					{this.getListArea()}
				</SearchWrapper>
				<NavItem className='right'>登录</NavItem>
				<NavItem className='right'><span className="iconfont">&#xe76a;</span></NavItem>
			</Nav>
			<Addition>
				<Button className='writing'><span className="iconfont">&#xe600;</span>写文章</Button>
				<Button className='reg'>注册</Button>
			</Addition>
		</HeaderWrapper>
	}
}

const mapStateToProps = (state)=>{
	return{
		// getIn 是一个用于从 Immutable.js 数据结构中获取值的方法。
		// getIn 是 Immutable.js 中的方法，用于从 Immutable 对象中获取嵌套属性的值。
		focused: state.getIn(['header','focused']),
		list: state.getIn(['header','list']),
		page: state.getIn(['header','page']),
		mouseIn: state.getIn(['header','mouseIn']),
		totalPage:state.getIn(['header','totalPage'])
	}
}
const mapDispatchToProps= (dispatch)=>{
	return{
		handleInputFocused(list){
			// const action = getList();
			if(list.size === 0){
				dispatch(actionCreators.getList());
			}
			// 通过常量调用函数和对象时，常量加圆括号。
			//const action = actionCreators.searchFOCUSED();
			dispatch(actionCreators.searchFOCUSED());
		},
		handleInputBlur(){
			//const action = actionCreators.searchBLUR();
			dispatch(actionCreators.searchBLUR());
		},
		handleMouseEnter(){
			dispatch(actionCreators.mouseEnter());
		},
		handleMouseLeave(){
			dispatch(actionCreators.mouseLeave());
		},
		handleChangePage(page,totalPage,spin){
			let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
				if(originAngle){
					originAngle = parseInt(originAngle,10);
				}else {
					originAngle = 0;
				}
				spin.style.transform = 'rotate('+(originAngle + 360)+'deg)';
			if(page<totalPage){
				dispatch(actionCreators.handleChangePage(page+1));
			}else{

				dispatch(actionCreators.handleChangePage(1));
			}
			// debugger;
			// dispatch(actionCreators.handleChangePage());

			// 这行代码 dispatch(actionCreators.handleChangePage());
			// 并没有传递参数，它只是调用了 actionCreators.handleChangePage，但没有指定具体的页码。
			// 在这种情况下，如果 dispatch(actionCreators.handleChangePage(page + 1));或 dispatch(actionCreators.handleChangePage(1));
			// 之前没有其他修改 actionCreators.handleChangePage 内部逻辑的代码，
			// 那么这行代码会覆盖前面的页码更新。
		}
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);

