const LoginButton=(props)=>{
    return(
        <div>
         <button onClick={props.handleLogin}>{props.userStatus ? "Logout" : "Login"}</button>
        </div>
    )
}
export default LoginButton;