// src/app/contact.tsx
import React from 'react';

const Contact = () => {
  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4 text-black">Contact Us</h1>
      <p className="text-lg text-gray-700">
        We would love to hear from you! Whether you have questions, feedback, or suggestions, feel free to reach out.
      </p>
      <p className="text-lg text-gray-700 mt-4">
        Email us at: <a href="mailto:support@sortify.com" className="text-teal-900">support@sortify.com</a>
      </p>
      <p className="text-lg text-gray-700 mt-4">
        Or follow us on our social channels to stay updated:
        <ul className="mt-2 space-x-4">
          <li className="inline">
            <a href="https://twitter.com/sortify" target="_blank" rel="noopener noreferrer" className="text-teal-900">Twitter</a>
          </li>
          <li className="inline">
            <a href="https://facebook.com/sortify" target="_blank" rel="noopener noreferrer" className="text-teal-900">Facebook</a>
          </li>
        </ul>
      </p>
    </div>
  );
};

export default Contact;
