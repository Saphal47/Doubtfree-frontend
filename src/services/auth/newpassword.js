import axios from "axios"

export async function NewPasswordService(password, token) {
    let msg = "Link Expired!";
    const headers = {
        'Content-Type': 'application/json'
    };
    const res = await axios.post(`${process.env.REACT_APP_API_ENDPOINT}/new-password`, { password, token }, { headers });
    console.log(res);
    if (res.data.error) {
        console.log(res.data);
        msg = res.data.error;
    } else {
        msg = res.data.message;
    }
    return msg;
}