import React from 'react'
import axios from 'axios'
import '../styles/Login.css'

const Login = () => {

    const handleSubmit = async(e) => {
        e.preventDefault();
        const formData = {
            email: e.target.email.value,
            password: e.target.password.value
        }
        try{
            const res = await axios.post('http://localhost:5000/login',formData,{
                withCredentials:true,
            });
            localStorage.setItem('username', res.data.name);
            alert(res.data.message);
        }
        catch(error){
            console.log("something went wrong");
        }
    }

    return (
        <div className='login-container'>
            <div className='login-box'>
                <h1 className='transparent'>Login</h1>
                <form onSubmit={handleSubmit} className='login-form' action="" method="get">
                    <div className='transparent'>
                        <input required type="email" name="email" id="email" placeholder='Enter e-mail ...' />
                    </div>

                    <div className='transparent'>  
                        <input required type="password" name="password" id="password" placeholder='Enter password ...' />
                    </div>
                    <button className='login-btn' type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Login
