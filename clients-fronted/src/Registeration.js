import React ,{useState}from 'react'
import { Alert } from 'reactstrap'
import Login from './Login'

function Registeration() {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [phone, setPhone] = useState("")
    const [flag, setFlag] = useState(false)
    const [login, setLogin] = useState(true)

    function handleSubmit(e) {
        e.preventDefault();
        if(!name||!email || !password || !phone)   {
            setFlag(true)
        }
        else {
            setFlag(false)
            localStorage.setItem("Email",JSON.stringify(email))
            localStorage.setItem("Password",JSON.stringify(password))

            console.log("Saved in local  storage")
            setLogin(!login)
            
        }
    }
    function handleClick (){
        setLogin(!login)
    }
  return (
    <div>
        {login ? (
        <form onSubmit={handleSubmit}>
            <h1>Register</h1>
            <div className='form-group'>
                <label>NAME</label>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Enter Full Name '
                    onChange={(event) =>   setName(event.target.value)}
                />
            </div>
            <div className='form-group'>
                <label>Email</label>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Enter Email'
                    onChange={(event) =>   setEmail(event.target.value)}

                />
            </div>
            <div className='form-group'>
                <label>Password</label>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Enter Password'
                    onChange={(event) =>   setPassword(event.target.value)}

                />
            </div>
            <div className='form-group'>
                <label>Phone</label>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Enter Phone'
                    onChange={(event) =>   setPhone(event.target.value)}

                />
            </div>
            <button type='submit' className='btn btn-dark btn-lg btn-block'> Register </button>
            <p onClick={handleClick}>Alreay registered {" "} login in ? </p>

            {flag && (
                <Alert color='primary' variant='danger'>
                    Please Fill Every Field
                </Alert>
            )}
        </form>
        ):(
            <Login/>
            )}
    </div>
  )
}

export default Registeration