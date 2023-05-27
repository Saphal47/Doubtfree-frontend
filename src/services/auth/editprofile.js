import getuser from '../../actions/getuser';
import VERIFY_AUTH from '../../actions/verfiy';
import axios from "axios"

export async function EditProfileService(formData, dispatch) {
    let msg = "Invalid Crediationals";
    const headers = {
        'Content-Type': 'multipart/form-data'
    };
    const res = await axios.post(`http://127.0.0.1:5000/update`, formData, { headers });
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