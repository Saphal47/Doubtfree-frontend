import { combineReducers } from 'redux';
import getcoursesReducer from '../reducers/getcourses';
import getprofileReducer from '../reducers/getprofile';
import getuserReducer from '../reducers/getuser';
import VERIFY_AUTH_Reducer from '../reducers/verify';
import getdoubtsReducer from '../reducers/getdoubts';


export default combineReducers({
    getcourses: getcoursesReducer,
    getprofile: getprofileReducer,
    getuser: getuserReducer,
    verify: VERIFY_AUTH_Reducer,
    getdoubts: getdoubtsReducer
});