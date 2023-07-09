import axios from "axios"

export async function AddContentService(formData, dispatch) {
    let msg = "Invalid Crediationals";
    const headers = {
        'Content-Type': 'multipart/form-data'
    };
    const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/courses/addcontent`, formData, { headers });
    console.log(res);
    if (res.data.error) {
        console.log(res.data);
        msg = res.data.error;
    } else {
        msg = res.data.message;
    }
    return msg;
}