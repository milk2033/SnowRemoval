'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';
import { sendGAEvent } from '@/lib/gtag';

type FormData = {
  name: string;
  phone: string;
  email: string;
  address: string;
  service: string;
  message: string;
};

export default function ContactForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      // ------------------------------------------------------------------
      // GOOGLE ANALYTICS TRACKING
      // ------------------------------------------------------------------
      sendGAEvent('lead_submit', {
        category: 'form',
        label: 'contact_page_submit',
        service_requested: data.service
      });

      setSubmitStatus('success');
      reset();
    } catch (error) {
      console.error(error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-green-50 border border-green-200 p-8 rounded-xl text-center animate-in fade-in duration-300">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <CheckCircle className="h-8 w-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-green-800 mb-2">Quote Request Sent!</h3>
        <p className="text-green-700 mb-6">
          Thanks! We've received your information. A member of our team will review your property and contact you shortly.
        </p>
        <button 
          onClick={() => setSubmitStatus('idle')}
          className="text-green-800 underline font-semibold hover:text-green-900"
        >
          Submit another request
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-slate-100 relative overflow-hidden">
      {/* Loading Overlay */}
      {isSubmitting && (
        <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-10 flex flex-col items-center justify-center text-blue-600">
          <Loader2 className="h-10 w-10 animate-spin mb-2" />
          <p className="font-semibold">Submitting your request...</p>
        </div>
      )}

      <h3 className="text-2xl font-bold text-slate-900 mb-6">Get Your Free Quote</h3>
      
      {submitStatus === 'error' && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-md flex items-start gap-3 text-red-700">
          <AlertCircle className="h-5 w-5 flex-shrink-0 mt-0.5" />
          <p className="text-sm">Something went wrong. Please try again or call us directly.</p>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">Full Name <span className="text-red-500">*</span></label>
          <input 
            {...register("name", { required: "Name is required" })}
            id="name"
            className={`w-full px-4 py-2 border rounded-md outline-none transition-all text-slate-900 ${errors.name ? 'border-red-300 focus:ring-red-200' : 'border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500'}`}
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1 font-medium">{errors.name.message}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">Phone Number <span className="text-red-500">*</span></label>
            <input 
              {...register("phone", { 
                required: "Phone is required",
                pattern: {
                  value: /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                  message: "Valid phone number required"
                }
              })}
              id="phone"
              type="tel"
              className={`w-full px-4 py-2 border rounded-md outline-none transition-all text-slate-900 ${errors.phone ? 'border-red-300 focus:ring-red-200' : 'border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500'}`}
              placeholder="(920) 555-0123"
            />
            {errors.phone && <p className="text-red-500 text-xs mt-1 font-medium">{errors.phone.message}</p>}
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">Email Address <span className="text-red-500">*</span></label>
            <input 
              {...register("email", { 
                required: "Email is required", 
                pattern: { value: /^\S+@\S+$/i, message: "Invalid email format" } 
              })}
              id="email"
              type="email"
              className={`w-full px-4 py-2 border rounded-md outline-none transition-all text-slate-900 ${errors.email ? 'border-red-300 focus:ring-red-200' : 'border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500'}`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email.message}</p>}
          </div>
        </div>

        <div>
          <label htmlFor="address" className="block text-sm font-medium text-slate-700 mb-1">Property Address <span className="text-red-500">*</span></label>
          <input 
            {...register("address", { required: "Service address is required" })}
            id="address"
            className={`w-full px-4 py-2 border rounded-md outline-none transition-all text-slate-900 ${errors.address ? 'border-red-300 focus:ring-red-200' : 'border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500'}`}
            placeholder="123 Winter St, Green Bay, WI"
          />
          {errors.address && <p className="text-red-500 text-xs mt-1 font-medium">{errors.address.message}</p>}
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium text-slate-700 mb-1">Service Needed <span className="text-red-500">*</span></label>
          <select 
            {...register("service", { required: "Please select a service" })}
            id="service"
            className={`w-full px-4 py-2 border rounded-md outline-none transition-all bg-white text-slate-900 ${errors.service ? 'border-red-300 focus:ring-red-200' : 'border-slate-300 focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500'}`}
          >
            <option value="">Select a service...</option>
            <option value="Residential Plowing">Residential Plowing</option>
            <option value="Commercial Snow Removal">Commercial Snow Removal</option>
            <option value="Ice Dam Removal">Ice Dam Removal</option>
            <option value="Salting">Salting / De-icing</option>
            <option value="Roof Clearing">Roof Snow Clearing</option>
            <option value="Other">Other</option>
          </select>
          {errors.service && <p className="text-red-500 text-xs mt-1 font-medium">{errors.service.message}</p>}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">Message (Optional)</label>
          <textarea 
            {...register("message")}
            id="message"
            rows={4}
            className="w-full px-4 py-2 border border-slate-300 rounded-md focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 outline-none transition-all text-slate-900"
            placeholder="Any specific details? (e.g. 'Steep driveway', 'Corner lot', 'Gate code')"
          ></textarea>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 px-4 rounded-md transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed mt-4 text-lg"
        >
          {isSubmitting ? 'Processing...' : 'Submit Request'}
        </button>
        
        <p className="text-xs text-slate-400 text-center mt-4">
          Your information is secure. We never share your data with third parties.
        </p>
      </div>
    </form>
  );
}
