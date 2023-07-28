import React,{Component} from "react";
import {HomeWrapper, HomeLift, HomeRight} from "./style";
import List from "./components/List";
import Writer from "./components/Writer";
import Recommed from "./components/Recommed";
import Topic from "./components/Topic";
import {connect} from "react-redux";
import {actionCreators} from "./store";

class Home extends Component{
	render(){
		return <HomeWrapper>
			<HomeLift className="banner-img">
				<img src="" alt=""/>
				<Topic/>
				<List />
			</HomeLift>
			<HomeRight>
				<Recommed/>
				<Writer/>
			</HomeRight>
		</HomeWrapper>
			}
	componentDidMount(){
		// axios.get('https://www.fastmock.site/mock/7b752a6ec345c8982a620e605844efba/api/homeList.json').then(
		// 	(res)=> {
		// 		console.log("123")
		// 		const result = res.data.data;
		// 		console.log(result);
		// 		const action = {
		// 			type: 'change_home_data',
		// 			topicList: result.topicList,
		// 			articleList: result.articleList,
		// 			recommedList: result.recommedList
		// 		}
		// 		this.props.ChangeHomeData(action);
		// 		// @调用者决定this指向
		// 	})
		this.props.ChangeHomeData();
	}
}
const mapDispatchToProps = (dispatch)=>({
	ChangeHomeData(){
		// const action = actionCreators.getHomeInfo();
		dispatch(actionCreators.getHomeInfo())
		// axios.get('https://www.fastmock.site/mock/7b752a6ec345c8982a620e605844efba/api/homeList.json').then(
		// 	(res)=> {
		// 		console.log("123")
		// 		const result = res.data.data;
		// 		console.log(result);
		// 		const action = {
		// 			type: 'change_home_data',
		// 			topicList: result.topicList,
		// 			articleList: result.articleList,
		// 			recommedList: result.recommedList
		// 		}
		// 		dispatch(action);
		// 		// this.props.ChangeHomeData(action);
		// 		// @调用者决定this指向
		// 	})
	}
})

export default connect(null,mapDispatchToProps)(Home);