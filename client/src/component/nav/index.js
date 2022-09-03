import {Link} from "react-router-dom";
import NavStyles from "./nav.module.css"
import {connect} from "react-redux"
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux"
import {LOGOUT} from "../../constants/actionsTypes"
function Nav(props) {
    const dispatch = useDispatch();
    const [authenticated,
        setAuthenticated] = useState(false)
    const [user,
        setUser] = useState({})

    useEffect(() => {
        if (props.auth.authData) {
            setAuthenticated(true)
            setUser(props.auth.authData.result)
        } else {
            setAuthenticated(false)
            setUser({})
        }
    }, [props.auth])

    function handleLogOut(e) {
        e.preventDefault()

        dispatch({type: LOGOUT})
    }
    return (
        <nav className={NavStyles.navbar}>
            <div>
                <Link className={NavStyles.navBrandName} to={"/"}>
                    <h1 >Sense55</h1>
                </Link>
            </div>
            <div>

                {authenticated
                    ? <div className={`${NavStyles.iconContainer}`}>
                            <i
                                data-toggle="tooltip"
                                title="Account/Login"
                                data-placement="top"
                                className={` fa-solid fa-user`}></i>

                            <div className={`${NavStyles.accountLS}`}>
                                <p>Account</p>
                                <Link className={`${NavStyles.linkNav}`} to="/account/login">Profile</Link>
                                <span className={NavStyles.or}>or</span>
                                <Link onClick={handleLogOut} className={`${NavStyles.linkNav}`} to="/">Logout</Link>
                            </div>
                        </div>

                    : <div className={`${NavStyles.iconContainer}`}>

                        <Link className={`${NavStyles.navIcon} `} to="/account/login">
                            <i
                                data-toggle="tooltip"
                                title="Account/Login"
                                data-placement="top"
                                className={` fa-solid fa-user`}></i>
                        </Link>

                        <div className={`${NavStyles.accountLS}`}>
                            <p>Account</p>
                            <Link className={`${NavStyles.linkNav}`} to="/account/login">Login</Link>
                            <span className={NavStyles.or}>or</span>
                            <Link className={`${NavStyles.linkNav}`} to="/account/signup">Signup</Link>
                        </div>
                    </div>
}

            </div>
        </nav>
    )
}

const mapStateToProps = state => ({auth: state.auth});

export default connect(mapStateToProps)(Nav);