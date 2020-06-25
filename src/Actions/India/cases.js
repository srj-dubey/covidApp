
import { GET_ALL_INDIA } from '../types.js'

//api route
import { GET_ALL_INDIA_API } from '../../API/Routes/india.js'

export const getIndia = (values) => {

	return dispatch => {
		fetch(GET_ALL_INDIA_API)
		.then(
			function(res) {
				
				// failure
				if(res.status !== 200){
					console.log('Error in reciveing Quotes.')
					return
				}

				//success
				else {
					res.json()
					.then( res => {
						setLocal(res.data)
						dispatch({
							type : GET_ALL_INDIA,
							payload : res.data
						})
					})
				}
			}
		)
	}
	
}

const setLocal = (data) => {
	localStorage.setItem('total', data.summary.total)
	localStorage.setItem('foreign', data.summary.confirmedCasesForeign)
	localStorage.setItem('death', data.summary.deaths)
	localStorage.setItem('recovered', data.summary.discharged)
}

