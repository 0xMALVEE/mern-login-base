import { Link, useNavigate  } from "react-router-dom";
import LoginStyles from "./login.module.css"
import {useGoogleLogin} from '@react-oauth/google';
import {useDispatch} from 'react-redux';
import {signinGoogle, signin} from "../../actions/auth";
import { useState } from "react";



function Login(){
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const navigate = useNavigate ()
    const dispatch = useDispatch()


    function handleGoogleLoginSuccess(tokenResponse) {

        const accessToken = tokenResponse.access_token;

        dispatch(signinGoogle(accessToken,navigate))
    }
    const login = useGoogleLogin({onSuccess: handleGoogleLoginSuccess});

    function handleSubmit(e){
        e.preventDefault();
        if(email !== "" && password !== ""){
            dispatch(signin({email,password}, navigate))
        }

    }

    return(
        <div className={LoginStyles.loginMain}>
            <div className={LoginStyles.loginContainer}>
                <h2 className={`text-center ${LoginStyles.wb}`}>Welcome Back</h2>

                <div>
                    <label className={LoginStyles.loginLable}>EMAIL</label>
                    <br/>
                    <input onChange={e=> setEmail(e.target.value)} className={LoginStyles.input} type="email" placeholder="Enter your email"/>
                </div>
                <div>
                    <label className={LoginStyles.loginLable}>PASSWORD</label>
                    <br/>
                    <input onChange={e=> setPassword(e.target.value)} className={LoginStyles.input} type="password" placeholder="Enter your password"/>
                </div>

                <div className={`${LoginStyles.remfor}`}>
                    <div>
                        <label htmlFor="loginCheckbox" className={LoginStyles.rem}>Remember Me</label>
                        
                        <input id="loginCheckbox" type="checkbox" value="Bike"/>
                    </div>
                    <div>
                        <Link className={`${LoginStyles.link}`} to={`forgot-password`}>Forgot Password?</Link>
                    </div>
                </div>

                <button onClick={handleSubmit} className={`${LoginStyles.loginButton}`}>Log in</button>
                <span className={`${LoginStyles.or}`}>or</span>
                <div id="google-btn" className={LoginStyles.googleLoginContainer}>
                    <button onClick={() => login()} className={`${LoginStyles.googleBtn}`}>
                        <i className="fa-brands fa-google"></i>
                        Login with Google</button>
                </div>

            

                <Link className={`${LoginStyles.sup}`} to="/account/signup">Sign up</Link>

            </div>
        </div>
    )
}

export default Login;