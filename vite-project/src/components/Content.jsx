import React, { useState } from "react";


const Content = () => {
    const [ displayText , setDisplayText ] = useState('');
    const handleClick = () => {
        setDisplayText(document.getElementById('textarea').value)
    };
    return (
        <div >
            <button className="btn-primary btn" onClick={handleClick}>Click here &#8608;</button><br /><br />
            <textarea className="p-3 fs-2" name="" id="textarea" cols="30" rows="3"/>
            <p className="fs-2">{displayText}</p>
        </div>
    );
};

export default Content;