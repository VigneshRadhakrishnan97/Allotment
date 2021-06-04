import {combineReducers} from 'redux'
import { reducer } from "./Reducer";

export default combineReducers({ status: reducer });