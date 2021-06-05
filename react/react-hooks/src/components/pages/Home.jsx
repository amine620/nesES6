import React, { useContext } from 'react';
import {context} from '../API/DataCenter'

const Home = () => {
    const {message,show}=useContext(context)
    return (
        <div>
            <h1>home page</h1>
            <h1>{message}</h1>
            <button onClick={show}>click</button>
        </div>
    );
}

export default Home;
