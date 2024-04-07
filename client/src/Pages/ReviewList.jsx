import React from 'react';
import Avatar from 'react-avatar';

function ReviewList({ reviews }) {
  return (
    <div>
      <h2>Reviews:</h2>
      {reviews.map((review, index) => (
        <div key={index} style={{ marginBottom: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <Avatar name={review.name} size="30" round={true} style={{ marginRight: '10px' }} />
            <p style={{ fontWeight: 'bold', marginBottom: '0' }}>{review.name}</p>
          </div>
          <div>
            {[...Array(5)].map((_, i) => (
              <span key={i}>{i < review.rating ? '★' : '☆'}</span>
            ))}
          </div>
          <p>{review.review}</p>
        </div>
      ))}
    </div>
  );
}

export default ReviewList;
