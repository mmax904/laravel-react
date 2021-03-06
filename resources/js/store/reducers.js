import { combineReducers } from 'redux'
import {
    routerReducer
} from 'react-router-redux'

import auth from '../modules/auth/store/reduer'
import user from '../modules/user/store/reducer'
import articles from '../modules/article/store/reducer'

export default combineReducers({
	auth,
	user,
	articles,
	router: routerReducer 
})
