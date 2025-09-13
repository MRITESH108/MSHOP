import React from 'react'
import '../styles/SignUp.css'

const SignUp = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            password: e.target.password.value
        };

        console.log('Form Data:', JSON.stringify(formData, null, 2));
    }

    return (
        <div className='signup-container'>
            <div className='signup-box'>
                <h1 className='transparent'>SignUp</h1>
                <form onSubmit={handleSubmit} className='signup-form'>

                    <div className='transparent'>
                        <label className='transparent' htmlFor="name">
                            Full Name :
                        </label>
                        <input required type="text" name="name" id="name" placeholder='Enter Full Name ...' />
                    </div>

                    <div className='transparent'>
                        <label htmlFor="email" className='transparent'>
                        E-mail :
                    </label>
                    <input required type="email" name="email" id="email" placeholder='Enter e-mail ...' />
                    </div>

                    <div className='transparent'>
                        <label htmlFor="password" className='transparent required'>
                        Password :
                    </label>
                    <input required type="password" name="password" id="password" placeholder='Enter password ...' />
                    </div>

                    <div className='transparent'>
                        <button className='signup-btn' type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SignUp
