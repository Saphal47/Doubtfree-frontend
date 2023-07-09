import axios from "axios"

export async function ForgetPasswordService(email) {
    let msg = "Try Again sometimes later!";
    const headers = {
        'Content-Type': 'application/json'
    };
    const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/resetPassword`, { email }, { headers });
    console.log(res);
    if (res.data.error) {
        console.log(res.data);
        msg = res.data.error;
    } else {
        msg = res.data.message;
    }
    return msg;
}