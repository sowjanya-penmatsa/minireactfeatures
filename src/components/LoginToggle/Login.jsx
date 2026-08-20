import { useState } from "react";
import LoginButton from "./LoginButton";

const Login=()=>{

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogin=()=>{
        setIsLoggedIn(!isLoggedIn)
    }

    return(
        <div>
          <h1>Login</h1>
          <p>Welcome</p>
          <p>{isLoggedIn ? "You are logged in" : "You are logged out"}</p>
         <LoginButton userStatus={isLoggedIn} handleLogin={handleLogin}/>
        </div>
    )
}
export default Login;