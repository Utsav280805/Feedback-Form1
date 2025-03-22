
import React, { useState } from 'react';
import './FeedBackForm.css'

const FeedbackForm = () => {
  
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [feedback, setFeedback] = useState('');
 
  const [error, setError] = useState('');
  const [submittedData, setSubmittedData] = useState(null);

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleFeedbackChange = (e) => setFeedback(e.target.value);

  // Validate the form
  const validateForm = () => {
    if (!name || !email || !feedback) {
      setError('All fields are required.');
      return false;
    }
    setError('');
    return true;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); 
    if (validateForm()) {
      setSubmittedData({ name, email, feedback });
      setName('');
      setEmail('');
      setFeedback('');
    }
  };

  return (
    <div className="feedback-form">
      <h2>Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
          />
        </div>

        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label>Feedback:</label>
          <textarea
            value={feedback}
            onChange={handleFeedbackChange}
            placeholder="Enter your feedback"
          />
        </div>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button type="submit">Submit Feedback</button>
      </form>

      {submittedData && (
        <div className="submitted-feedback">
          <h3>Submitted Feedback:</h3>
          <p><strong>Name:</strong> {submittedData.name}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Feedback:</strong> {submittedData.feedback}</p>
        </div>
      )}
    </div>
  );
};

export default FeedbackForm;
