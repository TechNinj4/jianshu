import React,{Component} from "react";
import {RecommedWrapper,RecommedItem} from "../style";
import {connect} from "react-redux";

class Recommed extends Component{
	render(){
		const {list} = this.props;
		return <RecommedWrapper>
			{
				list.map((item)=>{
					return <>
						<RecommedItem  imgUrl={item.get('imgUrl')} key={item.get('id')}/>
						<RecommedItem  imgUrl={item.get('imgUrl')} key={item.get('id')}/>
					</>
				})
			}

		</RecommedWrapper>
	}
}
// @get、set使用方法
const mapStateToProps = (state)=>({
	list: state.get('home').get('recommedList')
})

export default connect(mapStateToProps,null)(Recommed);