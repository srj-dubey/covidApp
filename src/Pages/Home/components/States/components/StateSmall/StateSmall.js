import React from 'react'

import './StateSmall.css'

const StateSmall = (props) => {

	return (
		<div className="home--states--stateSmall--container">
			<div className="home--states--stateSmall--heading">
				<h2>
					{props.data.loc}
				</h2>
			</div>
			<div className="home--states--stateSmall--contentt">
				<p>
					{props.data.totalConfirmed}
				</p>
			</div>
		</div>
	)

}

export default StateSmall