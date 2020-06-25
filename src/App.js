
import React from 'react';
import { lazy, Suspense } from 'react';
import './App.css';

//redux
import { Provider } from "react-redux"
import store from "./store.js"

//routing
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom"

//components
import Loading from './ToolBox/Loading/Loading.js'

// Dynamic Imports 
const Home = React.lazy(() => import('./Pages/Home/Home.js'))

const App = (props) => {
	
	return (
		<Provider store={ store }>
			<Router basename={process.env.PUBLIC_URL}>
				<Suspense fallback={<Loading />}>
					<Route exact path='/' component={Home} />
				</Suspense>
			</Router>
		</ Provider>
    )
	
}

export default App
