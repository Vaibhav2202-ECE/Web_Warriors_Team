import React, { useState } from 'react';

function ReviewForm({ onReviewSubmit }) {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if rating is between 1 and 5
    if (rating < 1 || rating > 5) {
      alert('Please enter a rating between 1 and 5.');
      return;
    }
    // Call the parent component's onReviewSubmit function and pass the review data
    onReviewSubmit({ name, rating, review });
    // Clear the form after submission
    setName('');
    setRating(0);
    setReview('');
  };

  return (
    <div style={{ position: 'relative', backgroundColor: '#c8e6c9', minHeight: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <div style={{ maxWidth: '400px', width: '100%', padding: '20px', borderRadius: '10px', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', backgroundColor: '#ffffff' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '20px', fontSize: '24px' }}>Leave a Review</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="name" style={{ fontSize: '16px', color: 'red' }}>Your Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{ width: '100%', padding: '10px', borderRadius: '5px', border: '1px solid #e4e5e9' }}
            />
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="rating" style={{ fontSize: '16px', color: 'red' }}>Rating (1-5):</label>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              {[...Array(5)].map((_, i) => (
                <span
                  key={i}
                  onClick={() => setRating(i + 1)}
                  style={{ fontSize: '24px', cursor: 'pointer', color: i < rating ? '#ffc107' : '#e4e5e9' }}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <label htmlFor="review" style={{ fontSize: '16px', color: 'red' }}>Review:</label>
            <textarea
              id="review"
              value={review}
              onChange={(e) => setReview(e.target.value)}
              style={{ width: '100%', minHeight: '100px', padding: '10px', borderRadius: '5px', border: '1px solid #e4e5e9' }}
            ></textarea>
          </div>
          <button type="submit" style={{ padding: '10px 20px', backgroundColor: '#007bff', color: '#ffffff', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer' }}>Submit</button>
        </form>
      </div>
    </div>
  );
}

export default ReviewForm;
