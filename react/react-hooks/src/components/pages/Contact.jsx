import React, { useContext } from 'react';
import { context } from '../API/DataCenter';

const Contact = () => {
    const {message3}=useContext(context)
    return (
        <div>
            <h1>contact page</h1>
            <h1>{message3}</h1>
        </div>
    );
}

export default Contact;
