//Root Reducer
//combines all the reducers

import { combineReducers } from "redux"

//reducers imports
import indiaReducer from './indiaReducer.js'

export default combineReducers(
    {
		india : indiaReducer
    }
)
