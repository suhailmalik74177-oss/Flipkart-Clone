import React, { useState } from 'react';

const BecomeSeller = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    shopName: '',
    gstNumber: ''
  });

  const [submitted, setSubmitted] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Seller Details Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '50px auto',
        padding: '30px',
        border: '1px solid #e0e0e0',
        borderRadius: '12px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#fff',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h1 style={{ textAlign: 'center', marginBottom: '25px', color: '#2c3e50' }}>
        Become a Seller
      </h1>

      {submitted ? (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <h3 style={{ color: '#27ae60' }}>Thank you for registering!</h3>
          <p>We will contact you soon.</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {[
            { label: 'Full Name', name: 'name', type: 'text', required: true },
            { label: 'Email Address', name: 'email', type: 'email', required: true },
            { label: 'Phone Number', name: 'phone', type: 'tel', required: true },
            { label: 'Shop Name', name: 'shopName', type: 'text', required: true },
            { label: 'GST Number (optional)', name: 'gstNumber', type: 'text', required: false },
          ].map((field) => (
            <div key={field.name} style={{ marginBottom: '20px' }}>
              <label
                htmlFor={field.name}
                style={{
                  fontWeight: 'bold',
                  display: 'block',
                  marginBottom: '6px',
                  color: '#34495e',
                }}
              >
                {field.label}
              </label>
              <input
                id={field.name}
                name={field.name}
                type={field.type}
                value={formData[field.name]}
                onChange={handleChange}
                required={field.required}
                style={{
                  width: '100%',
                  padding: '10px',
                  border: '1px solid #ccc',
                  borderRadius: '6px',
                  fontSize: '15px',
                  outline: 'none',
                  transition: '0.3s',
                }}
                onFocus={(e) => (e.target.style.borderColor = '#007bff')}
                onBlur={(e) => (e.target.style.borderColor = '#ccc')}
              />
            </div>
          ))}

          <button
            type="submit"
            style={{
              width: '100%',
              padding: '12px',
              background: 'green',
              color: '#fff',
              fontSize: '16px',
              border: 'none',
              borderRadius: '8px',
              cursor: 'pointer',
              transition: '0.3s',
            }}
            onMouseOver={(e) => (e.target.style.opacity = '0.9')}
            onMouseOut={(e) => (e.target.style.opacity = '1')}
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default BecomeSeller;
