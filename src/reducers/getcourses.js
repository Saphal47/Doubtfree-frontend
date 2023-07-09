const initialState = {}
export default function getcoursesReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_COURSES_ACTION':
            if (action.payload == null) {
                return state
            }
            return {
                result: action.payload
            }
        default:
            return state
    }
}