const getdoubts = (doubts) => dispatch => {
    dispatch({
        type: 'GET_DOUBTS_ACTION',
        payload: doubts
    })
}

export default getdoubts;