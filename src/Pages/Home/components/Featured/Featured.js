import React from 'react'

import './Featured.css'

//redux
import { useSelector } from 'react-redux'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

//resources
import { featuredList } from './featuredList.js'

//components
import Loading from '../../../../ToolBox/Loading/Loading.js'
import News from './News/News.js'

const Featured = (props) => {

	const featured = featuredList.map((value, index) => {
		return (
			<News 
				data={value}
				key = {index}
			/>
		)
	})

	return (
		<div className="featured--container">
			<div className="featured--scrollWrap">
				{featured}
			</div>
		</div>
	)

}

export default Featured
