import axios from "axios"
import { GetAllCourseService } from "./get";

export async function DeleteCourseService(course_id, user_id, dispatch) {
    let msg = "Invalid Crediationals";
    const headers = {
        'Content-Type': 'application/json'
    };
    const formData = {
        course_id: course_id,
        user_id: user_id
    }
    const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/courses/delete`, formData, { headers });
    console.log(res);
    if (res.data.error) {
        console.log(res.data);
        msg = res.data.error;
    } else {
        GetAllCourseService(dispatch);
        msg = res.data.message;
    }
    return msg;
}