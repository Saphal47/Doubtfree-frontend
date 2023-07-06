const initialState = {}
export default function getdoubtsReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_DOUBTS_ACTION':
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