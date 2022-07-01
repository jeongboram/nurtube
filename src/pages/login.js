import React, { useState } from 'react'

const login = () => {

    
    const onSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <section className='login-wrapper'>
                <form onSubmit={onSubmit}>
                    <input type="text" />
                    <input type="submit" value="submit" />
                </form>
            </section>
        </>
    )
};

export default login

