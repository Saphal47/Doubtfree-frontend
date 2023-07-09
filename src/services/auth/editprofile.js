import getuser from '../../actions/getuser';
import VERIFY_AUTH from '../../actions/verfiy';
import axios from "axios"

export async function EditProfileService(formData, dispatch) {
    let msg = "Invalid Crediationals";
    const headers = {
        'Content-Type': 'multipart/form-data'
    };
    const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/update`, formData, { headers });
    console.log(res);
    if (res.error) {
        console.log(res.data);
        msg = "Some Error occurred.";
    } else {
        dispatch(getuser(res.data));
        dispatch(VERIFY_AUTH({ isLoggedIn: true }))
        msg = "Profile Edited";
    }
    return msg;
}