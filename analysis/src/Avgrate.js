import React from 'react';

function Avgrate(prop)  {
    
      return (
        <div className='Avgrate'>
            <div className='AvgrateContent'>
          <p>Average Rating</p>
          <p>{prop.rate}</p>
          </div>
        </div>
      );
    
  }

  export default Avgrate;