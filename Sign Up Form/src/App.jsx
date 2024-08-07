import React, { useState, useEffect } from 'react';

export default function Header(){

    const [formSubmission, handleForm] = useState({
        email: '',
        password: '',
        confirmpassword: '',
        isChecked: false
    })

    function handleInformation(event){
        const {type, name, value, checked } = event.target
        handleForm(prevState => ({
            ...prevState,
            [name]: type === 'email' || 'password' ? value : checked
        }))
    }

    function handleCheckBox(event){
        handleForm(prevState => ({
            ...prevState,
            [event.target.name]: event.target.checked
        }))
    }

    function handleSubmit(event){
        event.preventDefault()
        if (formSubmission.password === formSubmission.confirmpassword){
            alert('Successfully signed up')
            if (formSubmission.isChecked = true){
                alert("Thanks for subscribing to our news letter")
            }
        }
        else {
            alert("Password do not match")
        }
        
        
        
    }
    
    return (
        
        <>
        <form onSubmit={handleSubmit}>
            <input
            type='email'
            placeholder='Write your Email'
            name='email'
            onChange={handleInformation}
            value={formSubmission.email}
            required
            />
            <br/>
            <br/>
            <input
            type='password'
            placeholder='Write your password'
            name='password'
            onChange={handleInformation}
            value={formSubmission.password}
            />
            <br/>
            <br/>
            <input
            type='password'
            placeholder='Confirm your Password'
            name='confirmpassword'
            onChange={handleInformation}
            value={formSubmission.confirmpassword}
            />
            <br/>
            <br/>
            <input
            type='checkbox'
            checked={formSubmission.isChecked}
            name='isChecked'
            onChange={handleCheckBox}

            />
            <label>I want to join the newsletter</label>
            <br/>
            <br/>
            <button>Sign Up</button>
        </form>
        </>
    )
}