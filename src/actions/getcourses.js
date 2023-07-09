const getcourses = (courses) => dispatch => {
    dispatch({
        type: 'GET_COURSES_ACTION',
        payload: courses
    })
}

export default getcourses;