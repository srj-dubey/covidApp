//It is a Store

//default imports
import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"

//reducers imports
import rootReducer from './Reducers/rootReducer'

const store = createStore(
    rootReducer,
	{},
	applyMiddleware(thunk)
	// window.devToolsExtension && window.devToolsExtension(),
)

export default store
