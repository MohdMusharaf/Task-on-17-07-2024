import React, { useState } from 'react';

function LoginLogout(){
    const [login,setLogin] = useState("Login")
    let text = "Login"


const loginLogoutBtn =()=>{
    let infoLogin = document.getElementById("infoLogin")
    if(text === "Login"){
        infoLogin.textContent="Welcome User"
        text = "Logout"
        setLogin("Logout")
    }
    else{
        infoLogin.textContent="Please Login"
        text = "Login"
        setLogin("Login")
    }
}

return(
    <div className='loginlogout'>
      
       
       <h1 id='infoLogin'>Please Login</h1>
      <button onClick={loginLogoutBtn} className='btnButton'>{login}</button>
    </div>
)
}

export default LoginLogout;