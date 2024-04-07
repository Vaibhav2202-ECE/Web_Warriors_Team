import React, { useState } from 'react';
import ReviewForm from './ReviewForm';
import ReviewList from './ReviewList';

function Rev() {
  const [reviews, setReviews] = useState([]);

  const handleReviewSubmit = (newReview) => {
    // Add the new review to the existing list of reviews
    setReviews([...reviews, newReview]);
  };

  return (
    <div>
      <h1>Company Review Page</h1>
      <ReviewForm onReviewSubmit={handleReviewSubmit} />
      <ReviewList reviews={reviews} />
    </div>
  );
}

export default Rev;
