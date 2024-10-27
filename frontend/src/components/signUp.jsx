import React, { useState } from 'react';
import bcrypt from 'bcryptjs';

const MyForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    weight: '',
    height: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Encrypt password with bcrypt
      const salt = bcrypt.genSaltSync(10);
      const hashedPassword = bcrypt.hashSync(formData.password, salt);

      // Prepare data to be sent
      const submissionData = {
        ...formData,
        password: hashedPassword, // Replace plain password with hashed one
      };

      // Make the API request
      const response = await fetch('https://your-api-endpoint.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData),
      });

      if (response.ok) {
        const result = await response.json();
        alert('Form submitted successfully!');
        console.log(result);
      } else {
        alert('Error in submission');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Submission failed');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
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
      </div>
      <div>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Weight (kg):
          <input
            type="number"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <div>
        <label>
          Height (cm):
          <input
            type="number"
            name="height"
            value={formData.height}
            onChange={handleChange}
            required
          />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
