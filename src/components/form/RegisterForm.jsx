import React from 'react';

const RegisterForm = () => {

    const handleSearch = (event) => {
        event.preventDefault()
        const message = event.target.message.value
        event.target.reset()
        //TODO - update this to the email you want feedback to 
        window.location.href = `mailto:feedback@email.com?body=${encodeURIComponent(message)}`
    }

    return (
        <>
            <form onSubmit={handleSearch}>
                <div className="form-group">
                    <span className="icon fa fa-edit"></span>
                    <textarea name="message" placeholder="Feedback" autoComplete='off' required></textarea>
                </div>
                <div className="form-group text-end">
                    <button type="submit" className="theme-btn btn-style-four"><span className="btn-title">Send Feedback</span></button>
                </div>
            </form>
        </>
    );
};

export default RegisterForm;