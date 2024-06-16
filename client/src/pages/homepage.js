import {useContext} from "react";
import {AuthContext} from "../context/authContext";

function Homepage() {

    const {user, logout} = useContext(AuthContext)
    return (
        <>
            <h1>This is the homepage</h1>
            {
                user ?
                    <>
                        <h2>{user.email}</h2>
                    </>
                    :
                    <>
                        <h2>Guest Account</h2>
                    </>
            }
        </>
    )
}

export default Homepage;