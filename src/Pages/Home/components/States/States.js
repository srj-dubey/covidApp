import React from 'react'
import { useState } from 'react'

import './States.css'

//redux
import { useSelector } from 'react-redux'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVirus, faBiohazard, faSmile, faViruses } from '@fortawesome/free-solid-svg-icons'

//media

//components
import Loading from '../../../../ToolBox/Loading/Loading.js'
import StateSmall from './components/StateSmall/StateSmall.js'

const States = (props) => {

	const [moreActive, setMoreActive] = useState(false)
	let states = null

	//creating states after successful fetch
	if(props.data != null) {
		states = props.data.map((value, index) => {
			return (
				<StateSmall 
					data = {value}
					key = {index}
				/>
			)
		})
	}

	return (
		<div className="home--states--container">
			<div className="home--states--heading">
				<h1>
					Regional
				</h1>
			</div>
			<div
				className="home--states"
				style = {(!moreActive) ? {'height' : '300px'} : {'height' : 'auto'}}
			>
				{(props.data != null) ? (states) : (
					<div className="home--states--loading">
						<Loading />
					</div>
				)}
			</div>
			{(props.data != null) ? (
				<div className="home--states--moreButton">
					<button onClick = {() => {setMoreActive(!moreActive)}}>
						{(!moreActive) ? "Show all" : "Show less"}
					</button>
				</div>
			) : null}
		</div>
	)

}

export default States
