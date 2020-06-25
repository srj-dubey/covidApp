import React from 'react'

import './SmallStats.css'

//redux
import { useSelector } from 'react-redux'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//media

//components
import Loading from '../../../../../ToolBox/Loading/Loading.js'

const SmallStats = (props) => {

	if(props.data === null) {
		return (
			<div className="common--smallStats--container--skeleton">
				<Loading />
			</div>
		)
	}

	return (
		<div 
			style={{'backgroundImage': 'linear-gradient(140deg, ' + props.background[0] + ' 0%, ' + props.background[1] + ' 100%)'}}
			className="common--smallStats--container"
		>
			<div className="common--smallStats--heading--container">
				<div
					style={{'color': props.color}} 
					className="common--smallStats--heading--icon"
				>
					<FontAwesomeIcon icon={props.icon} />
				</div>
				<div className="common--smallStats--heading">
					<h6>{props.data}</h6>
					<h2>{props.heading}</h2>
				</div>
			</div>
		</div>
	)

}


export default SmallStats
