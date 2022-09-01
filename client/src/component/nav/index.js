import {Link} from "react-router-dom";
import NavStyles from "./nav.module.css"
import {connect} from "react-redux"
import {useEffect, useInsertionEffect, useState} from "react";
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

    function handleLogOut(e){
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
                <span className={`${NavStyles.username}`}>{authenticated
                        ? `${user.firstName} ${user.lastName}`
                        : null}</span>

                {authenticated
                    ? <Link onClick={handleLogOut}
                            data-toggle="tooltip"
                            title="Logout"
                            data-placement="left"
                            className={`${NavStyles.logoutBtn}`}
                            to="/">
                            <i class="fa-solid fa-right-from-bracket"></i>
                        </Link>
                    : <Link className={`${NavStyles.navIcon} `} to="/login">
                        <i
                            data-toggle="tooltip"
                            title="Account/Login"
                            data-placement="top"
                            className={` fa-solid fa-user`}></i>
                    </Link>}

            </div>
        </nav>
    )
}

const mapStateToProps = state => ({auth: state.auth});

export default connect(mapStateToProps)(Nav);