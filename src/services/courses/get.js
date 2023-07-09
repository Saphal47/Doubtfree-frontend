import axios from "axios";
import getcourses from '../../actions/getcourses';


export async function GetAllCourseService(dispatch) {
    const headers = {
        'Content-type': "Application/json"
    }
    const res = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/courses/all`, { headers });
    console.log(res);
    if (res.error) {
        console.log(res.data);
    } else {
        console.log(res)
        dispatch(getcourses(res.data));
    }
}