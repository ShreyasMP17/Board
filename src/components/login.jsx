import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login.css"

const Login = () => {


    let [email, setEmail] = useState("")
    let [password, setPassword] = useState("")

    let navigate = useNavigate()

    let handleClick = (e) => {
        e.preventDefault();

        let data = { email, password }

        fetch("http://localhost:3000/userdata", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data)
        })
        alert("Login Successfully")
        navigate("/dashboard")

    }

    return (
        <div class="main">
            <div class="left">
                <h1>Board.</h1>
            </div>
            <div class="right">
                <div class="up">
                    <h1>Sign In</h1>
                    <p>Sign in to your account</p>
                    <input type="text" placeholder="Sign in with Google" />
                    <input type="text" placeholder="Sign in with Apple " />
                </div><br />
                <div class="google">
                    <img src="images/google.png" alt="" height="20" width="20" />
                </div>
                <div class="apple">
                    <img src="images/apple.png" alt="" height="26" width="26" />
                </div>

                <div class="down">
                    <form action="" onSubmit={handleClick}>
                        <h6>Email address</h6>
                        <input type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <h6>Password</h6>
                        <input type="password" required="" placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} /><br />
                        <a href="" id="rig">Forgot password?</a><br /><br />
                        <button fdprocessedid="s5zo4">Sign In</button>
                    </form>
                </div>
                <div class="footer">
                    <p>Don't have an account?</p>
                    <a href="" id="rig">Register here</a>
                </div>
            </div>
        </div>

    );
}
export default Login;