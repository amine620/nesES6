import React, { useContext } from 'react';
import { context } from '../API/DataCenter';

const About = () => {
    const {message2}=useContext(context)
    return (
        <div>
            <h1>About page</h1>
            <h1>{message2}</h1>
        </div>
    );
}

export default About;
