import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './ContactForm.css';
import Loader from './Loader.jsx';

const ContactForm = () => {
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Change the URL to match your server endpoint
      await axios.post('https://contact-form-server-api.vercel.app/send-email', {
        to: formData.email,
        subject:  formData.firstName + ' ' + formData.lastName + ': messaged via Contact form PH NO.:' + formData.phoneNumber ,
        text: formData.message,
      });

      // Redirect to the thank you page
      navigate('/thank-you');
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-container">
      <div className="container">
        <h2>Lets Talk</h2>
        <hr />
        <p>Please fill in this form to contact me.</p>

        <form onSubmit={handleSubmit} autoComplete="on">
          <label>
            First Name:
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Phone Number (Optional):
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
            />
          </label>

          <label>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Message:
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </label>

          <button type="submit" disabled={loading}>
            {loading ? <Loader /> : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
