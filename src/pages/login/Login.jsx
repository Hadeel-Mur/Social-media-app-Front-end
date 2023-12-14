import "./login.scss"
import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import { AuthContext } from "../../components/context/AuthContext";

function Login() {

  const {login} = useContext(AuthContext);

  // const handleLogin = () => {
  //  login()
  // }

  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello there!</h1>
                <p>Welcome to <strong>Buzzlink</strong> community!</p>
                <span>Don't U have an account</span>
                <Link to="/register">
                <button>Register</button>
                </Link>
            </div>
            <div className="right">
             <h1>Login</h1>
             <form>
                <input type="text" placeholder="Username"/>
                <input type="password" placeholder="Password"/>
                <button >Login</button>
             </form>
            </div>
        </div>
    </div>
  )
}

export default Login