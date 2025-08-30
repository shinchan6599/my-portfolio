import React from 'react';
import SectionTitle from '../../components/SectionTitle';

const ContactPage = () => (
  <main className="max-w-xl mx-auto py-12 px-4">
    <SectionTitle>Contact</SectionTitle>
    <form className="flex flex-col gap-4 mt-8">
      <input type="text" placeholder="Your Name" className="border rounded px-4 py-2" required />
      <input type="email" placeholder="Your Email" className="border rounded px-4 py-2" required />
      <textarea placeholder="Your Message" className="border rounded px-4 py-2" rows={5} required />
      <button type="submit" className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Send</button>
    </form>
  </main>
);

export default ContactPage;
