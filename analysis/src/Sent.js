import React from 'react';

function Sent(prop) {
    return (
    <div className='Sent'>
        <p>Sentiment Analysis</p>
        <ul className='Sent-list'>
            <li>{prop.num1}</li>
            <li>{prop.num2}</li>
            <li>{prop.num3}</li>
        </ul>
    </div>
    );
}

export default Sent;
