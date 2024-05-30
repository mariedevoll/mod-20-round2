import React, { useState } from 'react';

function ContactPage() {
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errorMessage, setErrorMessage] = useState("");
    const { name, email, message } = formState;

    const handleSumbit = (event) => {
        event.preventDefault();
        if (!errorMessage) {
            alert("Submit Form");
            console.log("submit form", formState);
        }
    };

    const validateEmail = (email) => {
        const re =  /^[a-zA-Z0-9. _%+-]+@[a-zA-Z0-9. -]+\\. [a-zA-Z]{2,}$/;
        return re.test(String(email).toLowerCase());
    };

    const handleChange = (event) => {
        const { name, value } = event.target;

        if (name === "email") {
            const isValid = validateEmail(value);
            if (!isValid) {
                setErrorMessage("Email is invalid, try again");
            } else {
                setErrorMessage("");
            }
        } else {
            if (!value.length) {
                setErrorMessage(`message is required`);
            } else {
                setErrorMessage("");
            }
        }
        setFormState({ ...formState, [name]: value});
    };

    return (
        <section className='contact-section'>
            <h1>Contact Me</h1>
            <form id='contact-form' onSubmit={handleSumbit} className='contact-form'>
                <div className='form-group'>
                    <label htmlFor='name'>Name: </label>
                    <input type='text' name='name' defaultValue={name} onBlur={handleChange} className='form-control'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email: </label>
                    <input type='text' name='email' defaultValue={email} onBlur={handleChange} className='form-control'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='message'>Message: </label>
                    <textarea name='message' rows="5" defaultValue={message} onBlur={handleChange} className='form-control'/>
                </div>
                {errorMessage && (
                    <div className='error-message'>
                        <p>{errorMessage}</p>
                    </div>
                )}
                <button type='submit' className='submit-button'>Submit</button>
            </form>
        </section>
    );
}
export default ContactPage;