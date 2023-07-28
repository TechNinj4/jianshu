import React,{Component} from "react";
import {WriterWrapper,WriterInfoTitle,WriterInfoSwitch,WriterInfoList} from "../style";

class Writer extends Component{
	render(){
		return <WriterWrapper>
			<WriterInfoTitle>
				推荐作者
				<WriterInfoSwitch>换一批</WriterInfoSwitch>
			</WriterInfoTitle>
			<WriterInfoList></WriterInfoList>
		</WriterWrapper>
	}
}

export default Writer;