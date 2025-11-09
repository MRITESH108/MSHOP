import React from 'react'
import axios from 'axios'
import '../styles/SignUp.css'

const SignUp = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = {
            name: e.target.name.value,
            email: e.target.email.value,
            address: e.target.address.value,
            contact: e.target.contact.value,
            password: e.target.password.value
        }
        try {
            const res = await axios.post('http://localhost:5000/signup', formData);
            alert(res.data);
        }
        catch (error) {
            console.log("something went wrong");
        }
    }

    return (
        <div className='signup-container'>
            <div className='signup-box'>
                <h1 className='transparent'>SignUp</h1>
                <form onSubmit={handleSubmit} className='signup-form'>

                    <div className='transparent'>
                        <input required type="text" name="name" id="name" placeholder='Enter Full Name ...' />
                    </div>

                    <div className='transparent'>
                        <input required type="email" name="email" id="email" placeholder='Enter e-mail ...' />
                    </div>

                    <div className="transparent">
                        <input type="text" name="address" id="address" placeholder='Enter your Address...' />
                    </div>
                    <div className="transparent">
                        <input type="tel" name="contact" id="contact" placeholder='Enter your contact Number...' />
                    </div>

                    <div className='transparent'>
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
