import {Link} from "react-router-dom";
import NavStyles from "./nav.module.css"

function Nav() {
    return (
        <nav className={NavStyles.navbar}>
            <div>
                <Link className={NavStyles.navBrandName} to={"/"}>
                    <h1 >Sense55</h1>
                </Link>
            </div>
            <div>
                <Link className={`${NavStyles.navIcon} `} to="/login">
                    <i data-toggle="tooltip" title="Account/Login" data-placement="top" class={` fa-solid fa-user`}></i>
                </Link>
            </div>
        </nav>
    )
}

export default Nav;