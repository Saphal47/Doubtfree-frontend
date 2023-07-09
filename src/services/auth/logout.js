import getuser from "../../actions/getuser";
import VERIFY_AUTH from "../../actions/verfiy";

export function LogoutUser(dispatch) {
    dispatch(getuser({}));
    dispatch(VERIFY_AUTH({ isLoggedIn: false }))
    return;
}