import {Link, useNavigate} from "react-router-dom";
import SignupStyles from "./signup.module.css"
import React, {useState} from "react"
import {useGoogleLogin} from '@react-oauth/google';
import {useDispatch} from 'react-redux';
import {signup, signupGoogle} from "../../actions/auth";

const iState = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
}

function Signup() {
    const nagivate = useNavigate();
    const dispatch = useDispatch();
    const [sForm,
        setsForm] = useState(iState)

    const handleChange = (e) => setsForm({
        ...sForm,
        [e.target.name]: e.target.value
    });

    function handleGoogleLoginSuccess(tokenResponse) {

        const accessToken = tokenResponse.access_token;

        dispatch(signupGoogle(accessToken,nagivate))
    }

    function handleOnSubmit(e) {
        e.preventDefault();
        if (sForm.firstName !== "" && sForm.lastName !== "" && sForm.password !== "" && sForm.confirmPassword !== "" && sForm.email !== "" && sForm.password === sForm.confirmPassword && sForm.password.length >= 4) {
            dispatch(signup(sForm,nagivate))
        }
    }

    const login = useGoogleLogin({onSuccess: handleGoogleLoginSuccess});
    return (
        <div className={SignupStyles.loginMain}>
            <div className={SignupStyles.loginContainer}>
                <h2 className={`text-center ${SignupStyles.wb}`}>Create your account</h2>
                <div>
                    <div>
                        <label className={SignupStyles.loginLable}>FIRST NAME</label>
                        <br/>
                        <input
                            name="firstName"
                            onChange={handleChange}
                            className={SignupStyles.input}
                            type="text"
                            placeholder="First Name"/>
                    </div>
                    <div>
                        <label className={SignupStyles.loginLable}>LAST NAME</label>
                        <br/>
                        <input
                            name="lastName"
                            onChange={handleChange}
                            className={SignupStyles.input}
                            type="text"
                            placeholder="Last Name"/>
                    </div>
                </div>
                <div>
                    <label className={SignupStyles.loginLable}>EMAIL</label>
                    <br/>
                    <input
                        name="email"
                        onChange={handleChange}
                        className={SignupStyles.input}
                        type="email"
                        placeholder="Enter your email"/>
                </div>
                <div>
                    <label className={SignupStyles.loginLable}>PASSWORD</label>
                    <br/>
                    <input
                        name="password"
                        onChange={handleChange}
                        className={SignupStyles.input}
                        type="password"
                        placeholder="Enter your password"/>
                </div>
                <div>
                    <label className={SignupStyles.loginLable}>CONFIRM PASSWORD</label>
                    <br/>
                    <input
                        name="confirmPassword"
                        onChange={handleChange}
                        className={SignupStyles.input}
                        type="password"
                        placeholder="Re-type your password"/>
                </div>

                <Link onClick={handleOnSubmit} className={`${SignupStyles.sup}`} to="/">Sign up</Link>
                <span className={`${SignupStyles.or}`}>or</span>

                <div id="google-btn">
                    <button onClick={() => login()} className={`${SignupStyles.googleBtn}`}>
                        <i className="fa-brands fa-google"></i>
                        Continue with Google</button>
                </div>

                <div className={`${SignupStyles.remfor}`}>
                    <div className={`${SignupStyles.sgal}`}>
                        <span>Already signed up?</span>
                        <Link className={`${SignupStyles.link}`} to={`/login`}>Login</Link>
                    </div>
                    <div>
                        <Link className={`${SignupStyles.link}`} to={`forgot-password`}>Forgot Password?</Link>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Signup;