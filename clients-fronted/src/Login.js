import React from 'react'
import { useState } from 'react'
import { Alert } from 'reactstrap';
import ClientList from './ClientList';
import Homes from './Homes';

function Login() {
    const [emailLog,setEmailLog] = useState("")
    const [passwordLog, setPasswordLog] = useState("");
    const [flag,setFlag ] = useState("false")
    const [home,setHome] = useState("true")

    function handleLogin (e) {
        e.preventDefault();
        let mail = localStorage.getItem("Email").replace(/"/g,"");
        let pass = localStorage.getItem("Password").replace(/"/g,"");

        if(!emailLog || !passwordLog ){
            setFlag(true)
            console.log("Empty");
        }
        else if (passwordLog !==pass || emailLog !== mail){
            setFlag(true)
        }else{
            setHome(!home)
            setFlag(false)
        }
    }
  return (
    <div>
        {home ? (
        <form onSubmit={handleLogin}>
        <h1>Login</h1>
            <div className='form-group'>
                <label>NAME</label>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Enter Email '
                    onChange={(event) =>   setEmailLog(event.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Enter Password'
                    onChange={(event) =>  setPasswordLog(event.target.value)}

                />

            </div>
            <button type='submit' className='btn btn-dark btn-lg btn-block'> Login </button>
            {flag && (
                <Alert color='primary ' variant= 'danger'>
                    please fill correct info 
                </Alert>
            )}
        </form>
        ):(
            <ClientList/>
        )}
    </div>
  )
}

export default Login