import React,{Component} from "react";
import {TopicWrapper,TopicItem} from "../style";
import {connect} from "react-redux";
class Topic extends Component{
	render(){
		const {list} = this.props;

		return <TopicWrapper>
			{
				list.map((item)=>{
					return(
						<TopicItem key={item.get('id')}>
							<img src={item.get('imgUrl')} className='topic-pic'/>
							{item.get('title')}
						</TopicItem>
					)
				})
			}
		</TopicWrapper>
	}
}
// @逆向核查（从结果查）、正向核查（源头查）
// 未获得state
// list: this.state.get('home').get('topicList')
// @ ？ 连接之后，return给谁？self:Topic.
const mapStateToProps=(state)=>({
	list: state.get('home').get('topicList')
})
export default connect(mapStateToProps,null)(Topic);