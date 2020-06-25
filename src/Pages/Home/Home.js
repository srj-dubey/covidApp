import React from 'react'
import { useState, useEffect } from 'react'

import './Home.css'

//redux
import { useSelector, useDispatch } from 'react-redux'

//route
import { Switch, Redirect, Link, Route } from 'react-router-dom'

//actions
import { getIndia } from '../../Actions/India/cases.js'

//media

//components
import India from './components/India/India.js'
import Featured from './components/Featured/Featured.js'
import States from './components/States/States.js'

const Home = (props) => {

	const data = useSelector((state) => state.india)
	const dispatch = useDispatch()

	useEffect(() => {
			dispatch(getIndia()) 
		},
		[]
	)

	return (
		<div className="home--container">
			<div className="home--main--container">
				<India data={data.allIndiaData}/>
			</div>
			<div className="home--featured--wrap">
				<Featured />
			</div>
			<div className="home--states--wrap">
				<States data={data.states} />
			</div>
		</div>
	)

}


export default Home

