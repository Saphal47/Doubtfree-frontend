import getuser from '../../actions/getuser';
import VERIFY_AUTH from '../../actions/verfiy';


import axios from "axios"

export async function RegisterUserService(formData, dispatch) {
    let msg = "Invalid Crediationals";
    const headers = {
        'Content-Type': 'multipart/form-data'
    };
    const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/signup`, formData, { headers });
    console.log(res);
    if (res.data.error == "Empty fields") {
        console.log(res);
        msg = "Empty fields";
    } else if (res.data.message === "User already Exist.") {
        console.log(res);
        msg = "User already Exist."
    } else if (res.data.message === "Something went worng..." || res.data.message === "Error during user creation.") {
        console.log(res);
        msg = "Error 500";
    } else {
        dispatch(getuser(res.data));
        dispatch(VERIFY_AUTH({ isLoggedIn: true }))
        msg = "Logged In";
    }
    return msg;
}