import axios from "axios";
import getdoubts from "../../actions/getdoubts";


export async function GetDoubtsService(dispatch) {
    const headers = {
        'Content-type': "Application/json"
    }
    const res = await axios.get(`${process.env.REACT_APP_API_ENDPOINT}/getallques`, { headers });
    console.log(res);
    if (res.error) {
        console.log(res.data);
    } else {
        console.log(res)
        dispatch(getdoubts(res.data));
    }
}