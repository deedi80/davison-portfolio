'use client';

import { useState, useTransition } from 'react';

// NOTE: You will need to create this file in a later step.
// For now, this is a placeholder import for the server function.
// Create the file: 'app/actions/contact.ts'
import { sendEmailAction } from '@/app/actions/contact'; 

export default function ContactForm() {
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState<'idle' | 'success' | 'error' | 'sending'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Reset status and set to sending
    setStatus('sending');
    
    // Get form data
    const formData = new FormData(e.currentTarget as HTMLFormElement);

    startTransition(async () => {
      try {
        // Call the server action with the form data
        const result = await sendEmailAction(formData);

        if (result.success) {
          setStatus('success');
          (e.target as HTMLFormElement).reset(); // Clear the form
        } else {
          // Display the error message returned from the server
          setStatus('error');
          console.error('Submission Error:', result.message);
          // Optionally, display result.message to the user
        }
      } catch (error) {
        setStatus('error');
        console.error('Unexpected Error:', error);
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input 
        type="text" 
        name="name" 
        required 
        placeholder="Your Name" 
        className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500" 
        disabled={isPending}
      />
      <input 
        type="email" 
        name="email" 
        required 
        placeholder="Your Email" 
        className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500" 
        disabled={isPending}
      />
      <textarea 
        name="message" 
        required 
        rows={4} 
        placeholder="Your Message" 
        className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 focus:ring-blue-500 focus:border-blue-500"
        disabled={isPending}
      ></textarea>
      
      <button 
        type="submit" 
        disabled={isPending}
        className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isPending || status === 'sending' ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="text-green-500 font-medium mt-2 flex items-center">
          ✅ Message sent successfully! I'll be in touch soon.
        </p>
      )}
      {status === 'error' && (
        <p className="text-red-500 font-medium mt-2 flex items-center">
          ❌ Failed to send message. Please try again or email me directly.
        </p>
      )}
    </form>
  );
}