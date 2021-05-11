import React from 'react';

function Reviews(prop) {
    
      return (
        <div className='Reviews'>
        <div className='ReviewsContent'>
          <p>Reviews</p>
          <p>{prop.review}</p>
          </div>
        </div>
      );
    
  }

  export default Reviews;