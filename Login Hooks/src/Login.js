import { useState } from 'react'
import Success from './Success'
import Fail from './Fail'


function Login(props) {
    //Manually set the check for user name and password.
    const userCheck = 'melo';
    const passCheck = '098';

    //User input is stored from value of inputs
    const [userName, setUsername] = useState("")
    const [password, setPassword] = useState("")

    //showLogin will show the message for validation
    const [showLogin, setShowLogin] = useState("")


    function handleLogin(event)
    {
        event.preventDefault()

        //checking the input value is equal to user and pass check
        if (userName === userCheck && password === passCheck)
        {
            setShowLogin(<Success userCheck={userName}/>)
        }
        else 
        {
            setShowLogin(<Fail />)
        }
    }
    function handleChangeName(event)
    { 
        setUsername(event.target.value)
    }
    function handleChangePw(event)
    { 
        setPassword(event.target.value)
    }
    
    return(
        <div id="main">
            <form onSubmit = {handleLogin}id="login">
                <div>
                <label> 
                    <input id="userName" type="text" placeholder="Username" onChange={handleChangeName}/>
                </label>
                </div>
                <div>
                <label> 
                    <input id="password" type="text" placeholder="Password" onChange={handleChangePw}/>
                </label>
                </div>
                <button>Login</button>
                <div> {showLogin} </div>
            </form>
           
        </div>
    )
}


export default Login
