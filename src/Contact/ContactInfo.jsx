import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    names: "",
    email: "",
    messagess: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://localhost:7188/api/User", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      alert(result.message || "Message sent successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="text-center mb-4">Contact Us</h2>
          <p className="text-center">Have any questions? Feel free to reach out to us.</p>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="p-4 border rounded shadow">
            <div className="mb-3">
              <label className="form-label">Name:</label>
              <input type="text" name="names" value={formData.names} onChange={handleChange} className="form-control" placeholder="Enter your name" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Email:</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} className="form-control" placeholder="Enter your email" required />
            </div>

            <div className="mb-3">
              <label className="form-label">Message:</label>
              <textarea name="messagess" value={formData.messagess} onChange={handleChange} className="form-control" placeholder="Type your message..." rows="5" required></textarea>
            </div>

            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>

          {/* Contact Details */}
          <div className="mt-4 text-center">
            <p><strong>Email:</strong> support@emedicalkart.com</p>
            <p><strong>Phone:</strong> +91 9876543210</p>
            <p><strong>Address:</strong> MACOM, Kerala</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
