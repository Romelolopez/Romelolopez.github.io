import React from 'react';

function Visitors(prop) {
    
      return (
        <div className='Visitors'>
            <div className='VisitorsContent'>
          <p>Website Visitors</p>
          <p>{prop.visit}</p>
          </div>
        </div>
      );
    
  }

  export default Visitors;