const initialState = {}

export default function getuserReducer(state = initialState, action) {
    switch (action.type) {
        case 'GET_AUTH_ACTION':
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