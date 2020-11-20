import { combineReducers } from 'redux'

import homeReducer from './home/homeReducer'
import loginReducer from './login/loginReducer'

export default combineReducers({
  home: homeReducer,
  auth: loginReducer,
})
