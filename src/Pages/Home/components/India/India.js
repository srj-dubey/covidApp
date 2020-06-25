import React from 'react'

import './India.css'

//redux
import { useSelector } from 'react-redux'

// icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVirus, faBiohazard, faSmile, faViruses } from '@fortawesome/free-solid-svg-icons'

//media
import img1 from '../../../../assets/india.png'

//components
import SmallStats from '../misc/SmallStats/SmallStats.js'

const India = (props) => {

	let activeCases = null
	if(props.data.total != null) {
		activeCases = props.data.total - props.data.recovered
	}

	return (
		<div className="home--india--container">
			<div className="home--india--heading--container">
				<div className="home--india--heading--icon">
					<img src={img1} alt={'India'} />
				</div>
				<div className="home--india--heading">
					<h1>India</h1>
				</div>
			</div>
			<div className="home--india--main--wrap">
				<SmallStats
					heading={'Active'}
					data={activeCases}
					icon={faVirus}
					color={'#4a2269'}
					background={['#9b5bcce5', '#f6f3ff']}
				/>
				<SmallStats
					heading={'Recovered'}
					data={props.data.recovered}
					icon={faSmile}
					color={'#37aa5a'}
					background={['#7be2a9b2 ', '#FFFEFF']}
				/>
				<SmallStats
					heading={'Deaths'}
					data={props.data.death}
					icon={faBiohazard}
					color={'#963270'}
					background={['#e058ace5', '#f5efef']}
				/>
				<SmallStats
					heading={'Total'}
					data={props.data.total}
					icon={faViruses}
					color={'#a09a31'}
					background={['#f9f047c0', '#ffffff']}
				/>
			</div>
		</div>
	)

}


export default India
