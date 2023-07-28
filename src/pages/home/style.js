import {styled} from "styled-components";
export const HomeWrapper = styled.div`
  	//overflow:hidden;
	width: 930px;
  	margin: 0 auto;
`;
export const HomeLift = styled.div`
    float:left;
	width: 625px;
  	margin-left: 15px;
	padding-top: 30px;
  	height: 240px;
  .banner-img{
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
	width: 240px;
  	float: right;
`;
export const TopicWrapper = styled.div`
  	overflow: hidden;
	padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  margin-left: 18px;
  padding-right: 10px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border:1px solid #dcdcdc;
  border-radius: 4px;
  .topic-pic{
    display: block;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`

export const ListItem = styled.div`
  // @overflow:hidden 在什么场景使用溢出隐藏。
  overflow:hidden;
	padding: 20px 0;
	border-bottom: 1px solid #dcdcdc;
  // @为什么 不选择使用 标签选择器，而使用 类选择器
  .pic{
	  width: 125px;
    height: 100px;
    display: block;
    float: right;
    border-radius: 10px;
    // @把行内元素 转为 块级元素 ，这样转带来好处，不转发生什么？
    // 不转发生什么？ 它没有可设置的宽高,宽高由图片的尺寸决定
  }
`
export const ListInfo = styled.div`
	width: 500px;
  	float: left;
  .title{
    // @line-height属性干嘛的？设置行高，行高为什么，文本进行居中（什么水平居中，什么垂直居中）
    color: #333;
    font-weight: bold;
    font-size:18px ;
    line-height: 27px;
    .desc{
      font-size:13px;
      color: #999;
      line-height: 24px;
    }
  }
`
export const RecommedWrapper = styled.div`
	margin: 30px 0;
  	width: 280px;
`
export const RecommedItem = styled.div`
	width: 280px;
  	height: 50px;
  //  @background: url(${(props)=>props.imgUrl});怎么理解
  
  background: url(${(props)=>props.imgUrl});
  background-size: contain;
`
export const WriterWrapper = styled.div`
	width: 280px;
  	height: 300px;
  border: 1px solid #dcdcdc;
  border-radius: 3px;
  //line-height: 300px;
  //text-align: center;
  
`
export const WriterInfoTitle = styled.div`
  font-size: 14px;
  color: #969696;
`
export const WriterInfoSwitch=styled.div`
  float: right;
  display: inline-block;
  font-size: 14px;
  color: #969696;
`
export const WriterInfoList= styled.div`

`
export const LoandMore =styled.div`
  cursor: pointer;
	height: 40px;
	line-height: 40px;
  margin: 30px 0;
  width: 100%;
  border-radius: 20px;
  background-color: #a5a5a5;
  text-align: center;
  color: #fff;
`