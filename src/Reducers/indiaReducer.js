
//action types imports
import { GET_ALL_INDIA } from '../Actions/types'

const initialState = {
	allIndiaData : {
		total : (localStorage.getItem('total')) ? localStorage.getItem('total') : null,
		foreign  : (localStorage.getItem('foreign')) ? localStorage.getItem('foreign') : null,
		death : (localStorage.getItem('death')) ? localStorage.getItem('death') : null,
		recovered : (localStorage.getItem('recovered')) ? localStorage.getItem('recovered') : null,
	},
	states : null
}

const indiaReducer = (state = initialState, action) => {
	switch (action.type) {

		// gets all of India
		case GET_ALL_INDIA:	    
			if(action.payload) {
				return {
					...state,
					allIndiaData : {
						total : action.payload.summary.total,
						foreign  : action.payload.summary.confirmedCasesForeign,
						death : action.payload.summary.deaths,
						recovered : action.payload.summary.discharged,
					},
					states : action.payload.regional
				}
			}
			else {
				return {
					...state,
				}
			}
		break;

		//default
		default:
			return state

    }
    return state;
}

export default indiaReducer