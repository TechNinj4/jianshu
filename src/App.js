import React,{Component} from "react";
import Header from "./common/Header";
import {Provider} from "react-redux";
import store from "./store";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from "./pages/home";
import Detail from "./pages/detail";
// @BrowserRouter、Routes、Route扮演什么角色，用途了，帮你解决什么问题。
class App extends Component{
	render() {
		return<Provider store={store}>
					<Header />
					<BrowserRouter>
						<Routes>
							<Route path="/" element={<Home />} />
							<Route path="/detail" element={<Detail />} />
						</Routes>
					</BrowserRouter>
		</Provider>
	}
}
export default App;

// <Route path="/" exact component={<Home/>} />
// <Route path="/detail" exact component={<Detail/>} />
// <Route
// 	path="/detail"
// 	render={() => <div>Detail Page</div>}
// />