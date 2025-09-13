import React from 'react'
import '../styles/Login.css'

const Login = () => {

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(e.target.email.value);
        console.log(e.target.password.value);
    }

    return (
        <div className='login-container'>
            <div className='login-box'>
                <h1>Login</h1>
                <form onSubmit={handleSubmit} className='login-form' action="" method="get">
                    <label>
                        E-mail :
                        <input type="email" name="email" id="email" />
                    </label>
                    <label >
                        Password :
                        <input type="password" name="password" id="password" />
                    </label>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login
