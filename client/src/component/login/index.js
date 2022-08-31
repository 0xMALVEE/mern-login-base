import { Link } from "react-router-dom";
import LoginStyles from "./login.module.css"

function Login(){
    return(
        <div className={LoginStyles.loginMain}>
            <div className={LoginStyles.loginContainer}>
                <h2 className={`text-center ${LoginStyles.wb}`}>Welcome Back</h2>

                <div>
                    <label className={LoginStyles.loginLable}>EMAIL</label>
                    <br/>
                    <input className={LoginStyles.input} type="email" placeholder="Enter your email"/>
                </div>
                <div>
                    <label className={LoginStyles.loginLable}>PASSWORD</label>
                    <br/>
                    <input className={LoginStyles.input} type="password" placeholder="Enter your password"/>
                </div>

                <div className={`${LoginStyles.remfor}`}>
                    <div>
                        <label for="loginCheckbox" className={LoginStyles.rem}>Remember Me</label>
                        
                        <input id="loginCheckbox" type="checkbox" value="Bike"/>
                    </div>
                    <div>
                        <Link className={`${LoginStyles.link}`} to={`forgot-password`}>Forgot Password?</Link>
                    </div>
                </div>

                <button className={`${LoginStyles.loginButton}`}>Log in</button>

                <span className={`${LoginStyles.or}`}>or</span>

                <Link className={`${LoginStyles.sup}`} to="/">Sign up</Link>

            </div>
        </div>
    )
}

export default Login;