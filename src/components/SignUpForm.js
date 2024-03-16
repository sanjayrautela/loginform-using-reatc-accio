

import React, { useState } from 'react'

const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [emailValid, setEmailValid] = useState(false);
    const [passwordValid, setPasswordValid] = useState(false);
    const [confirmPasswordValid, setConfirmPasswordValid] = useState(false);


    const handleEmailChange = (event) => {
        const { value } = event.target;
        setEmail(value);
        setEmailValid(validateEmail(value));
    };

    const handlePasswordChange = (event) => {
        const { value } = event.target;
        setPassword(value);
        setPasswordValid(value.length >= 8);
    };

    const handleConfirmPasswordChange = (event) => {
        const { value } = event.target;
        setConfirmPassword(value);
        setConfirmPasswordValid(value === password);
    }

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        if (emailValid && passwordValid && confirmPasswordValid) {
            alert('From Submitted successfully');
        }
        else {
            alert('can not submit the form');
        }
    };



    return (
        <div className='sign-up-form'>
            <h2>Create an Account</h2>

            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label>Email: </label>
                    <input
                        type='email'
                        value={email}
                        onChange={handleEmailChange}
                        className={emailValid ? 'valid' : 'invalid'}
                    ></input>
                        {!emailValid && <span className='error'>Invalid email format</span>}
                    
                </div>

                <div className='form-group'>
                    <label>Password</label>
                    <input type='password'
                    value={password}
                    onChange={handlePasswordChange}
                    className={passwordValid ? 'valid' : 'invalid'}
                    ></input>
                    {!passwordValid && <span className='error'>Password must be atleast 8 characters long</span>}
                    
                </div>

                <div className='form-group'>
                    <label>Confirm Password</label>
                    <input type='password'
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    className={confirmPasswordValid ? 'valid' : 'invalid' }
                    ></input>
                    {!confirmPasswordValid && <span className='error'>Password donot match</span>}
                    
                </div>

                <button type='submit'>Submit</button>

            </form>

        </div>
    )
}

export default SignupForm;
