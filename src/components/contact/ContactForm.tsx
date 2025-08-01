'use client';

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faExclamationTriangle, faSpinner } from '@fortawesome/free-solid-svg-icons';

export default function ContactForm() {
  const [status, setStatus] = useState('');

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus('sending');
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      // NOTE: Replace with your actual Web3Forms Access Key
      data.append('access_key', '7eaec1b2-f2fe-4f3a-b04a-3a2ddaea2b71');

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
        setTimeout(() => setStatus(''), 5000); // Clear status after 5 seconds
      } else {
        setStatus('error');
        console.error('Web3Forms error:', await response.json());
        setTimeout(() => setStatus(''), 5000); // Clear status after 5 seconds
      }
    } catch (error) {
      setStatus('error');
      console.error('Network or other error:', error);
      setTimeout(() => setStatus(''), 5000); // Clear status after 5 seconds
    }
  };

  return (
    <div className="bg-obl-dark-blue border-2 border-obl-blue/50 p-8 rounded-lg shadow-lg">
      {/* Form submission status messages */}
      {status === 'success' && (
        <div
          className="border-2 border-green-500 bg-green-900/50 text-white p-4 rounded-md mb-6 flex items-center gap-x-3"
          role="alert">
          <FontAwesomeIcon icon={faCheckCircle} className="h-6 w-6 text-green-400" />
          <div>
            <strong className="font-bold">Success!</strong>
            <span className="block">Your message has been sent.</span>
          </div>
        </div>
      )}
      {status === 'error' && (
        <div
          className="border-2 border-red-500 bg-red-900/50 text-white p-4 rounded-md mb-6 flex items-center gap-x-3"
          role="alert">
          <FontAwesomeIcon icon={faExclamationTriangle} className="h-6 w-6 text-red-400" />
          <div>
            <strong className="font-bold">Error!</strong>
            <span className="block">There was an issue sending your message.</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Hidden fields for Web3Forms */}
        <input type="hidden" name="access_key" value="7eaec1b2-f2fe-4f3a-b04a-3a2ddaea2b71" />
        <input type="hidden" name="subject" value="New Inquiry from One Buffalo Games" />

        <div>
          <label
            htmlFor="name"
            className="font-orbitron text-sm font-bold uppercase tracking-wider">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            className="mt-2 w-full bg-foreground/20 border-2 border-obl-blue rounded py-2 px-3 font-mono focus:outline-none focus:ring-2 focus:ring-obl-red"
            required
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="font-orbitron text-sm font-bold uppercase tracking-wider">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-2 w-full bg-foreground/20 border-2 border-obl-blue rounded py-2 px-3 font-mono focus:outline-none focus:ring-2 focus:ring-obl-red"
            required
          />
        </div>
        <div>
          <label
            htmlFor="subject"
            className="font-orbitron text-sm font-bold uppercase tracking-wider">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            className="mt-2 w-full bg-foreground/20 border-2 border-obl-blue rounded py-2 px-3 font-mono focus:outline-none focus:ring-2 focus:ring-obl-red"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="font-orbitron text-sm font-bold uppercase tracking-wider">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="mt-2 w-full bg-foreground/20 border-2 border-obl-blue rounded py-2 px-3 font-mono focus:outline-none focus:ring-2 focus:ring-obl-red"
            required></textarea>
        </div>
        <div>
          <button
            type="submit"
            disabled={status === 'sending'}
            className="w-full font-orbitron bg-obl-red text-white text-lg font-bold py-3 px-8 border-b-4 border-red-800 rounded-md hover:bg-red-500 hover:border-red-700 active:translate-y-1 active:border-b-2 transition-all duration-150 transform shadow-lg disabled:bg-gray-600 disabled:border-gray-800 disabled:cursor-not-allowed flex items-center justify-center gap-x-2">
            {status === 'sending' && (
              <FontAwesomeIcon icon={faSpinner} className="animate-spin h-5 w-5" />
            )}
            {status === 'sending' ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
}
