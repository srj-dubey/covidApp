import React from 'react'

import './News.css'

const News = (props) => {

	return (
		<div className="featured--news--container">
			<div className="featured--news--image--container">

			</div>
			<div className="featured--news">
				<div className="featured--news--heading">
					<h2>
						{props.data.headline}
					</h2>
				</div>
			</div>
		</div>
	)

}

export default News