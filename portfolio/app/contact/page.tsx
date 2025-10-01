import ContactForm from '@/components/ContactForm';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Get In Touch</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information Side */}
          <div className="space-y-8 p-6 bg-white rounded-xl shadow-lg dark:bg-gray-800">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">Contact Details</h3>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Email Address</p>
                  <a href="mailto:jane.doe@example.com" className="text-lg font-semibold hover:text-blue-600 dark:hover:text-blue-400">jane.doe@example.com</a>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Phone</p>
                  <p className="text-lg font-semibold">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                <div>
                  <p className="text-sm font-medium text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-lg font-semibold">Toronto, Ontario, Canada</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact Form Side */}
          <div className="p-6 bg-white rounded-xl shadow-lg dark:bg-gray-800">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">Send Me a Message</h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

// NOTE: You would need to create this client component and a Server Action for submission
// components/ContactForm.tsx
/*
'use client';
import { useState } from 'react';
// import { sendEmailAction } from '@/app/actions'; // <-- Example Server Action import

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [isPending, startTransition] = useTransition(); // Recommended for Server Actions

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('idle');
    startTransition(async () => {
      // 1. Get form data
      const formData = new FormData(e.currentTarget as HTMLFormElement);
      
      // 2. Call an external service (e.g., Formspree endpoint)
      // OR call a Next.js Server Action: await sendEmailAction(formData);

      // Example using a simple API route/external service:
      const response = await fetch('YOUR_FORMSPREE_ENDPOINT_OR_API_ROUTE', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus('error');
      }
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" required placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600" />
      <input type="email" name="email" required placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600" />
      <textarea name="message" required rows={4} placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600"></textarea>
      
      <button 
        type="submit" 
        disabled={isPending}
        className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 disabled:opacity-50"
      >
        {isPending ? 'Sending...' : 'Send Message'}
      </button>

      {status === 'success' && <p className="text-green-500 font-medium mt-2">Message sent successfully!</p>}
      {status === 'error' && <p className="text-red-500 font-medium mt-2">Failed to send message. Please try again.</p>}
    </form>
  );
}
*/