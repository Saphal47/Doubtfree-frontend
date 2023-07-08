export async function ChangePasswordService(password, token) {
    // const { email, password, remembe } = values;
    let msg = "Invalid Crediationals";
    await fetch(`${process.env.REACT_APP_API_ENDPOINT}/change-password`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ newPassword: password, accessToken: token })
        })
        .then(response => response.json())
        .then(res => {
            // console.log(res);
            if (res.error) {
                console.log(res);
                msg = res.error;
            } else if (res.message) {
                console.log(res);
                msg = res.message;
            } else {

                msg = "Password Changes Successfuly";
            }
        })
        .catch(err => {
            console.log(err.message);
            msg = "Something went wrong";
        });
    return msg;
}