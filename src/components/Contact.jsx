import React from 'react';
import { contact } from '../data/data';

const Contact = () => {
  return (
    <section className="py-16 px-6 bg-gray-900 text-white" id="contact">
      <h2 className="text-3xl font-bold text-center mb-10">Contact Us</h2>
      <div className="text-center space-y-4">
        <p>📞 Phone: {contact.phone}</p>
        <p>✉️ Email: {contact.email}</p>
        <p>📍 Address: {contact.address}</p>
      </div>
    </section>
  );
};

export default Contact;
